import { Box, Typography, Grid, Paper, Link } from "@mui/material";
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
  return (
    <Box sx={{ mt: 6 }}>
      <Typography variant="h5" sx={{ fontFamily: "'Comfortaa', sans-serif", color: "#6E2E87", mb: 4, textAlign: "left" }}>
        Das Team
      </Typography>

      <Grid container spacing={4}>
        {teamMembers.map((member) => (
          <Grid size= {{xs:12, sm:6, md:6}} key={member.name}>
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
                  src={member.image}
                  alt={member.name}
                  width="100"
                  height="100"
                  style={{ borderRadius: "50%", objectFit: "cover" }}
                />
                <Typography
                  variant="subtitle1"
                  sx={{ mt: 2, fontFamily: "'Comfortaa', sans-serif", color: "#6E2E87", fontWeight: "bold" }}
                >
                  {member.name}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ fontFamily: "'Comfortaa', sans-serif", color: "#6E2E87", mb: 1 }}
                >
                  {member.role}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ fontFamily: "'Comfortaa', sans-serif", color: "#6E2E87", mb: 1 }}
                >
                  {member.bio}
                </Typography>
                <Link href={member.linkedin} target="_blank" rel="noopener noreferrer">
                  <LinkedInIcon sx={{ color: "#6E2E87" }} />
                </Link>
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
