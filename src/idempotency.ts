// Remove espaço nas pontas e caracteres invisíveis de largura zero (U+200B..U+200D, U+2060, U+FEFF),
// que o provedor já reenviou grudados na chave (ver logs/incident.jsonl).
const INVISIBLE = /[​-‍⁠﻿]/g;

export function normalizeKey(key: string): string {
  return key.replace(INVISIBLE, "").trim().toLowerCase();
}
