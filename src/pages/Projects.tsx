import { Box, Typography, TextField, Button, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";

export default function Kontakt() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      id="projects"
      sx={{
        py: isMobile ? 6 : 10,
        px: 4,
        maxWidth: "lg",
        margin: "0 auto",
        textAlign: "left",
      }}
    >
      <Typography
        variant="h4"
        sx={{
          fontFamily: "'Comfortaa', sans-serif",
          color: "#6E2E87",
          mb: 4,
        }}
      >
        Projekte
      </Typography>
      <Typography
        variant="body1"
        sx={{
          fontFamily: "'Comfortaa', sans-serif",
          color: "#6E2E87",
          mb: 6
        }}
      >
        Einen Überblick der Projekte, welches wir in den letzten Jahren unterstützt und begleitet haben. 
      </Typography>
    </Box>
  );
}
