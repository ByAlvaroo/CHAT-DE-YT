// Enlaces de Twitch → dónde empieza y acaba cada VOD dentro del vídeo de YouTube.
// Vale cualquiera de estas formas (una línea por VOD):
//   https://www.twitch.tv/videos/2345678901?t=0h5m10s hasta 3:02:00
//   twitch.tv/videos/2345678901 desde 5:10 hasta 3:02:00
//   https://www.twitch.tv/videos/2345678901 0:05:10 - 3:02:00
//   https://www.twitch.tv/videos/2345678901?t=5m10s      ← inicio
//   https://www.twitch.tv/videos/2345678901?t=3h2m       ← la misma URL otra vez = final
//   … yt 1:30:00   → ese VOD empieza en el minuto 1:30:00 del vídeo de YouTube (si no, va justo detrás del anterior)
import { parseClock } from './util.js';

const URL_RE = /(?:https?:\/\/)?(?:www\.|m\.|player\.)?twitch\.tv\/(?:videos\/|[^/\s]+\/v(?:ideo)?\/|\?video=v?)(\d+)(\S*)/i;
const T = String.raw`(\d+h(?:\d+m)?(?:\d+s)?|\d+m(?:\d+s)?|\d+s|\d+(?::\d{1,2}){1,2}(?:[.,]\d+)?)`;
const KW = {
  yt: new RegExp(String.raw`\b(?:yt|youtube|en\s+(?:el\s+)?v[ií]deo|v[ií]deo)\s*[:=]?\s*` + T, 'i'),
  start: new RegExp(String.raw`\b(?:desde|empieza(?:\s+en)?|inicio|comienza(?:\s+en)?|start|from|de)\s*[:=]?\s*` + T, 'i'),
  end: new RegExp(String.raw`\b(?:hasta|acaba(?:\s+en)?|termina(?:\s+en)?|fin(?:al)?|end|to|a)\s*[:=]?\s*` + T, 'i'),
};
const LOOSE = new RegExp(T, 'gi');
const sec = s => parseClock(s, { minutesDefault: false });
const fmtClock = v => { v = Math.round(v); const h = Math.floor(v / 3600), m = Math.floor(v % 3600 / 60), x = v % 60; return (h ? h + ':' + String(m).padStart(2, '0') : m) + ':' + String(x).padStart(2, '0'); };

/** Lee el texto pegado: [{ vodId, start, end, yt, line }] (segundos; null si no se dio) */
export function parseTwitchLinks(text) {
  const out = [];
  for (const raw of String(text || '').split(/\r?\n/)) {
    let line = raw.trim();
    if (!line) continue;
    const m = line.match(URL_RE);
    let urlT = null, id = null;
    if (m) {
      id = m[1];
      const q = (m[2] || '').match(/[?&#]t=([0-9hms]+)/i);
      if (q) { const v = /^\d+$/.test(q[1]) ? +q[1] : sec(q[1]); if (isFinite(v)) urlT = v; }
      line = line.replace(m[0], ' ');
    }
    const f = {};
    for (const k of ['yt', 'start', 'end']) {
      const x = line.match(KW[k]);
      if (x) { const v = sec(x[1]); if (isFinite(v)) f[k] = v; line = line.replace(x[0], ' '); }
    }
    const loose = (line.match(LOOSE) || []).map(sec).filter(isFinite);
    const prev = out[out.length - 1];
    if (!id) {
      // línea sin enlace: completa el VOD de la línea anterior («desde … hasta …» debajo del enlace)
      if (!prev) continue;
      if (f.start == null && prev.start == null && loose.length) f.start = loose.shift();
      if (f.end == null && prev.end == null && loose.length) f.end = loose.shift();
      for (const k of ['yt', 'start', 'end']) if (f[k] != null && prev[k] == null) prev[k] = f[k];
      continue;
    }
    // la misma URL otra vez solo con ?t= → es el final del VOD anterior
    if (prev && prev.vodId === id && prev.end == null && urlT != null && f.start == null && f.end == null && !loose.length) { prev.end = urlT; continue; }
    const e = { vodId: id, start: f.start != null ? f.start : urlT, end: f.end != null ? f.end : null, yt: f.yt != null ? f.yt : null, line: raw.trim() };
    if (e.start == null && loose.length) e.start = loose.shift();
    if (e.end == null && loose.length) e.end = loose.shift();
    if (e.start != null && e.end != null && e.end <= e.start) { e.badEnd = e.end; e.end = null; }
    out.push(e);
  }
  return out;
}

/**
 * Empareja cada enlace con un VOD del chat: primero por el número del VOD (si el archivo lo trae) y si no, por orden.
 * parts: [{ vodId, rawStart, rawEnd }] → { map: [entry|null por VOD], warn: [texto] }
 */
export function assignLinks(entries, parts) {
  const map = parts.map(() => null), warn = [], left = [];
  for (const e of entries) {
    const k = parts.findIndex((p, i) => !map[i] && p.vodId && String(p.vodId) === String(e.vodId));
    if (k >= 0) map[k] = e; else left.push(e);
  }
  for (const e of left) {
    const k = map.findIndex(x => !x);
    if (k < 0) { warn.push(`Sobra el enlace del VOD ${e.vodId}: el chat solo tiene ${parts.length} VOD${parts.length === 1 ? '' : 's'}.`); continue; }
    map[k] = e;
    if (parts[k].vodId && String(parts[k].vodId) !== String(e.vodId)) warn.push(`El VOD ${e.vodId} no coincide con el chat de la parte ${k + 1} (es del VOD ${parts[k].vodId}); se usa igualmente para la parte ${k + 1}.`);
  }
  map.forEach((e, k) => {
    if (!e) return;
    const p = parts[k];
    if (e.start != null && p.rawEnd && e.start > p.rawEnd) warn.push(`Parte ${k + 1}: el inicio queda después del final de su chat.`);
    if (e.badEnd != null) warn.push(`Parte ${k + 1}: «hasta ${fmtClock(e.badEnd)}» va antes que «desde ${fmtClock(e.start)}»; se ignora y el chat sigue hasta su final. Revisa ese minuto.`);
  });
  return { map, warn };
}
