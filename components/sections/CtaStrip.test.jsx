import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import CtaStrip from "./CtaStrip";

describe("CtaStrip", () => {
  it("renderiza el titular y los dos enlaces de acción", () => {
    render(<CtaStrip />);

    expect(
      screen.getByText("Hablemos de la evolución de su infraestructura")
    ).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Mesa de ayuda" })).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: "Escribir por WhatsApp" })
    ).toBeInTheDocument();
  });
});
