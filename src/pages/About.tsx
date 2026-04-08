import { Box, Typography, Grid, Paper, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Team from "./Team";

const services = [
  {
    title: "Digitale Arbeitsumgebungen",
    image: "/images/digitales_arbeiten.png",
    description: "Wir unterstützen beim Aufbau von IT-Infrastrukturen, Netzwerken und Geräten."
  },
  {
    title: "Cloud-Dienstleistungen",
    image: "/images/cloud_anwendungen.png",
    description: "Beratung zu modernen Cloud-Lösungen, Migration und Nutzung von Cloud-Services."
  },
  {
    title: "IT-Sicherheit",
    image: "/images/security.png",
    description: "Unterstützung bei Sicherheitskonzepten, Datenschutz und sicheren Architekturen."
  },
  {
    title: "KI-Dienste",
    image: "/images/ai.png",
    description: "Begleitung bei der Einführung und Nutzung von KI-Technologien im Bildungsbereich."
  }
];

export default function About() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const cardBaseBg = theme.palette.mode === "dark" ? "#342A4C" : "#FAF3FF";
  const cardHoverBg = theme.palette.mode === "dark" ? "#3C3057" : "#F5EAFF";

  return (
    <Box
      id="about"
      sx={{
        width: "100%",
        py: isMobile ? 6 : 10,
        px: 0,
        maxWidth: "none",
        margin: 0,
        textAlign: "left"
      }}
    >
      <Typography variant="h4" sx={{ mb: 2 }}>
        Wir & Warum
      </Typography>

      <Typography variant="body1" sx={{ mb: 4, maxWidth: 760 }}>
        Angefangen hat alles mit YIA und unserem Ziel, Technik für Kinder und Jugendliche greifbar zu machen.
        Aus dieser Begeisterung ist <strong>uberli</strong> entstanden – ein IT-Beratungsangebot für
        Bildungsinstitutionen und gemeinnützige Organisationen. Was wir anbieten:
      </Typography>

      <Grid container spacing={4}>
        {services.map(({ title, image, description }) => (
          <Grid size={{ xs: 12, sm: 6, md: 6 }} key={title}>
            <Paper
              elevation={4}
              sx={{
                p: 3,
                textAlign: "center",
                borderRadius: 4,
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
              <Box component="img" src={image} alt={title} sx={{ width: 80, height: 80, mb: 2 }} />
              <Typography
                variant="subtitle1"
                sx={{ mb: 1 }}
              >
                {title}
              </Typography>
              <Typography
                variant="body2"
              >
                {description}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
      <Team />
    </Box>
  );
}
