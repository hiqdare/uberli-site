import { Box, Typography, Grid, Paper, Stack } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import BuildCircleIcon from "@mui/icons-material/BuildCircle";
import SchoolIcon from "@mui/icons-material/School";
import PageMeta from "../components/PageMeta";

const motivations = [
  {
    title: "Neugier",
    icon: AutoAwesomeIcon,
    description: "Fragen stellen, ausprobieren und aus kleinen Prototypen lernen."
  },
  {
    title: "Bauen",
    icon: BuildCircleIcon,
    description: "Ideen früh greifbar machen, statt sie lange abstrakt zu lassen."
  },
  {
    title: "Bildung",
    icon: SchoolIcon,
    description: "Technologie so erkunden, dass junge Menschen aktiv mitgestalten können."
  }
];

export default function About() {
  const theme = useTheme();
  const cardBaseBg = theme.palette.mode === "dark" ? "#342A4C" : "#FAF3FF";
  const cardHoverBg = theme.palette.mode === "dark" ? "#3C3057" : "#F5EAFF";

  return (
    <>
      <PageMeta
        title="Über - uberli"
        description="Warum Henrique Säuberli Uberli als privaten Raum für Projekte, Experimente und Ideen nutzt."
      />
      <Box
        sx={{
          width: "100%",
          py: { xs: 3, sm: 4 },
          px: 0,
          maxWidth: "none",
          margin: 0,
          textAlign: "left"
        }}
      >
        <Typography variant="h4" sx={{ mb: 2 }}>
          Über Uberli
        </Typography>

        <Typography variant="body1" sx={{ mb: 4, maxWidth: 760 }}>
          Ich bin Henrique Säuberli. Auf Uberli sammle ich private Projekte,
          technische Experimente und Gedanken rund um Lernen, KI und digitale Gestaltung.
        </Typography>

        <Grid container spacing={4} alignItems="stretch">
          <Grid size={{ xs: 12, md: 5 }}>
            <Box
              component="img"
              src="/images/uberli.visualisierung.png"
              alt="Uberli Visualisierung mit Henrique, Ideen und technischen Skizzen"
              sx={{
                width: "100%",
                height: "100%",
                minHeight: { xs: 320, md: 520 },
                maxHeight: { xs: 420, md: "none" },
                borderRadius: 4,
                objectFit: "cover",
                objectPosition: "center top",
                border: "1px solid",
                borderColor: "divider",
                boxShadow: theme.palette.mode === "dark"
                  ? "0 10px 24px rgba(0, 0, 0, 0.35)"
                  : "0 10px 24px rgba(110, 46, 135, 0.18)",
              }}
            />
          </Grid>

          <Grid size={{ xs: 12, md: 7 }}>
            <Stack spacing={3} sx={{ height: "100%" }}>
              <Paper
                elevation={2}
                sx={{
                  p: 3,
                  borderRadius: 4,
                  flex: 1,
                  bgcolor: cardBaseBg,
                  border: "1px solid",
                  borderColor: "divider",
                }}
              >
                <Typography variant="subtitle1" sx={{ fontWeight: "bold", mb: 1 }}>
                  Henrique Säuberli
                </Typography>
                <Typography variant="body2" sx={{ mb: 1.5 }}>
                  Ich baue gerne Dinge, denke über Bildung und Technologie nach und nutze
                  Uberli als privaten Ort für Experimente ausserhalb meiner beruflichen Arbeit.
                </Typography>
                <Typography variant="body2">
                  Der Fokus liegt auf dem, was ich privat erkunde und baue. Berufliche
                  Projekte und vertrauliche Inhalte bleiben davon klar getrennt.
                </Typography>
              </Paper>

              <Paper
                elevation={2}
                sx={{
                  p: 3,
                  borderRadius: 4,
                  flex: 1,
                  bgcolor: cardBaseBg,
                  border: "1px solid",
                  borderColor: "divider",
                }}
              >
                <Typography variant="subtitle1" sx={{ fontWeight: "bold", mb: 1 }}>
                  Warum es Uberli gibt
                </Typography>
                <Typography variant="body2">
                  Manche Ideen sind zu unfertig für eine grosse Bühne, aber zu interessant,
                  um sie in Notizen verschwinden zu lassen. Uberli ist dieser Zwischenraum:
                  ein Platz für Prototypen, Lernideen, technische Skizzen und Projekte mit
                  gesellschaftlichem Nutzen.
                </Typography>
              </Paper>

              <Paper
                elevation={0}
                sx={{
                  p: 3,
                  borderRadius: 3,
                  bgcolor: theme.palette.mode === "dark" ? "#2A2340" : "#FCF8FF",
                  border: "1px solid",
                  borderColor: theme.palette.mode === "dark" ? "#493760" : "#E8D3F1",
                }}
              >
                <Typography variant="subtitle1" sx={{ fontWeight: "bold", mb: 1 }}>
                  Kurz zur Geschichte
                </Typography>
                <Typography variant="body2">
                  Uberli war eine Zeit lang als kleine Firma aktiv. Diese Phase ist
                  abgeschlossen. Heute nutze ich Uberli als persönlichen Raum für Projekte,
                  Experimente und Ideen.
                </Typography>
              </Paper>
            </Stack>
          </Grid>
        </Grid>

        <Grid container spacing={3} sx={{ mt: 4 }}>
          {motivations.map(({ title, icon: Icon, description }) => (
            <Grid size={{ xs: 12, sm: 4 }} key={title}>
              <Paper
                elevation={2}
                sx={{
                  p: 2.5,
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
                <Icon sx={{ fontSize: 32, color: "secondary.main", mb: 1.5 }} />
                <Typography variant="subtitle1" sx={{ fontWeight: "bold", mb: 1 }}>
                  {title}
                </Typography>
                <Typography variant="body2">
                  {description}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
}
