import { Box, Chip, Grid, Link, Paper, Stack, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import PageMeta from "../components/PageMeta";

export default function Projects() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const cardBaseBg = theme.palette.mode === "dark" ? "#342A4C" : "#FAF3FF";
  const cardHoverBg = theme.palette.mode === "dark" ? "#3C3057" : "#F5EAFF";

  return (
    <>
      <PageMeta
        title="Projekte - uberli"
        description="YIA, PYU, Futurebooster und Evoxa: persönliche Projekte und Erkundungen unter dem Uberli-Dach."
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
        <Typography
          variant="h4"
          sx={{
            mb: 2
          }}
        >
          Projekte
        </Typography>
        <Typography variant="body1" sx={{ mb: 4, maxWidth: 760 }}>
          Hier sammle ich die grösseren Vorhaben unter dem Uberli-Dach. Manche
          laufen weiter, andere sind abgeschlossen oder bewusst explorativ.
        </Typography>

        <Grid container spacing={4}>
          <Grid size={{ xs: 12, lg: 7 }}>
            <Paper
              elevation={3}
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
                }
              }}
            >
              <Stack direction={{ xs: "column", sm: "row" }} spacing={3} alignItems={{ xs: "flex-start", sm: "center" }}>
                <Box
                  component="img"
                  src="/images/yia_logo.png"
                  alt="Youth Intelligence Agency Logo"
                  sx={{ width: 92, height: 92, objectFit: "contain", flexShrink: 0 }}
                />
                <Box>
                  <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap" sx={{ mb: 1 }}>
                    <Chip label="laufendes Engagement" color="secondary" variant="outlined" size="small" />
                    <Chip label="gemeinnützig" color="secondary" variant="outlined" size="small" />
                  </Stack>
                  <Typography variant="h5" sx={{ fontWeight: "bold", mb: 1 }}>
                    YIA – Youth Intelligence Agency
                  </Typography>
                  <Typography variant="body2">
                    YIA hilft Kindern und Jugendlichen, Technologie aktiv zu entdecken und
                    mitzugestalten. Hier mache ich Gedanken, Experimente und technische
                    Bausteine rund um dieses Engagement sichtbar, ohne YIA als Uberli-Produkt
                    darzustellen.
                  </Typography>
                  <Link
                    href="https://www.yiagency.ch/"
                    target="_blank"
                    rel="noopener noreferrer"
                    underline="always"
                    sx={{ mt: 2, display: "inline-flex", alignItems: "center", gap: 0.75, fontWeight: 700 }}
                  >
                    YIA besuchen
                    <OpenInNewIcon sx={{ fontSize: 16 }} />
                  </Link>
                </Box>
              </Stack>

              <Box
                sx={{
                  mt: 3,
                  ml: { xs: 0, sm: "46px" },
                  pl: 3,
                  borderLeft: "2px solid",
                  borderColor: "secondary.main",
                }}
              >
                <Stack direction={{ xs: "column", sm: "row" }} spacing={2.5} alignItems={{ xs: "flex-start", sm: "center" }}>
                  <Box
                    component="img"
                    src="/images/pop_you_up_icon.svg"
                    alt="PYU Logo"
                    sx={{ width: 64, height: 64, objectFit: "contain", flexShrink: 0 }}
                  />
                  <Box>
                    <Typography variant="subtitle1" sx={{ fontWeight: "bold", mb: 0.75 }}>
                      PYU
                    </Typography>
                    <Typography variant="body2">
                      PYU entwickle ich für das YIA-Ökosystem. Die Plattform unterstützt
                      die operative und digitale Erfahrung rund um Agentinnen und Agenten,
                      Coaches und Aktivitäten.
                    </Typography>
                    <Link
                      href="https://pyu.yiagency.ch/"
                      target="_blank"
                      rel="noopener noreferrer"
                      underline="always"
                      sx={{ mt: 1.5, display: "inline-flex", alignItems: "center", gap: 0.75, fontWeight: 700 }}
                    >
                      PYU öffnen
                      <OpenInNewIcon sx={{ fontSize: 16 }} />
                    </Link>
                  </Box>
                </Stack>
              </Box>
            </Paper>
          </Grid>

        <Grid size={{ xs: 12, sm: 6, lg: 5 }}>
          <Paper
            elevation={3}
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
              }
            }}
          >
            <Stack spacing={2} sx={{ height: "100%" }}>
              <Box
                component="img"
                src="/images/ai.png"
                alt="Abstrakte KI-Illustration"
                sx={{ width: 92, height: 92, objectFit: "contain" }}
              />
              <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap">
                <Chip label="Exploration" color="secondary" variant="outlined" size="small" />
                <Chip label="EdTech & KI" color="secondary" variant="outlined" size="small" />
              </Stack>
              <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                Evoxa
              </Typography>
              <Typography variant="body2">
                Mit Evoxa erkunde ich, wie KI dabei helfen kann, Lernmomente aus
                individuellen Interessen abzuleiten und zugänglich zu machen.
              </Typography>
              <Typography variant="body2">
                Der Stand ist bewusst offen: eher Konzept, Skizzen und Prototyping als
                fertige Veröffentlichung.
              </Typography>
              <Link
                href="https://evoxa.app.br/"
                target="_blank"
                rel="noopener noreferrer"
                underline="always"
                sx={{ mt: "auto", display: "inline-flex", alignItems: "center", gap: 0.75, fontWeight: 700 }}
              >
                Evoxa öffnen
                <OpenInNewIcon sx={{ fontSize: 16 }} />
              </Link>
            </Stack>
          </Paper>
        </Grid>

        <Grid size={{ xs: 12, sm: 6, lg: 5 }}>
          <Paper
            elevation={3}
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
              }
            }}
          >
            <Stack spacing={2} sx={{ height: "100%" }}>
              <Box
                component="img"
                src="/images/FutureBooster_logo.png"
                alt="Futurebooster Logo"
                sx={{ width: 92, height: 92, objectFit: "contain" }}
              />
              <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap">
                <Chip label="konkretes Projekt" color="secondary" variant="outlined" size="small" />
                <Chip label="Laufbahnförderung" color="secondary" variant="outlined" size="small" />
              </Stack>
              <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                Futurebooster
              </Typography>
              <Typography variant="body2">
                Futurebooster war ein konkretes Projekt zur Laufbahnförderung.
                Jugendliche konnten Aktivitäten entdecken, Erfahrungen sichtbar machen
                und ein persönliches Portfolio aufbauen.
              </Typography>
              <Typography variant="body2">
                Mich interessierte daran besonders, wie digitale Werkzeuge junge Menschen
                dabei unterstützen können, Potenzial und nächste Schritte greifbarer zu machen.
              </Typography>
            </Stack>
          </Paper>
        </Grid>
        </Grid>
      </Box>
    </>
  );
}
