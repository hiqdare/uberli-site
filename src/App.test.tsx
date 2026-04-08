import { fireEvent, render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it } from "vitest";
import App from "./App";

describe("App Routing und Dark Mode", () => {
  beforeEach(() => {
    localStorage.clear();
    window.history.pushState({}, "", "/");
  });

  it("schaltet den Dark Mode und persistiert die Auswahl", async () => {
    render(<App />);

    const toggle = await screen.findByLabelText("Dark Mode umschalten");
    fireEvent.click(toggle);

    expect(localStorage.getItem("uberli-color-mode")).toBe("dark");
  });

  it("rendert die Singlepage-Inhalte", async () => {
    render(<App />);

    fireEvent.click(await screen.findByText("u"));

    expect(await screen.findByRole("heading", { name: "Digitale Wirkung mit Haltung." })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Kontakt aufnehmen" })).toBeInTheDocument();
  });
});
