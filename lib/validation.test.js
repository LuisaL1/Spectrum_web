import { describe, it, expect } from "vitest";
import { validateContactPayload } from "./validation";

const validPayload = {
  nombre: "Ana Pérez",
  correo: "ana@example.com",
  empresa: "Acme S.A.S",
  mensaje: "Quisiera más información.",
  servicio: "Infraestructura tecnológica",
};

describe("validateContactPayload", () => {
  it("acepta un payload valido y normaliza espacios", () => {
    const result = validateContactPayload({
      ...validPayload,
      nombre: "  Ana Pérez  ",
    });

    expect(result.valid).toBe(true);
    expect(result.errors).toEqual([]);
    expect(result.data.nombre).toBe("Ana Pérez");
  });

  it("rechaza un correo con formato invalido", () => {
    const result = validateContactPayload({
      ...validPayload,
      correo: "no-es-un-email",
    });

    expect(result.valid).toBe(false);
    expect(result.errors).toContain("correo");
  });

  it("rechaza campos obligatorios ausentes", () => {
    const result = validateContactPayload({ mensaje: "hola" });

    expect(result.valid).toBe(false);
    expect(result.errors).toEqual(
      expect.arrayContaining(["nombre", "correo", "empresa", "servicio"])
    );
  });

  it("elimina saltos de linea de los campos de una sola linea (anti header-injection)", () => {
    const result = validateContactPayload({
      ...validPayload,
      nombre: "Ana\r\nBcc: atacante@evil.com",
      servicio: "Infraestructura\ntecnológica",
    });

    expect(result.valid).toBe(true);
    expect(result.data.nombre).not.toMatch(/[\r\n]/);
    expect(result.data.servicio).not.toMatch(/[\r\n]/);
  });

  it("conserva los saltos de linea legitimos del mensaje", () => {
    const result = validateContactPayload({
      ...validPayload,
      mensaje: "Primera linea\nSegunda linea",
    });

    expect(result.valid).toBe(true);
    expect(result.data.mensaje).toBe("Primera linea\nSegunda linea");
  });

  it("rechaza un servicio ausente o demasiado largo", () => {
    const result = validateContactPayload({ ...validPayload, servicio: "a".repeat(121) });

    expect(result.valid).toBe(false);
    expect(result.errors).toContain("servicio");
  });
});
