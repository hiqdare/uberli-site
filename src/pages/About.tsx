import { Box, Typography, Grid, Paper, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";

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

  return (
    <Box
      id="about"
      sx={{
        py: isMobile ? 6 : 10,
        px: 4,
        maxWidth: "1000px",
        margin: "0 auto",
        textAlign: "left"
      }}
    >
      <Typography
        variant="h4"
        sx={{
          fontFamily: "'Comfortaa', sans-serif",
          color: "#6E2E87",
          mb: 4
        }}
      >
        Über uns
      </Typography>

      <Typography
        variant="body1"
        sx={{
          fontFamily: "'Comfortaa', sans-serif",
          color: "#6E2E87",
          mb: 6
        }}
      >
        Angefangen hat alles mit YIA und unserem Ziel, Technik für Kinder und Jugendliche greifbar zu machen.
        Aus dieser Begeisterung ist <strong>uberli</strong> entstanden – ein IT-Beratungsangebot für
        Bildungsinstitutionen und gemeinnützige Organisationen. Was wir anbieten:
      </Typography>

      <Grid container spacing={4}>
        {services.map(({ title, image, description }) => (
          <Grid size= {{xs:12, sm:6, md:6}} key={title}>
            <Paper
              elevation={4}
              sx={{
                p: 3,
                textAlign: "center",
                borderRadius: 4,
                transition: "transform 0.3s ease",
                "&:hover": {
                  transform: "translateY(-5px)"
                }
              }}
            >
              <Box component="img" src={image} alt={title} sx={{ width: 80, height: 80, mb: 2 }} />
              <Typography
                variant="subtitle1"
                sx={{ fontFamily: "'Comfortaa', sans-serif", color: "#6E2E87", mb: 1 }}
              >
                {title}
              </Typography>
              <Typography
                variant="body2"
                sx={{ fontFamily: "'Comfortaa', sans-serif", color: "#6E2E87" }}
              >
                {description}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
