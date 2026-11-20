# Audio con voz natural para clases.html

Las presentaciones reproducen audio pregrabado con voz neuronal (Piper TTS):
- `en_US-lessac-high`: voz principal (femenina).
- `en_US-ryan-high`: segundo personaje de los diálogos (masculina).

Si una frase no tiene audio, se usa la mejor voz disponible en el navegador.

## Regenerar (tras agregar o cambiar clases)
1. `node audio/generar/1_extraer_frases.js <carpeta_temporal>` — crea `tts_texts.json` con todas las frases (requiere Playwright).
2. Descargar las voces de https://huggingface.co/rhasspy/piper-voices (archivos `.onnx` y `.onnx.json`) en `/tmp/claude-0/voices/`.
3. `pip install piper-tts` y `python3 audio/generar/2_generar_audio.py <carpeta_temporal> 1`. Solo genera los audios que faltan.
4. Regenerar `audio/clases/index.js` con la lista de hashes (ver `audio_hashes.json` en la carpeta temporal).
