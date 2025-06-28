import React, { useState } from "react";
import { Box, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";

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
  transition: "transform 0.3s ease, opacity 0.3s ease"
});

export default function Home() {
  const [showText, setShowText] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const size = isMobile ? 100 : 120;

  const handleHover = () => setShowText(true);
  const handleLeave = () => setShowText(false);

  const CircleRow = ({ letters, bgColors, textColors }: { letters: string[], bgColors: string[], textColors: string[] }) => (
    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
      {letters.map((char, idx) => (
        <Box key={char} sx={circleStyle(bgColors[idx], textColors[idx], size)}>{char}</Box>
      ))}
    </Box>
  );

  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: "#E4BBEF",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column"
      }}
    >
      <Box
        onMouseEnter={handleHover}
        onMouseLeave={handleLeave}
        onTouchStart={handleHover}
        sx={{ cursor: "pointer", transition: "transform 0.5s ease", position: "relative" }}
      >
        {/* Zwei kleine Hintergrundkreise in den Zwischenräumen */}
        <Box
          sx={{
            position: "absolute",
            top: size * 0.5,
            left: `calc(50% - ${size}px)`,
            width: size,
            height: size,
            borderRadius: "50%",
            backgroundColor: "#B84AE7",
            zIndex: 0
          }}
        />
        <Box
          sx={{
            position: "absolute",
            top: size * 0.5,
            left: `calc(50%)`,
            width: size,
            height: size,
            borderRadius: "50%",
            backgroundColor: "#B84AE7",
            zIndex: 0
          }}
        />

        <Box sx={{ position: "relative", zIndex: 1 }}>
          <CircleRow
            letters={["u", "b", "e"]}
            bgColors={["#ffffff", "#6E2E87", "#6E2E87"]}
            textColors={["#6E2E87", "#ffffff", "#ffffff"]}
          />
          <CircleRow
            letters={["r", "l", "i"]}
            bgColors={["#6E2E87", "#6E2E87", "#ffffff"]}
            textColors={["#ffffff", "#ffffff", "#6E2E87"]}
          />
        </Box>
      </Box>

      <Typography
        mt={4}
        fontSize={20}
        textAlign="center"
        sx={{
          opacity: showText ? 1 : 0,
          transition: "opacity 0.5s ease"
        }}
      >
        Willkommen bei uberli.ch – IT-Beratung für Bildung
      </Typography>
    </Box>
  );
}
