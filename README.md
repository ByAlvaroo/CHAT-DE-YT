# Chat Replay · Twitch en YouTube
Hecho por **@byalvaro__**

Extensión de Chrome que muestra el chat de Twitch (descargado con TwitchDownloaderWPF) sincronizado con los vídeos de YouTube.

## Instalar
1. Descarga **[chat-replay-youtube.zip](https://github.com/ByAlvaroo/CHAT-DE-YT/raw/HEAD/chat-replay-youtube.zip)** y descomprímelo en una carpeta que no vayas a borrar.
2. Abre `chrome://extensions`, activa **Modo de desarrollador** y pulsa **Cargar descomprimida** → elige la carpeta `chat-replay-youtube`.

## Actualizar
Cuando haya una versión nueva, al abrir YouTube te sale un aviso con lo nuevo y te pregunta cómo actualizar:
- **⚡ Automática**: con un clic se reemplaza la extensión en su carpeta y YouTube vuelve al mismo minuto (la primera vez eliges la carpeta y das permiso).
- **📦 Manual**: Descargar → descomprimir encima de la misma carpeta → **Ya está → Recargar**.

No se pierde nada: ni ajustes, ni chats, ni la sesión.

Todas las instrucciones están en [`chat-replay-youtube/LEEME.md`](chat-replay-youtube/LEEME.md).

## Publicar una versión nueva
1. Sustituye la carpeta `chat-replay-youtube` y el `chat-replay-youtube.zip` por los nuevos.
2. En `version.json` pon el mismo número que en `chat-replay-youtube/manifest.json`, **una frase corta con lo nuevo en `resumen`** (sale destacada en el aviso) y la lista completa en `notes`.
3. GitHub Desktop → **Commit to main** → **Push origin**.

## Cuentas (cuentas.json)
`cuentas.json` pone o cambia la contraseña de cualquier cuenta, o la bloquea. Lo que diga este archivo manda:

```json
{
  "cuentas": {
    "pepe": { "salt": "…", "it": 150000, "hash": "…" },
    "ana": { "bloqueada": true }
  }
}
```

La línea de cada cuenta se genera en la extensión: Ajustes → Tu cuenta → «Cuentas en GitHub (administrador)» (con Opciones avanzadas) → nombre + contraseña → **Generar línea**. Pégala dentro de `"cuentas"`, y Commit + Push. Aquí nunca va la contraseña, solo su huella cifrada (el repositorio es público).
