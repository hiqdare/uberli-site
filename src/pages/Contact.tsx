import { Box, Paper, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import PageMeta from "../components/PageMeta";

export default function Contact() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const cardBaseBg = theme.palette.mode === "dark" ? "#342A4C" : "#FAF3FF";
  const cardHoverBg = theme.palette.mode === "dark" ? "#3C3057" : "#F5EAFF";

  return (
    <>
      <PageMeta
        title="Kontakt - uberli"
        description="Ein neutraler Kontakt-Hinweis für Austausch zu Uberli, ohne kommerzielle Ausrichtung."
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
          Kontakt
        </Typography>

        <Typography variant="body1" sx={{ mb: 4, maxWidth: 760 }}>
          Hast du eine Frage oder möchtest du dich über eine Idee austauschen?
          Dann sprich mich einfach über einen bestehenden Kanal an.
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
          <Typography variant="body1">
            Uberli bleibt bewusst ein persönlicher Ort für Austausch, Ideen und lose
            Anknüpfungspunkte.
          </Typography>
        </Paper>
      </Box>
    </>
  );
}
