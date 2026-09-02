import { fireEvent, render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it } from "vitest";
import App from "./App";

describe("App Routing und Dark Mode", () => {
  beforeEach(() => {
    localStorage.clear();
    sessionStorage.clear();
    window.history.pushState({}, "", "/");
  });

  it("schaltet den Dark Mode und persistiert die Auswahl", async () => {
    render(<App />);

    const toggle = await screen.findByLabelText("Dark Mode umschalten");
    fireEvent.click(toggle);

    expect(localStorage.getItem("uberli-color-mode")).toBe("dark");
  });

  it("rendert die Startseite mit Seitenlinks", async () => {
    render(<App />);

    expect(await screen.findByRole("heading", { name: "Ideen, Experimente & Projekte." })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Projekte" })).toHaveAttribute("href", "/projekte/");
    expect(screen.getByRole("link", { name: "Kontakt" })).toHaveAttribute("href", "/kontakt/");
  });

  it("rendert eine direkte Projektseite", async () => {
    window.history.pushState({}, "", "/projekte/");

    render(<App />);

    expect(await screen.findByRole("heading", { name: "Projekte" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "YIA – Youth Intelligence Agency" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Futurebooster" })).toBeInTheDocument();
  });

  it("wechselt per Navigation nur den Seiteninhalt", async () => {
    render(<App />);

    fireEvent.click(await screen.findByRole("link", { name: "Projekte" }));

    expect(window.location.pathname).toBe("/projekte/");
    expect(await screen.findByRole("heading", { name: "Projekte" })).toBeInTheDocument();
    expect(screen.getByRole("navigation", { name: "Hauptnavigation" })).toBeInTheDocument();
  });
});
