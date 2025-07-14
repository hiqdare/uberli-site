import { useState, useEffect, useRef } from "react";
import { Box, Button, useMediaQuery } from "@mui/material";
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

export default function Home() {
  const [active, setActive] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const size = isMobile ? 100 : 120;

  const handleActivate = () => {
  setActive(true);
    setTimeout(() => {
      document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
    }, 1000); // nach Logo-Animation
  };


  const CircleRow = ({ letters, bgColors, textColors }: { letters: string[], bgColors: string[], textColors: string[] }) => (
    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", position: "relative" }}>
      {letters.map((char, idx) => (
        <Box key={char} sx={{ position: "relative", display: "flex", justifyContent: "center" }}>
          <Box sx={{ ...circleStyle(bgColors[idx], textColors[idx], size), position: "relative", zIndex: 1 }}>{char}</Box>
        </Box>
      ))}
    </Box>
  );

  const menuItems = [
    { label: "Wer wir sind", path: "#about" },
    { label: "Projekte", path: "#projects" },
    { label: "Werkzeuge", path: "#tools" },
    { label: "Kontakt", path: "#contact" }
  ];

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
        { threshold: 0.6 } // mindestens 60% sichtbar
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: "#E4BBEF",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          cursor: "pointer",
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
            transform: active ? `translate(-50%, calc(${size/2}px))` : `translate(-50%, calc(50vh - ${size}px))`,
            transition: "transform 0.8s ease",
            width: size * 2,
            height: size * 0.5,
            backgroundColor: "#B84AE7",
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
            bgColors={["#ffffff", "#6E2E87", "#6E2E87"]}
            textColors={["#6E2E87", "#ffffff", "#ffffff"]}
          />
        </Box>
        <Box
          sx={{
            position: 'absolute',
            top: size,
            transform: active ? "scaleY(1)" : "scaleY(0)",
            transformOrigin: "top",
            transition: "transform 0.8s ease",
            transitionDelay: active ? '0.8s' : '0s',
            width: '100%',
            bgcolor: '#E4BBEF',
            display: 'flex',
            justifyContent: 'center',
            zIndex: 10,
            py: 1
          }}
        >
          {menuItems.map(({ label, path }) => (
            <Button
              key={label}
              href={path}
              variant="text"
              sx={{
                fontFamily: "'Comfortaa', sans-serif",
                color: activeSection === path.slice(1) ? "white" : "#6E2E87",
                backgroundColor: activeSection === path.slice(1) ? "#6E2E87" : "transparent",
                mx: 1,
                ":hover": {
                  bgcolor: "#6E2E87",
                  color: "white"
                }
              }}
            >
              {label}
            </Button>
          ))}
        </Box>
        <Box
          sx={{
            position: "absolute",
            top: `calc(12px + ${size}px)`,
            bottom: `${size}px`,
            transform: active ? "scaleY(1)" : "scaleY(0)",
            transformOrigin: "center",
            transition: "transform 0.8s ease",
            left: "0",
            width: "100%",
            bgcolor: "white",
            borderRadius: 3,
            boxShadow: "0 8px 24px rgba(0, 0, 0, 0.2)",
            zIndex: 5,
            display: "flex",
            flexDirection: "column",
            alignItems: "left",
            justifyContent: "top",
            px: 4,
            py: 3,
            textAlign: "left",
            overflowY: "auto"
          }}
        >
          <About />
          <Projects />
          <Tools />
          <Contact />
        </Box>
        {/* Hintergrund-Rechteck für untere Reihe */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: "50%",
            transform: active ? `translate(-50%, calc(100vh - ${size}px))` : `translate(-50%, calc(50vh - ${size/2}px))`,
            transition: "transform 0.8s ease",
            width: size * 2,
            height: size * 0.5,
            backgroundColor: "#B84AE7",
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
            bgColors={["#6E2E87", "#6E2E87", "#ffffff"]}
            textColors={["#ffffff", "#ffffff", "#6E2E87"]}
          />
        </Box>
      </Box>
    </Box>
  );
}
