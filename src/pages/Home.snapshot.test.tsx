import { render } from "@testing-library/react";
import { ThemeProvider } from "@mui/material/styles";
import { MemoryRouter } from "react-router-dom";
import { describe, expect, it } from "vitest";
import Home from "./Home";
import { getTheme } from "../theme";

describe("Home Snapshot", () => {
  it("rendert konsistent im Light Mode", () => {
    const { asFragment } = render(
      <ThemeProvider theme={getTheme("light")}>
        <MemoryRouter>
          <Home />
        </MemoryRouter>
      </ThemeProvider>
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
