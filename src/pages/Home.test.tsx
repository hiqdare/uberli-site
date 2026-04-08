import { fireEvent, render, screen } from "@testing-library/react";
import { ThemeProvider } from "@mui/material/styles";
import { MemoryRouter } from "react-router-dom";
import { describe, expect, it } from "vitest";
import Home from "./Home";
import { getTheme } from "../theme";

describe("Home", () => {
  it("zeigt die zentrale Botschaft und die Singlepage-Menueanker", () => {
    render(
      <ThemeProvider theme={getTheme("light")}>
        <MemoryRouter>
          <Home />
        </MemoryRouter>
      </ThemeProvider>
    );

    fireEvent.click(screen.getByText("u"));

    expect(screen.getByText("Digitale Wirkung mit Haltung.")).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Wir & Warum" })).toHaveAttribute("href", "#about");
    expect(screen.getByRole("link", { name: "Kontakt" })).toHaveAttribute("href", "#contact");
  });
});
