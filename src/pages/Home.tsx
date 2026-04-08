import { useEffect, useState } from "react";
import { Box, Button, Paper, Stack, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import About from "./About";
import Contact from "./Contact";
import Projects from "./Projects";
import Tools from "./Tools";

const circleStyle = (bgColor: string, textColor: string, size: number) => ({
  width: size,
  height: size,
  borderRadius: "50%",
  backgroundColor: bgColor,
  color: textColor,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: size * 0.6,
  fontWeight: "bold",
  fontFamily: "'Comfortaa', sans-serif",
  margin: 0,
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  transition: "all 0.6s ease"
});

type CircleRowProps = {
  letters: string[];
  bgColors: string[];
  textColors: string[];
  size: number;
};

function CircleRow({ letters, bgColors, textColors, size }: CircleRowProps) {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", position: "relative" }}>
      {letters.map((char, idx) => (
        <Box key={char} sx={{ position: "relative", display: "flex", justifyContent: "center" }}>
          <Box sx={{ ...circleStyle(bgColors[idx], textColors[idx], size), position: "relative", zIndex: 1 }}>{char}</Box>
        </Box>
      ))}
    </Box>
  );
}

export default function Home() {
  const [active, setActive] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const size = isMobile ? 100 : 120;

  const handleActivate = () => {
    setActive(true);
  };

  const menuItems = [
    { label: "Wir & Warum", path: "#about" },
    { label: "Projekte", path: "#projects" },
    { label: "Werkzeuge", path: "#tools" },
    { label: "Kontakt", path: "#contact" },
  ];

  const divider = (
    <Box
      aria-hidden="true"
      sx={{
        width: "100%",
        height: 1,
        my: 5,
        background: theme.palette.mode === "dark"
          ? "linear-gradient(90deg, transparent, rgba(202,190,226,0.55), transparent)"
          : "linear-gradient(90deg, transparent, rgba(110,46,135,0.28), transparent)",
      }}
    />
  );

  useEffect(() => {
    const sectionIds = ["about", "projects", "tools", "contact"];
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        { threshold: 0.5 }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, [active]);

  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: theme.palette.background.paper,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        overflow: "hidden",
      }}
    >
      <Stack
        sx={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
          maxWidth: "lg",
          width: "100%",
          overflow: "hidden",
        }}
      >
        {/* Hintergrund-Rechteck für obere Reihe */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: "50%",
            transform: active ? `translate(-50%, calc(${size / 2}px))` : `translate(-50%, calc(50vh - ${size}px))`,
            transition: "transform 0.8s ease",
            width: size * 2,
            height: size * 0.5,
            backgroundColor: theme.palette.secondary.main,
            zIndex: 0,
            borderRadius: 0
          }}
        />
        <Box
          onClick={handleActivate}
          onMouseEnter={() => !active && setActive(true)}
          sx={{
            transform: active ? `translateY(calc(-50vh + ${size}px))` : `translateY(-50%)`,
            transition: "transform 0.8s ease",
            zIndex: 1
          }}
        >
          <CircleRow
            letters={["u", "b", "e"]}
            bgColors={["#ffffff", theme.palette.text.primary, theme.palette.text.primary]}
            textColors={[theme.palette.text.primary, "#ffffff", "#ffffff"]}
            size={size}
          />
        </Box>
        <Stack
          sx={{
            position: "absolute",
            top: size,
            transform: active ? "scaleY(1)" : "scaleY(0)",
            transformOrigin: "top",
            transition: "transform 0.8s ease",
            transitionDelay: active ? "0.8s" : "0s",
            width: "100%",
            bgcolor: theme.palette.background.paper,
            display: "flex",
            justifyContent: "center",
            zIndex: 10,
            py: 2,
            px: 2,
            flexDirection: "row",
            alignItems: "center",
            gap: 1,
            overflowX: "auto",
          }}
        >
          {menuItems.map(({ label, path }) => (
            <Button
              key={label}
              href={path}
              variant="text"
              sx={{
                fontFamily: "'Comfortaa', sans-serif",
                whiteSpace: "nowrap",
                color: activeSection === path.slice(1) ? "#fff" : theme.palette.text.primary,
                backgroundColor: activeSection === path.slice(1) ? theme.palette.text.primary : "transparent",
                mx: 0.25,
                ":hover": {
                  bgcolor: theme.palette.text.primary,
                  color: "white"
                }
              }}
            >
              {label}
            </Button>
          ))}
        </Stack>
        <Paper
          elevation={3}
          sx={{
            position: "absolute",
            top: `calc(36px + ${size}px)`,
            bottom: `${size + 8}px`,
            transform: active ? "scaleY(1)" : "scaleY(0)",
            transformOrigin: "center",
            transition: "transform 0.8s ease",
            left: "0",
            width: "100%",
            borderRadius: 3,
            bgcolor: theme.palette.mode === "dark" ? "#2A2340" : "#FCF8FF",
            color: theme.palette.text.primary,
            zIndex: 5,
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            px: isMobile ? 2.5 : 4,
            py: 3,
            textAlign: "left",
            overflowY: "auto"
          }}
        >
          <Typography variant="h4" sx={{ mb: 2, mt: { xs: 3, sm: 4 } }}>
            Digitale Wirkung mit Haltung.
          </Typography>
          <Typography variant="body1" sx={{ mb: 4, maxWidth: 760 }}>
            Wir unterstützen Bildungsinstitutionen und gemeinnützige Organisationen bei IT, Cloud,
            Sicherheit und KI. Scrolle durch die Bereiche und entdecke unsere Projekte und Werkzeuge.
          </Typography>

          <Box sx={{ height: { xs: 20, sm: 28 } }} aria-hidden="true" />

          <About />
          {divider}
          <Projects />
          {divider}
          <Tools />
          {divider}
          <Contact />
        </Paper>
        {/* Hintergrund-Rechteck für untere Reihe */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: "50%",
            transform: active ? `translate(-50%, calc(100vh - ${size}px))` : `translate(-50%, calc(50vh - ${size / 2}px))`,
            transition: "transform 0.8s ease",
            width: size * 2,
            height: size * 0.5,
            backgroundColor: theme.palette.secondary.main,
            zIndex: 0,
            borderRadius: 0
          }}
        />

        <Box
          sx={{
            transform: active ? `translateY(calc(50vh - ${size}px))` : `translateY(-50%)`,
            transition: "transform 0.8s ease",
            zIndex: 1
          }}
        >
          <CircleRow
            letters={["r", "l", "i"]}
            bgColors={[theme.palette.text.primary, theme.palette.text.primary, "#ffffff"]}
            textColors={["#ffffff", "#ffffff", theme.palette.text.primary]}
            size={size}
          />
        </Box>
      </Stack>
    </Box>
  );
}
