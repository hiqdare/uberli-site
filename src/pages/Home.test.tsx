import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "@mui/material/styles";
import { MemoryRouter } from "react-router-dom";
import { describe, expect, it } from "vitest";
import Home from "./Home";
import { getTheme } from "../theme";

describe("Home", () => {
  it("zeigt die zentrale Botschaft und die Seitenlinks", () => {
    render(
      <ThemeProvider theme={getTheme("light")}>
        <MemoryRouter>
          <Home />
        </MemoryRouter>
      </ThemeProvider>
    );

    expect(screen.getByText("Ideen, Experimente & Projekte.")).toBeInTheDocument();
    expect(screen.getByText(/Uberli ist mein persönlicher Raum/i)).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Projekte ansehen" })).toHaveAttribute("href", "/projekte/");
    expect(screen.getByRole("link", { name: "Experimente" })).toHaveAttribute("href", "/experimente/");
    expect(screen.getByRole("img", { name: /Uberli Visualisierung/i })).toHaveAttribute("src", "/images/uberli.visualisierung.png");
  });
});
