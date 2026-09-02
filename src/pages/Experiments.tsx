import { Box, Chip, Grid, Link, Paper, Stack, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import ScienceIcon from "@mui/icons-material/Science";
import PageMeta from "../components/PageMeta";

const experiments = [
  {
    title: "Secretli",
    status: "laufender Prototyp",
    icon: LockOutlinedIcon,
    description: "Ein kleines Webexperiment zum Teilen von vertraulichen Texten über kurzlebige Links.",
    tags: ["Privacy", "Web Crypto", "UX"],
    href: "https://secret.uberli.ch/",
    linkLabel: "secret.uberli.ch",
  },
  {
    title: "Agenten-Werkstatt",
    status: "Bausteine",
    icon: ScienceIcon,
    description: "Kleine technische und didaktische Bausteine, die ich für Aktivitäten im YIA-Umfeld ausprobiere.",
    tags: ["YIA", "Prototyping", "Bildung"],
  },
];

export default function Experiments() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const cardBaseBg = theme.palette.mode === "dark" ? "#342A4C" : "#FAF3FF";
  const cardHoverBg = theme.palette.mode === "dark" ? "#3C3057" : "#F5EAFF";

  return (
    <>
      <PageMeta
        title="Experimente - uberli"
        description="Kleinere Uberli-Prototypen, technische Erkundungen und lose Ideen von Henrique Säuberli."
      />
      <Box
        sx={{
          width: "100%",
          py: { xs: 3, sm: 4 },
          px: 0,
          maxWidth: "none",
          margin: 0,
          textAlign: "left",
        }}
      >
        <Typography variant="h4" sx={{ mb: 2 }}>
          Experimente
        </Typography>

        <Typography variant="body1" sx={{ mb: 4, maxWidth: 760 }}>
          Hier landen kleinere Prototypen, technische Erkundungen und lose Ideen. Nicht alles muss
          ein grosses Projekt werden, um hier einen Platz zu haben.
        </Typography>

        <Grid container spacing={3}>
          {experiments.map(({ title, status, icon: Icon, description, tags, href, linkLabel }) => (
            <Grid size={{ xs: 12, md: 6 }} key={title}>
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
                  }
                }}
              >
                <Icon sx={{ color: "secondary.main", fontSize: 34, mb: 1.5 }} />
                <Chip label={status} color="secondary" variant="outlined" size="small" sx={{ mb: 2 }} />
                <Typography variant="subtitle1" sx={{ fontWeight: "bold", mb: 1 }}>
                  {title}
                </Typography>
                <Typography variant="body2" sx={{ mb: 2 }}>
                  {description}
                </Typography>
                <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap">
                  {tags.map((tag) => (
                    <Chip key={tag} label={tag} variant="outlined" size="small" />
                  ))}
                </Stack>
                {href && linkLabel ? (
                  <Link
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    underline="always"
                    sx={{ mt: 2, display: "inline-block", fontWeight: 700 }}
                  >
                    {linkLabel}
                  </Link>
                ) : null}
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
}
