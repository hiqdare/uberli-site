import React, { useState } from "react";
import { Box, Typography, Button, useMediaQuery, Fade } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";

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
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const size = isMobile ? 100 : 120;
  const offsetInactive = isMobile ? 50 : 20;
  //const offsetActive = isMobile ? 20 : 20;

  const navigate = useNavigate();

  const handleActivate = () => setActive(!active);

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
    { label: "Über uns", path: "/about" },
    { label: "Projekte", path: "/projects" },
    { label: "Werkzeuge", path: "/tools" },
    { label: "Kontakt", path: "/contact" }
  ];

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
        onClick={handleActivate}
        onMouseEnter={() => !active && setActive(true)}
        sx={{ cursor: "pointer", position: "relative", display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        {/* Hintergrund-Rechteck für obere Reihe */}
        <Box
          sx={{
            position: "absolute",
            top: size/2,
            left: "50%",
            transform: active ? `translate(-50%, -20px)` : `translate(-50%, ${offsetInactive}px)`,
            transition: "transform 0.6s ease",
            width: size * 2,
            height: size * 0.5,
            backgroundColor: "#B84AE7",
            zIndex: 0,
            borderRadius: 0
          }}
        />
        <Box
          sx={{
            transform: active ? `translateY(-20px)` : `translateY(${offsetInactive}px)`,
            transition: "transform 0.6s ease",
            zIndex: 1
          }}
        >
          <CircleRow
            letters={["u", "b", "e"]}
            bgColors={["#ffffff", "#6E2E87", "#6E2E87"]}
            textColors={["#6E2E87", "#ffffff", "#ffffff"]}
          />
        </Box>

        <Fade in={active} timeout={600}>
          <Box
            sx={{
              my: 0,
              display: "grid",
              gap: 2,
              justifyContent: "center",
              height: {
                xs: 100,
                sm: 40
              },
              textAlign: "center",
              gridTemplateColumns: {
                xs: "repeat(2, auto)", // Mobil: 2x2
                sm: "repeat(4, auto)"  // Desktop: 1x4
              }
            }}
          >
            {menuItems.map(({ label, path }) => (
              <Button
                key={label}
                onClick={() => navigate(path)}
                variant="outlined"
                sx={{
                  fontFamily: "'Comfortaa', sans-serif",
                  color: "#6E2E87",
                  borderColor: "#6E2E87",
                  px: 3, // gleichmäßiger Button-Inhalt
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
        </Fade>


        {/* Hintergrund-Rechteck für untere Reihe */}
        <Box
          sx={{
            position: "absolute",
            bottom: size/2,
            left: "50%",
            transform: active ? `translate(-50%, 20px)` : `translate(-50%, -${offsetInactive}px)`,
            transition: "transform 0.6s ease",
            width: size * 2,
            height: size * 0.5,
            backgroundColor: "#B84AE7",
            zIndex: 0,
            borderRadius: 0
          }}
        />

        <Box
          sx={{
            transform: active ? `translateY(20px)` : `translateY(-${offsetInactive}px)`,
            transition: "transform 0.6s ease",
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
