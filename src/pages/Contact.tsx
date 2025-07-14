import { Box, Typography, TextField, Button, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";

export default function Kontakt() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      id="contact"
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
        Kontakt aufnehmen
      </Typography>

      <Typography
        variant="body1"
        sx={{
          fontFamily: "'Comfortaa', sans-serif",
          color: "#6E2E87",
          mb: 4,
        }}
      >
        Du möchtest mit uns arbeiten oder hast eine Frage? Schreib uns eine direkt eine E-Mail:
  <span
    onClick={() => {
      window.location.href = "mailto:" + "anfrage" + "@" + "uberli.ch";
    }}
    style={{ cursor: "pointer", color: "#6E2E87", fontWeight: "bold", textDecoration: "underline" }}
  >
    kontakt [at] uberli [dot] ch
  </span>
</Typography>
    </Box>
  );
}
