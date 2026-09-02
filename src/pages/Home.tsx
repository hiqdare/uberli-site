import { Box, Button, Chip, Grid, Paper, Stack, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Link as RouterLink } from "react-router-dom";
import PageMeta from "../components/PageMeta";

export default function Home() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const cardBaseBg = theme.palette.mode === "dark" ? "#342A4C" : "#FAF3FF";
  const cardHoverBg = theme.palette.mode === "dark" ? "#3C3057" : "#F5EAFF";

  return (
    <>
      <PageMeta
        title="uberli - Ideen, Experimente & Projekte"
        description="Uberli ist mein persönlicher Raum für Projekte, Experimente und Ideen rund um Technologie, Bildung und KI."
      />
      <Box sx={{ width: "100%", py: { xs: 3, sm: 4 } }}>
        <Grid container spacing={4} alignItems="center">
          <Grid size={{ xs: 12, md: 7 }}>
            <Typography variant="h4" sx={{ mb: 2 }}>
              Ideen, Experimente & Projekte.
            </Typography>
            <Typography variant="body1" sx={{ mb: 3, maxWidth: 760 }}>
              Uberli ist mein persönlicher Raum für Dinge, die ich rund um
              Technologie, Bildung und KI ausprobiere, baue und weiterdenke.
            </Typography>
            <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap" sx={{ mb: 4 }}>
              {["Technologie", "Lernen", "KI", "Prototypen", "Social Impact"].map((tag) => (
                <Chip key={tag} label={tag} color="secondary" variant="outlined" />
              ))}
            </Stack>
            <Stack direction={{ xs: "column", sm: "row" }} spacing={1.5}>
              <Button component={RouterLink} to="/projekte/" variant="contained" color="secondary" endIcon={<ArrowForwardIcon />}>
                Projekte ansehen
              </Button>
              <Button component={RouterLink} to="/experimente/" variant="outlined" color="secondary" endIcon={<ArrowForwardIcon />}>
                Experimente
              </Button>
            </Stack>
          </Grid>

          <Grid size={{ xs: 12, md: 5 }}>
            <Box
              component="img"
              src="/images/uberli.visualisierung.png"
              alt="Uberli Visualisierung mit Ideen, Experimenten und Projekten"
              sx={{
                width: "100%",
                maxHeight: { xs: 360, md: 460 },
                objectFit: "cover",
                objectPosition: "center 18%",
                borderRadius: 3,
                border: "1px solid",
                borderColor: "divider",
                boxShadow: theme.palette.mode === "dark"
                  ? "0 16px 32px rgba(0, 0, 0, 0.35)"
                  : "0 16px 32px rgba(110, 46, 135, 0.18)",
              }}
            />
          </Grid>
        </Grid>

        <Grid container spacing={3} sx={{ mt: { xs: 5, md: 6 } }}>
          {[
            {
              title: "Projekte",
              description: "YIA, PYU, Futurebooster und Evoxa: die grösseren Vorhaben unter dem Uberli-Dach.",
              href: "/projekte/",
            },
            {
              title: "Experimente",
              description: "Kleinere Prototypen, technische Erkundungen und lose Ideen, die weiter wachsen können.",
              href: "/experimente/",
            },
            {
              title: "Über",
              description: "Warum Uberli heute mein privater Ort für Lernen, Bauen und Ausprobieren ist.",
              href: "/ueber/",
            },
          ].map(({ title, description, href }) => (
            <Grid size={{ xs: 12, md: 4 }} key={title}>
              <Paper
                elevation={2}
                sx={{
                  p: isMobile ? 2.5 : 3,
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
                  },
                }}
              >
                <Typography variant="h5" sx={{ fontWeight: "bold", mb: 1 }}>
                  {title}
                </Typography>
                <Typography variant="body2" sx={{ mb: 2 }}>
                  {description}
                </Typography>
                <Button component={RouterLink} to={href} variant="text" color="secondary" endIcon={<ArrowForwardIcon />}>
                  Öffnen
                </Button>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
}
