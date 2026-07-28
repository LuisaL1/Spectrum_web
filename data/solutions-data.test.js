import { describe, it, expect } from "vitest";
import { solutions, getSolutionBySlug } from "./solutions-data";

describe("getSolutionBySlug", () => {
  it("devuelve la solución correspondiente a un slug existente", () => {
    const [first] = solutions;
    expect(getSolutionBySlug(first.slug)).toEqual(first);
  });

  it("devuelve undefined para un slug que no existe", () => {
    expect(getSolutionBySlug("no-existe")).toBeUndefined();
  });
});
