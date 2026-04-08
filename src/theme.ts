import { createTheme, PaletteMode } from "@mui/material/styles";

export const getTheme = (mode: PaletteMode) => {
  const isDark = mode === "dark";

  return createTheme({
    palette: {
      mode,
      primary: {
        main: "#4BD2AD",
      },
      secondary: {
        main: "#B84AE7",
      },
      background: {
        default: isDark ? "#121217" : "#f9f9f9",
        paper: isDark ? "#1b1c24" : "#E4BBEF",
      },
      text: {
        primary: isDark ? "#f4ebff" : "#6E2E87",
        secondary: isDark ? "#cabee2" : "#6E2E87",
      },
    },
    typography: {
      fontFamily: "'Inter', 'Helvetica Neue', 'Arial', sans-serif",
      h4: {
        fontFamily: "'Comfortaa', sans-serif",
      },
      h5: {
        fontFamily: "'Comfortaa', sans-serif",
      },
      body1: {
        fontFamily: "'Comfortaa', sans-serif",
      },
    },
    shape: {
      borderRadius: 12,
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 24,
            textTransform: "none",
          },
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            backgroundImage: "none",
          },
        },
      },
    },
  });
};
