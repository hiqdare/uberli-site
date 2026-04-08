import { Box, Typography, Grid, Paper, Link, useTheme } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const teamMembers = [
  {
    name: "Henrique Säuberli",
    role: "Gründer & IT-Berater",
    image: "/images/henrique.png",
    bio: "Bringt über 20 Jahre Erfahrung in IT-Architektur und gemeinnützigen Projekten mit.",
    linkedin: "https://www.linkedin.com/in/henriquesaeuberli/"
  },
  {
    name: "Renata Säuberli",
    role: "Projektleitung & Bildungsprojekte",
    image: "/images/renata.png",
    bio: "Stärkt mit pädagogischer Expertise und Projektleistungserfahrung jede Umsetzung.",
    linkedin: "https://www.linkedin.com/in/renatasaeuberli/"
  },
  {
    name: "Kellen Aika Saito",
    role: "Finanzen & Administration",
    image: "/images/kellen.png",
    bio: "Die starke Beratung für Finanzfragen und Investition.",
    linkedin: "https://www.linkedin.com/in/kellen-aika-saito-9392aa77/"
  }
];

export default function Team() {
  const theme = useTheme();
  const cardBaseBg = theme.palette.mode === "dark" ? "#342A4C" : "#FAF3FF";
  const cardHoverBg = theme.palette.mode === "dark" ? "#3C3057" : "#F5EAFF";

  return (
    <Box sx={{ mt: 6, width: "100%" }}>
      <Typography variant="h5" sx={{ mb: 2, textAlign: "left" }}>
        Das Team
      </Typography>
      <Typography variant="body1" sx={{ mb: 4, maxWidth: 760 }}>
        Menschen mit Erfahrung in Technologie, Bildung und Umsetzung.
      </Typography>

      <Grid container spacing={4}>
        {teamMembers.map((member) => (
          <Grid size={{ xs: 12, sm: 6, md: 6 }} key={member.name}>
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
                  src={member.image}
                  alt={member.name}
                  width="100"
                  height="100"
                  style={{ borderRadius: "50%", objectFit: "cover" }}
                />
                <Typography
                  variant="subtitle1"
                  sx={{ mt: 2, fontWeight: "bold" }}
                >
                  {member.name}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ mb: 1 }}
                >
                  {member.role}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ mb: 1 }}
                >
                  {member.bio}
                </Typography>
                <Link href={member.linkedin} target="_blank" rel="noopener noreferrer">
                  <LinkedInIcon sx={{ color: theme.palette.text.primary }} />
                </Link>
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
