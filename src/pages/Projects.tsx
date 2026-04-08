import { Box, Grid, Paper, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";

export default function Projects() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const cardBaseBg = theme.palette.mode === "dark" ? "#342A4C" : "#FAF3FF";
  const cardHoverBg = theme.palette.mode === "dark" ? "#3C3057" : "#F5EAFF";

  const projects = [
    {
      title: "YIA – Youth Intelligence Agency",
      image: "/images/yia_logo.png",
      alt: "YIA",
      description:
        "Mit der Youth Intelligence Agency machen wir Technik für Kinder und Jugendliche erlebbar – mit echten Herausforderungen und greifbaren Ergebnissen."
    },
    {
      title: "Pop You Up",
      image: "/images/pop_you_up_icon.svg",
      alt: "Pop You Up",
      description:
        "Ein Empowerment-Programm für Jugendliche im Übergang zwischen Schule und Beruf. Im Zentrum steht das eigene Potenzial – entdeckt mit Herz, Kopf und Hand."
    },
    {
      title: "Futurebooster",
      image: "/images/FutureBooster_logo.png",
      alt: "Futurebooster",
      description:
        "Eine Plattform zur Laufbahnförderung: Jugendliche entdecken Aktivitäten, bauen ihr Portfolio auf und treten in Kontakt mit Ausbildungsbetrieben."
    }
  ];

  return (
    <Box
      id="projects"
      sx={{
        width: "100%",
        py: isMobile ? 6 : 10,
        px: 0,
        maxWidth: "none",
        margin: 0,
        textAlign: "left"
      }}
    >
      <Typography
        variant="h4"
        sx={{
          mb: 2
        }}
      >
        Unsere Projekte
      </Typography>
      <Typography variant="body1" sx={{ mb: 4, maxWidth: 760 }}>
        Konkrete Programme mit messbarem Mehrwert für Jugendliche, Schulen und Organisationen.
      </Typography>

      <Grid container spacing={4}>
        {projects.map((project) => (
          <Grid size={{ xs: 12, sm: 6, md: 6 }} key={project.title}>
            <Paper
              elevation={3}
              sx={{
                p: 3,
                borderRadius: 4,
                height: "100%",
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
              <Box sx={{ textAlign: "center" }}>
                <img
                  src={project.image}
                  alt={project.alt}
                  width="80"
                  height="80"
                />
                <Typography
                  variant="subtitle1"
                  sx={{
                    mt: 2,
                    fontWeight: "bold"
                  }}
                >
                  {project.title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    mt: 1
                  }}
                >
                  {project.description}
                </Typography>
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
