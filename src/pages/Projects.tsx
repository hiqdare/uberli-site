import { Box, Grid, Paper, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";

export default function Projects() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

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
        py: isMobile ? 6 : 10,
        px: 4,
        maxWidth: "lg",
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
        Unsere Projekte
      </Typography>

       <Grid container spacing={4}>
        {projects.map((project) => (
          <Grid size={{xs:12, sm:6, md: 6}} key={project.title}>
            <Paper
              elevation={3}
              sx={{
                p: 3,
                borderRadius: 4,
                height: "100%",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                "&:hover": {
                  transform: "scale(1.03)",
                  boxShadow: "0 8px 24px rgba(0, 0, 0, 0.2)"
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
                    fontFamily: "'Comfortaa', sans-serif",
                    color: "#6E2E87",
                    fontWeight: "bold"
                  }}
                >
                  {project.title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    mt: 1,
                    fontFamily: "'Comfortaa', sans-serif",
                    color: "#6E2E87"
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
