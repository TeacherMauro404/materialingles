import json,sys,os,wave,subprocess,io
from multiprocessing import Pool
SP=sys.argv[1];OUT='/home/user/materialingles/audio/clases'
keys=json.load(open(SP+'/tts_texts.json'))
def fnv(s):
    h=0x811c9dc5
    b=s.encode('utf-16-le')
    for i in range(0,len(b),2):
        c=b[i]|(b[i+1]<<8);h^=c;h=(h*0x01000193)&0xffffffff
    return '%08x'%h
hs={};
for k in keys:
    h=fnv(k);assert h not in hs,('colision',k,hs[h]);hs[h]=k
V=None
def init():
    global V
    from piper import PiperVoice
    V=[PiperVoice.load('/tmp/claude-0/voices/en_US-lessac-high.onnx'),PiperVoice.load('/tmp/claude-0/voices/en_US-ryan-high.onnx')]
def job(k):
    from piper import SynthesisConfig
    h=fnv(k);f=f'{OUT}/{h}.mp3'
    if os.path.exists(f):return h
    v=int(k[0]);t=k[2:]
    buf=io.BytesIO()
    with wave.open(buf,'wb') as w:V[v].synthesize_wav(t,w,syn_config=SynthesisConfig(length_scale=1.08))
    p=subprocess.run(['ffmpeg','-loglevel','error','-y','-f','wav','-i','pipe:0','-ac','1','-ar','22050','-b:a','40k',f],input=buf.getvalue())
    return h
if __name__=='__main__':
    with Pool(int(sys.argv[2]),initializer=init) as p:
        n=0
        for h in p.imap_unordered(job,keys,chunksize=8):
            n+=1
            if n%250==0:print(n,flush=True)
    json.dump(sorted(hs),open(SP+'/audio_hashes.json','w'))
    print('DONE',n)
