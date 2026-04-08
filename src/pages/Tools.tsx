import { Box, Chip, Link, Paper, Stack, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const toolTags = ["Microsoft 365", "Azure", "M365 Copilot", "Power Platform", "KI-Assistenten"];

export default function Tools() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const cardBaseBg = theme.palette.mode === "dark" ? "#342A4C" : "#FAF3FF";
  const cardHoverBg = theme.palette.mode === "dark" ? "#3C3057" : "#F5EAFF";

  return (
    <Box
      id="tools"
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
        Werkzeuge
      </Typography>

      <Typography variant="body1" sx={{ mb: 4, maxWidth: 760 }}>
        Eine Auswahl cloudbasierter Lösungen, die wir pragmatisch für Bildungs- und Non-Profit-Kontexte
        einsetzen.
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
        <Typography variant="body1" sx={{ mb: 2 }}>
          Wir kombinieren bewährte Plattformen mit klaren Prozessen, damit Teams schneller ins Tun kommen.
        </Typography>
        <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap">
          {toolTags.map((tag) => (
            <Chip key={tag} label={tag} color="secondary" variant="outlined" />
          ))}
        </Stack>

        <Typography variant="body1" sx={{ mt: 3, mb: 0.5 }}>
          Plattform
        </Typography>
        <Link href="https://secret.uberli.ch" target="_blank" rel="noopener noreferrer" underline="always" sx={{ fontWeight: 700 }}>
          secret.uberli.ch
        </Link>
      </Paper>
    </Box>
  );
}
