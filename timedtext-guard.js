(function installTimedtextRequestGuard(global) {
  "use strict";

  if (global.__DUBBING_TIMEDTEXT_FETCH__) return;

  const entries = new Map();
  const SUCCESS_TTL_MS = 5 * 60 * 1000;
  const RATE_LIMIT_TTL_MS = 60 * 1000;
  const ERROR_TTL_MS = 5 * 1000;
  const MAX_ENTRIES = 40;

  function prune(now) {
    for (const [key, entry] of entries) {
      if (!entry.pending && entry.expiresAt <= now) entries.delete(key);
    }
    while (entries.size > MAX_ENTRIES) entries.delete(entries.keys().next().value);
  }

  global.__DUBBING_TIMEDTEXT_FETCH__ = async function guardedTimedtextFetch(url, init, fetcher) {
    const key = String(url);
    const now = Date.now();
    prune(now);

    const existing = entries.get(key);
    if (existing?.pending) return (await existing.pending).clone();
    if (existing?.response && existing.expiresAt > now) return existing.response.clone();

    const request = Promise.resolve()
      .then(() => fetcher(url, init))
      .then((response) => {
        const ttl = response.status === 429
          ? RATE_LIMIT_TTL_MS
          : response.ok ? SUCCESS_TTL_MS : ERROR_TTL_MS;
        entries.set(key, {
          response: response.clone(),
          expiresAt: Date.now() + ttl,
        });
        return response;
      })
      .catch((error) => {
        entries.delete(key);
        throw error;
      });

    entries.set(key, { pending: request, expiresAt: now + ERROR_TTL_MS });
    return (await request).clone();
  };
})(globalThis);
