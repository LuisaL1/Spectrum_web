// Limitador de tasa en memoria (best-effort). No es apto para un despliegue
// serverless multi-instancia con alto trafico (cada instancia tiene su propio
// mapa), pero frena abuso basico/spam de formularios en un sitio corporativo
// de trafico moderado sin depender de infraestructura adicional (Redis...).
const buckets = new Map();
const MAX_TRACKED_KEYS = 5000;

function sweepExpired(now) {
  for (const [key, bucket] of buckets) {
    if (now > bucket.resetAt) buckets.delete(key);
  }
}

export function rateLimit({ key, limit, windowMs }) {
  const now = Date.now();
  if (buckets.size > MAX_TRACKED_KEYS) sweepExpired(now);

  const bucket = buckets.get(key);
  if (!bucket || now > bucket.resetAt) {
    buckets.set(key, { count: 1, resetAt: now + windowMs });
    return { limited: false, retryAfterSeconds: 0 };
  }

  bucket.count += 1;
  if (bucket.count > limit) {
    return {
      limited: true,
      retryAfterSeconds: Math.ceil((bucket.resetAt - now) / 1000),
    };
  }

  return { limited: false, retryAfterSeconds: 0 };
}

export function getClientIp(request) {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0].trim();
  return request.headers.get("x-real-ip") || "unknown";
}
