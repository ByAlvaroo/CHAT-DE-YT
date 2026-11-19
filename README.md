# Chat Replay · Twitch en YouTube
Hecho por **@byalvaro__**

Extensión de Chrome que muestra el chat de Twitch (descargado con TwitchDownloaderWPF) sincronizado con los vídeos de YouTube.

## Instalar
1. Descarga **[chat-replay-youtube.zip](https://github.com/ByAlvaroo/CHAT-DE-YT/raw/HEAD/chat-replay-youtube.zip)** y descomprímelo en una carpeta que no vayas a borrar.
2. Abre `chrome://extensions`, activa **Modo de desarrollador** y pulsa **Cargar descomprimida** → elige la carpeta `chat-replay-youtube`.

## Actualizar
Cuando haya una versión nueva, al abrir YouTube te sale un aviso: **Descargar** → descomprime el zip encima de la misma carpeta (reemplazar) → **Ya está → Recargar**. No se pierde nada: ni ajustes, ni chats, ni la sesión.

Todas las instrucciones están en [`chat-replay-youtube/LEEME.md`](chat-replay-youtube/LEEME.md).

## Publicar una versión nueva
1. Sustituye la carpeta `chat-replay-youtube` y el `chat-replay-youtube.zip` por los nuevos.
2. En `version.json` pon el mismo número que en `chat-replay-youtube/manifest.json` y las novedades en `notes`.
3. GitHub Desktop → **Commit to main** → **Push origin**.
