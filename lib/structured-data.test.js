import { describe, it, expect } from "vitest";
import { buildOrganizationSchema, buildBreadcrumbSchema } from "./structured-data";

describe("buildOrganizationSchema", () => {
  it("genera un schema.org Organization valido", () => {
    const schema = buildOrganizationSchema();
    expect(schema["@context"]).toBe("https://schema.org");
    expect(schema["@type"]).toBe("Organization");
    expect(schema.name).toBe("Spectrum");
    expect(schema.url).toMatch(/^https?:\/\//);
    expect(schema.logo).toMatch(/^https?:\/\//);
  });
});

describe("buildBreadcrumbSchema", () => {
  it("genera un BreadcrumbList con posiciones consecutivas desde 1", () => {
    const schema = buildBreadcrumbSchema([
      { name: "Inicio", path: "/" },
      { name: "Soluciones", path: "/#soluciones" },
      { name: "Ciberseguridad", path: "/soluciones/ciberseguridad" },
    ]);

    expect(schema["@type"]).toBe("BreadcrumbList");
    expect(schema.itemListElement).toHaveLength(3);
    expect(schema.itemListElement[0].position).toBe(1);
    expect(schema.itemListElement[2].position).toBe(3);
    expect(schema.itemListElement[2].name).toBe("Ciberseguridad");
    expect(schema.itemListElement[2].item).toMatch(/\/soluciones\/ciberseguridad$/);
  });
});
