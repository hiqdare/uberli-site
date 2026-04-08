import { Box, Link, Paper, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";

export default function Kontakt() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const cardBaseBg = theme.palette.mode === "dark" ? "#342A4C" : "#FAF3FF";
  const cardHoverBg = theme.palette.mode === "dark" ? "#3C3057" : "#F5EAFF";

  return (
    <Box
      id="contact"
      sx={{
        width: "100%",
        py: isMobile ? 6 : 10,
        px: 0,
        maxWidth: "none",
        margin: 0,
        textAlign: "left",
      }}
    >
      <Typography variant="h4" sx={{ mb: 2 }}>
        Kontakt aufnehmen
      </Typography>

      <Typography variant="body1" sx={{ mb: 4, maxWidth: 760 }}>
        Ob Projektidee, konkrete Anfrage oder unverbindliches Gespräch: wir freuen uns auf den Austausch.
      </Typography>

      <Paper
        elevation={2}
        sx={{
          p: isMobile ? 2.5 : 3,
          borderRadius: 3,
          bgcolor: cardBaseBg,
          border: "1px solid",
          borderColor: "divider",
          transition: "transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease, background-color 0.25s ease",
          "&:hover": {
            transform: "translateY(-6px)",
            bgcolor: cardHoverBg,
            borderColor: "secondary.main",
            boxShadow: theme.palette.mode === "dark" ? "0 10px 24px rgba(0, 0, 0, 0.35)" : "0 10px 24px rgba(110, 46, 135, 0.18)",
          }
        }}
      >
        <Typography variant="body1" sx={{ mb: 1 }}>
          E-Mail
        </Typography>
        <Link href="mailto:anfrage@uberli.ch" underline="always" sx={{ fontWeight: 700, fontSize: 18 }}>
          anfrage@uberli.ch
        </Link>
      </Paper>
    </Box>
  );
}
