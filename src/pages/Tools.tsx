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
        width: "lg",
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
        Werkzeuge
      </Typography>
      <Typography
        variant="body1"
        sx={{
          fontFamily: "'Comfortaa', sans-serif",
          color: "#6E2E87",
          mb: 6
        }}
      >
        Eine Auswahl von Cloud basierten Lösungen, die von uberli mit Hilfe von künstlicher Intelligenz entwickelt wurde. 
      </Typography>
    </Box>
  );
}
