import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "@mui/material/styles";
import { describe, expect, it } from "vitest";
import Contact from "./Contact";
import { getTheme } from "../theme";

describe("Contact", () => {
  it("zeigt einen klickbaren mailto-Link", () => {
    render(
      <ThemeProvider theme={getTheme("light")}>
        <Contact />
      </ThemeProvider>
    );

    const emailLink = screen.getByRole("link", { name: "anfrage@uberli.ch" });
    expect(emailLink).toHaveAttribute("href", "mailto:anfrage@uberli.ch");
  });
});
