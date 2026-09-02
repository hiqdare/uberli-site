import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "@mui/material/styles";
import { describe, expect, it } from "vitest";
import Contact from "./Contact";
import { getTheme } from "../theme";

describe("Contact", () => {
  it("enthaelt keine elektronische Kontaktadresse", () => {
    const { container } = render(
      <ThemeProvider theme={getTheme("light")}>
        <Contact />
      </ThemeProvider>
    );

    expect(screen.getByText(/über eine Idee austauschen/i)).toBeInTheDocument();
    expect(container.querySelector(`a[href^='${"mail"}${"to"}:']`)).not.toBeInTheDocument();
    expect(container.textContent).not.toMatch(/@/);
  });
});
