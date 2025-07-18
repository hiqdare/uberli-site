import { useState } from "react";
import { Box, Button, TextField, Typography, Alert } from "@mui/material";

export default function SecretPage() {
  const [secret, setSecret] = useState("");
  const [link, setLink] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async () => {
    setError("");
    setLink("");
    if (!secret) {
      setError("Bitte ein Geheimnis eingeben.");
      return;
    }

    try {
      const response = await fetch("/api/secret", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ value: secret })
      });

      const data = await response.json();
      if (data.id) {
        const url = `${window.location.origin}/secret/${data.id}`;
        setLink(url);
        setSecret("");
      } else {
        setError("Fehler beim Erstellen des Geheimnisses.");
      }
    } catch (e) {
      console.error(e);
      setError("Verbindung zum Server fehlgeschlagen.");
    }
  };

  return (
    <Box
      sx={{
        maxWidth: 500,
        mx: "auto",
        mt: 8,
        px: 2,
        textAlign: "center"
      }}
    >
      <Typography variant="h4" sx={{ mb: 3, fontFamily: "'Comfortaa', sans-serif", color: "#6E2E87" }}>
        Passwort teilen
      </Typography>

      <TextField
        label="Geheimnis"
        value={secret}
        onChange={(e) => setSecret(e.target.value)}
        fullWidth
        multiline
        rows={3}
        sx={{ mb: 2 }}
      />

      <Button variant="contained" sx={{ bgcolor: "#6E2E87", mb: 2 }} onClick={handleSubmit}>
        Link generieren
      </Button>

      {link && (
        <Alert severity="success">
          Link: <a href={link} target="_blank" rel="noopener noreferrer">{link}</a>
        </Alert>
      )}

      {error && <Alert severity="error">{error}</Alert>}
    </Box>
  );
}
