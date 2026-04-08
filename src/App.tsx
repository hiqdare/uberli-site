import { Suspense, lazy, useMemo, useState } from "react";
import {
  Box,
  CircularProgress,
  CssBaseline,
  IconButton,
  ThemeProvider,
} from "@mui/material";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { getTheme } from "./theme";

const Home = lazy(() => import("./pages/Home"));

const LoadingFallback = () => (
  <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
    <CircularProgress />
  </Box>
);

export default function App() {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    const saved = localStorage.getItem("uberli-color-mode");
    return saved === "dark";
  });

  const theme = useMemo(() => getTheme(darkMode ? "dark" : "light"), [darkMode]);

  const handleToggleDarkMode = () => {
    setDarkMode((prev) => {
      const next = !prev;
      localStorage.setItem("uberli-color-mode", next ? "dark" : "light");
      return next;
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <IconButton
        onClick={handleToggleDarkMode}
        aria-label="Dark Mode umschalten"
        color="inherit"
        sx={{ position: "fixed", top: 14, right: 14, zIndex: 1300, bgcolor: "background.paper" }}
      >
        {darkMode ? <LightModeIcon /> : <DarkModeIcon />}
      </IconButton>
      <BrowserRouter>
        <Suspense fallback={<LoadingFallback />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </ThemeProvider>
  );
}