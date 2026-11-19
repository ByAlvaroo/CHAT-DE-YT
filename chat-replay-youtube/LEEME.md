# Chat Replay · Twitch en YouTube
Hecho por **@byalvaro__**

## Instalar
1. Descomprime el .zip en una carpeta que no vayas a borrar.
2. Abre `chrome://extensions`, activa **Modo de desarrollador** (arriba a la derecha).
3. Pulsa **Cargar descomprimida** y elige la carpeta `twitch-chat-replay`.
4. Abre un vídeo de YouTube: verás el **icono azul del chat** en los controles del reproductor. El chat siempre empieza **cerrado**: púlsalo (o Alt + C) para abrirlo. Un puntito azul en el icono indica que ese vídeo ya tiene chat.

## Preparar los chats (TwitchDownloaderWPF)
1. Pestaña **Chat Download** → pega el enlace del directo (VOD).
2. Formato **JSON** y marca **Embed Images** (guarda emotes e insignias dentro del archivo). También vale comprimido (.json.gz).
3. Sube el .json a tu carpeta de Drive (compartida como «Cualquier persona con el enlace»).
4. **Nombra el archivo con el título del vídeo de YouTube**: la extensión lo encuentra y lo carga sola.

Los archivos se leen directamente en el navegador (no se descargan a tu PC) y quedan guardados para siempre en la biblioteca del navegador.

## Directos divididos en partes
Si un directo se cortó en varios VODs pero en YouTube es un solo vídeo, descarga cada chat y añade al final del nombre **[[parte1]]**, **[[parte2]]**… (también vale `[[parte 1]]`):

- `MI REACCIÓN AL GAMEPLAY DE GTA VI [[parte1]].json`
- `MI REACCIÓN AL GAMEPLAY DE GTA VI [[parte2]].json`

Se unen en un solo chat: cuando acaba la parte 1 sigue la parte 2 (sale un aviso «▶ Parte 2 del chat»). La etiqueta no cuenta al comparar con el título del vídeo, así que la carga automática sigue funcionando. Desde la Biblioteca también puedes añadir un chat guardado con «＋ Como parte 2».

En el menú de **Sincronización** (pulsa el estado del chat, arriba) aparece un bloque por cada VOD (pulsa «VOD 2» para abrirlo). Todo lo que cambias en un VOD afecta **solo a ese VOD**: los anteriores no se tocan.
- **Mover**: −5 / −1 / +1 / +5 s o 🎯 (pulsa un mensaje de ese VOD). Si lo adelantas y se pisa con el VOD 1, el VOD 2 no se empieza a ver hasta que acaba el chat del VOD 1.
- **Chat desde / hasta**: el chat de ese VOD empieza y termina donde tú digas (minuto de SU chat, p. ej. `5:00`). Lo de antes y lo de después se descarta.
- **Saltos de ese VOD**: «Salto en `35:00` (minuto del vídeo) de `+10:00`». Se pueden quitar con ✕.

## Volver a descargar el chat (1.3)
Arriba del todo en Sincronización (y en Ajustes → Sincronización) está **↻ Volver a descargar el chat**: baja otra vez de Drive el chat del vídeo que estás viendo (todas sus partes). Tu sincronización (desfase, saltos, ajustes de cada VOD) se mantiene.

## Extras (Ajustes → Extras)
Todos vienen **desactivados**; actívalos si los quieres:
- **Mapa de calor en la barra de YouTube**: la barra de progreso se colorea en azul según la actividad del chat.
- **Gráfica de actividad en el chat**: barra arriba del chat con los picos.
- **Marcadores**: botón 🔖 o **Alt + B** para guardar momentos con una nota; salen en la barra de YouTube.
- **Contador de spam de emotes**: cuando el chat spamea un emote aparece en grande («KEKW ×350»).
- **Modo cine total** (en Posición y tamaño): con el chat encima del vídeo, se vuelve translúcido y desaparece si no mueves el ratón.

## En el chat
- **Respuestas en hilo**: «↪ @usuario: …» encima de cada respuesta; púlsalo para ver el mensaje original.
- **Mensajes eliminados**: tachados (o normales u ocultos), si el archivo los incluye.
- **Qué mensajes se ven** (botón del embudo): streamer, moderadores, VIP, suscriptores, resto, mensajes solo de emotes y avisos de subs. Todo visible por defecto.

## Copia de seguridad (Ajustes → Biblioteca)
Exporta en un archivo tus ajustes, la sincronización de cada vídeo (desfases, cortes, partes, marcadores) y, si quieres, todos los chats. Impórtalo en otro navegador u ordenador para tenerlo todo igual.

## La sincronización se guarda siempre
El desfase, los cortes, las esperas entre partes, el modo y los marcadores de cada vídeo se guardan aparte del chat. Aunque borres un chat, vacíes la biblioteca, llegues al límite de espacio o desvincules el chat, al volver a cargarlo se aplica sola (el chat vacío muestra «✓ Sincronización guardada»). Solo se pierde con «Borrar también la sincronización» en la Biblioteca.

## Almacenamiento
Por defecto el límite es **1 GB** (Ajustes → Biblioteca; también 512 MB, 2 GB, 5 GB o sin límite). Al llegar, se borran los chats guardados menos el del vídeo que estás viendo. La sincronización de cada vídeo (desfase, cortes, partes y marcadores) se conserva, y el chat se vuelve a descargar de Drive solo al abrir ese vídeo. También hay un botón «Liberar espacio ahora».

## Saltos del chat (vídeos recortados después de subirlos)
Si con el editor de YouTube quitaste un trozo en mitad del vídeo, añade un **salto del chat**: Sincronización → «Añadir salto del chat» → **En el minuto `2:00` el chat salta `+10:00`**. Desde ese punto el chat avanza esos 10 minutos y vuelve a ir sincronizado. Con **−** el chat retrocede (p. ej. `−1:30`). Vale `2` (= 2 minutos), `2:30`, `1:02:30`, `90s` o `10m`. Cada salto se puede editar o quitar después.

## Ajustar con enlaces de Twitch (1.4)
En Sincronización (arriba, «🔗 Ajustar con enlaces de Twitch») o en Ajustes → Sincronización, pega **un enlace por VOD** con dónde empieza y dónde acaba en el vídeo de YouTube:

```
https://www.twitch.tv/videos/2345678901?t=0h5m10s hasta 3:02:00
https://www.twitch.tv/videos/2345678902 desde 0:00 hasta 1:30:00
```

- **Inicio**: el `?t=` del enlace (botón «Compartir» de Twitch con «Empezar en») o `desde 5:10`.
- **Final**: `hasta 3:02:00`, o pega otra vez el mismo enlace con el `?t=` del final en la línea siguiente.
- También vale `0:05:10 - 3:02:00`, o poner `desde … hasta …` en la línea de debajo del enlace.
- Opcional `yt 1:30:00`: ese VOD empieza en ese minuto del vídeo de YouTube. Si no lo pones, cada VOD va **justo detrás del anterior**.
- Cada enlace se empareja con su chat por el número del VOD (si el archivo lo trae) y, si no, por orden.

Se ajustan solos el VOD 1 y los demás (desfase, «desde/hasta» y posición de cada VOD). Los saltos que ya tengas se mantienen.

## Contraseña de la cuenta (1.4)
Para iniciar sesión hacen falta tu nombre **y tu contraseña**:
- **Cuenta nueva** o cuenta de antes sin contraseña: al iniciar sesión eliges una (mínimo 4 caracteres, la escribes dos veces).
- Si ya tenías la sesión iniciada, en Ajustes → Tu cuenta sale «⚠ Tu cuenta no tiene contraseña»: ponle una ahí.
- Para cambiarla: Ajustes → Tu cuenta → Contraseña (pide la actual).
- La contraseña no se guarda en ningún sitio, solo una huella cifrada en tu cuenta de Google de Chrome, así que te la pedirá en cualquier ordenador. Si la olvidas no se puede recuperar.

## Círculo azul en las listas de YouTube
En la búsqueda, el inicio y los recomendados, los vídeos que tienen chat llevan un **círculo azul** a la derecha del canal y del verificado, y su **duración** pasa de fondo negro a **azul translúcido**: los que ya tienen chat y los que coinciden con un archivo de tu Drive según el «Parecido mínimo». Se apaga en Ajustes → Extras.

## Sesión (1.2)
La sesión ya no se inicia sola: se queda solo en este navegador. Quien instale la extensión empieza sin sesión; para recuperar tu configuración en otro ordenador, inicia sesión con tu nombre.

## Atajos
- **Alt + C**: mostrar / ocultar el chat
- **Alt + ,** / **Alt + .**: mover el chat 1 s (con Shift, 5 s)
- **Alt + B**: añadir un marcador (si están activados)
- **Ctrl + F** (con el chat enfocado): buscar en el chat
- Clic en un nombre: tarjeta del usuario · Clic en la **hora** de un mensaje: saltar a ese momento (pulsar el resto del mensaje no mueve el vídeo)
- Buscar 🔍 → pulsa **🎯** en un resultado para decir «este mensaje es de ahora» y ajustar el chat. Con «Ajustar con un mensaje» activo también puedes buscarlo y pulsarlo en los resultados.
- Clic en la gráfica: saltar · Clic derecho en la gráfica: momentos con más chat

## Pantalla completa
Por defecto el vídeo se hace más pequeño y el chat queda **fijo a la derecha**. Arrastra el borde izquierdo del chat para cambiar su ancho. En Ajustes → Posición y tamaño → Pantalla completa puedes elegir «Encima del vídeo» (chat flotante) u «Ocultar».

## Vídeos recortados
Si el vídeo de YouTube dura menos que el chat, aparece un aviso con la diferencia. Ve al punto donde el chat empieza a ir adelantado y pulsa **✂ Corte aquí**: desde ahí el chat pega el mismo salto que el vídeo. Puedes añadir varios cortes en Ajustes → Sincronización.

## Actualizaciones desde GitHub (1.6)
Las versiones nuevas se publican en **github.com/ByAlvaroo/CHAT-DE-YT**. Al abrir YouTube, si hay una versión más nueva sale un aviso arriba a la derecha:
1. **Descargar**: baja el zip.
2. Descomprímelo **encima de la carpeta de la extensión** (en el mismo sitio que la primera vez, aceptando reemplazar los archivos).
3. **Ya está → Recargar**: la extensión se reinicia y la página se recarga. Sale «✓ Chat Replay actualizado».

Tus ajustes, chats, sincronización y sesión **no se pierden** (el identificador de la extensión es fijo). Si pulsas Recargar sin haber reemplazado los archivos, el aviso te lo dice. «Más tarde» lo calla 24 h y «Omitir esta versión» hasta la siguiente. Se configura en Ajustes → Acerca de → Actualizaciones (repositorio, «Buscar ahora», activar o desactivar el aviso).

**Para publicar una versión** (ByAlvaro): copia en el repositorio la carpeta `chat-replay-youtube` y el `chat-replay-youtube.zip` nuevos, cambia el número en `version.json` (el mismo que en `manifest.json`) y escribe las novedades en `notes`. Luego, en GitHub Desktop, **Commit** y **Push origin**. El repositorio tiene que ser **público**.

## Actualizar sin perder nada
Descomprime la versión nueva **encima de la misma carpeta** (reemplazando los archivos) y en `chrome://extensions` pulsa **↻** en la extensión. No pulses «Quitar»: así se conservan los ajustes, la sincronización y los chats guardados.

## ⚠ Al instalar la versión 1.1 (solo si vienes de la 1.0)
Esta versión tiene un identificador fijo para que tu cuenta te siga siempre, así que Chrome la trata como una extensión nueva:
1. **Antes de quitar la vieja**: Ajustes → Biblioteca → Copia de seguridad → **Exportar copia completa**.
2. Quita la versión vieja y carga esta («Cargar descomprimida»).
3. Ajustes → Biblioteca → **Importar** la copia. Desde aquí ya no hace falta nunca más: inicia sesión y todo se guarda solo.

## Tu cuenta (Ajustes → Tu cuenta)
- **Iniciar sesión** con tu nombre y tu contraseña: tus ajustes, la posición del chat y la sincronización de cada vídeo (desfases, cortes, partes, marcadores y de qué archivo de Drive sale el chat) se guardan en tu **cuenta de Google de Chrome**.
- Si reinstalas la extensión o usas otro ordenador con la misma cuenta de Chrome, se recupera todo solo (los chats se vuelven a bajar de Drive al abrir cada vídeo).
- Para que pase entre ordenadores, Chrome tiene que tener activada la sincronización de **Extensiones**.

## Configuración de ByAlvaro para todos
- **ByAlvaro** inicia sesión con ese nombre y, en «Publicar tu configuración para todos», pone su repositorio público de GitHub y su token. Desde ese momento cada cambio que haga (ajustes, desfases, cortes, el chat de cada vídeo) se publica solo a los pocos segundos.
- **Los demás** siguen esa configuración (activado por defecto; se comprueba al abrir Chrome, cada 30 min y al abrir un vídeo):
  - lo que no han tocado se actualiza solo como lo tenga ByAlvaro;
  - lo que cambian ellos se queda como lo dejan, aunque ByAlvaro lo vuelva a cambiar.
- **↺ Restablecer a ByAlvaro…**: «Solo los ajustes», «Todo» o «Elegir vídeos» (salen marcados los que has cambiado tú). Lo restablecido vuelve a seguir sus cambios.

## Pegar todos los cortes de una vez (Sincronizador YT-Twitch)
Ajustes → Sincronización → **Pegar del Sincronizador**: pega el resultado completo del programa y pulsa **✂ Aplicar todos los cortes**. Antes de aplicar te enseña qué va a hacer con cada VOD.

**Un solo VOD** («Empieza: Twitch … (YouTube …)», «CORTE: …», «Se reanuda: …»): se pone el desfase exacto del inicio y un corte por cada salto, en milisegundos.

**Varios VODs (1.5)**: también entiende el formato con «VOD 1 / VOD 2»:

```
Empieza: VOD 1 3:57:04.806 → 4:00:56.140   (YouTube 0:00:00.000 → 0:03:51.350)
CAMBIO DE VOD: termina el VOD 1 en 4:00:56.140 … → empieza el VOD 2 en 1:22:31.159 …
Empieza: VOD 2 1:22:31.159 → 5:12:40.030   (YouTube 0:03:51.350 → 3:54:00.200)
SALTO ATRÁS: el YouTube vuelve de Twitch 5:12:40.030 a 5:11:49.608 (repite 50,422 segundos)
Se reanuda: VOD 2 5:11:49.608 → 5:11:54.181   (YouTube 3:54:00.200 → 3:54:04.767)
CORTE: VOD 2 5:11:54.181 → 5:11:54.521   → se han saltado 0,34 segundos
Se reanuda: VOD 2 5:11:54.521 → 5:11:56.629   (YouTube 3:54:04.767 → 3:54:06.870)
```

- Cada tramo va a su VOD (VOD 1 = `[[parte1]]`, VOD 2 = `[[parte2]]`…): se ponen solos el «desde/hasta», la posición y los saltos de cada uno.
- Si el vídeo repite un trozo (**SALTO ATRÁS**), esos mensajes salen solo la primera vez (el chat no se puede ver dos veces).
- Sustituye el desfase, los cortes y los ajustes de cada VOD que tuviera ese vídeo. Las líneas «CAMBIO DE VOD», «CORTE», «SALTO ATRÁS», «En total…» y «NO ESTÁ EN EL VOD» solo explican y se ignoran.
- Si el texto tiene más VODs que partes el chat, te avisa y no aplica nada.
