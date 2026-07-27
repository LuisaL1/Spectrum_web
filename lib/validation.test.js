import { describe, it, expect } from "vitest";
import { validateContactPayload } from "./validation";

const validPayload = {
  nombre: "Ana Pérez",
  correo: "ana@example.com",
  empresa: "Acme S.A.S",
  mensaje: "Quisiera más información.",
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
    expect(result.errors).toEqual(expect.arrayContaining(["nombre", "correo", "empresa"]));
  });
});
