import React, { useState } from "react";
import { Box, Typography, Button, useMediaQuery, Fade } from "@mui/material";
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
  transition: "all 0.6s ease"
});

export default function Home() {
  const [active, setActive] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const size = isMobile ? 100 : 120;

  const handleActivate = () => setActive(true);

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
            transform: active ? `translate(-50%, -20px)` : "translate(-50%, 20px)",
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
            transform: active ? `translateY(-20px)` : "translateY(20px)",
            transition: "transform 0.6s ease"
          }}
        >
          <CircleRow
            letters={["u", "b", "e"]}
            bgColors={["#ffffff", "#6E2E87", "#6E2E87"]}
            textColors={["#6E2E87", "#ffffff", "#ffffff"]}
          />
        </Box>

        <Fade in={active} timeout={600}>
          <Box sx={{ my: 0, display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 2, height: 40  }}>
            {[
              { label: "Über uns" },
              { label: "Projekte" },
              { label: "Werkzeuge" },
              { label: "Kontakt" }
            ].map(({ label }) => (
              <Button
                key={label}
                variant="outlined"
                sx={{
                  fontFamily: "'Comfortaa', sans-serif",
                  color: "#6E2E87",
                  borderColor: "#6E2E87",
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
            transform: active ? `translate(-50%, 20px)` : "translate(-50%, -20px)",
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
            transform: active ? `translateY(20px)` : "translateY(-20px)",
            transition: "transform 0.6s ease"
          }}
        >
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
          opacity: 1,
          transition: "opacity 0.5s ease",
          fontFamily: "'Comfortaa', sans-serif"
        }}
      >
        Willkommen bei uberli.ch – IT-Beratung für Bildung
      </Typography>
    </Box>
  );
}
