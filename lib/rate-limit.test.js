import { describe, it, expect, vi, afterEach } from "vitest";
import { rateLimit, getClientIp } from "./rate-limit";

describe("rateLimit", () => {
  afterEach(() => {
    vi.useRealTimers();
  });

  it("permite peticiones dentro del limite", () => {
    const key = `test-${Math.random()}`;
    for (let i = 0; i < 3; i += 1) {
      const result = rateLimit({ key, limit: 3, windowMs: 1000 });
      expect(result.limited).toBe(false);
    }
  });

  it("bloquea al superar el limite dentro de la misma ventana", () => {
    const key = `test-${Math.random()}`;
    for (let i = 0; i < 3; i += 1) {
      rateLimit({ key, limit: 3, windowMs: 60000 });
    }
    const result = rateLimit({ key, limit: 3, windowMs: 60000 });
    expect(result.limited).toBe(true);
    expect(result.retryAfterSeconds).toBeGreaterThan(0);
  });

  it("reinicia el conteo una vez pasada la ventana", () => {
    vi.useFakeTimers();
    const key = `test-${Math.random()}`;
    rateLimit({ key, limit: 1, windowMs: 1000 });
    expect(rateLimit({ key, limit: 1, windowMs: 1000 }).limited).toBe(true);

    vi.advanceTimersByTime(1001);
    expect(rateLimit({ key, limit: 1, windowMs: 1000 }).limited).toBe(false);
  });
});

describe("getClientIp", () => {
  it("usa el primer valor de x-forwarded-for", () => {
    const request = {
      headers: new Headers({ "x-forwarded-for": "1.2.3.4, 5.6.7.8" }),
    };
    expect(getClientIp(request)).toBe("1.2.3.4");
  });

  it("cae a x-real-ip si no hay x-forwarded-for", () => {
    const request = { headers: new Headers({ "x-real-ip": "9.9.9.9" }) };
    expect(getClientIp(request)).toBe("9.9.9.9");
  });

  it("cae a 'unknown' si no hay ninguna cabecera", () => {
    const request = { headers: new Headers() };
    expect(getClientIp(request)).toBe("unknown");
  });
});
