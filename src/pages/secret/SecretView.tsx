import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Alert,
  IconButton,
  Tooltip,
  useMediaQuery
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import GitHubIcon from "@mui/icons-material/GitHub";

export default function SecretView() {
  const { id } = useParams();
  const [secret, setSecret] = useState<string | null>(null);
  const [error, setError] = useState(false);
  const [copied, setCopied] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  useEffect(() => {
    if (!id) return;
    fetch(`/api/secret/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error("Not found");
        return res.json();
      })
      .then((data) => setSecret(data.value))
      .catch(() => setError(true));
  }, [id]);

  const handleCopy = () => {
    if (!secret) return;
    navigator.clipboard.writeText(secret).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: "#E4BBEF",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        py: 6,
        px: 2
      }}
    >
      <Box
        sx={{
          bgcolor: "white",
          borderRadius: 4,
          boxShadow: "0 8px 24px rgba(0, 0, 0, 0.2)",
          width: "100%",
          maxWidth: 1200,
          px: 4,
          py: isMobile ? 6 : 8,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          minHeight: "80vh"
        }}
      >
        {/* Haupttitel */}
        <Typography
          variant="h4"
          sx={{
            mb: 3,
            fontFamily: "'Comfortaa', sans-serif",
            color: "#6E2E87",
            textAlign: "center"
          }}
        >
          Dein Geheimnis
        </Typography>

        {/* Anzeige Geheimnis oder Fehler */}
        <Box sx={{ mb: 4, textAlign: "center" }}>
          {error ? (
            <Alert severity="error">
              Dieses Geheimnis wurde bereits abgerufen oder ist nicht mehr gültig.
            </Alert>
          ) : secret ? (
            <Alert
              severity="success"
              sx={{
                position: "relative",
                justifyContent: "center",
                alignItems: "center",
                px: 4
              }}
            >
              <Typography
                variant="body1"
                sx={{ fontFamily: "'Comfortaa', sans-serif" }}
              >
                {secret}
              </Typography>
              <Tooltip
                title={copied ? "Kopiert!" : "In Zwischenablage kopieren"}
              >
                <IconButton
                  onClick={handleCopy}
                  size="small"
                  sx={{
                    position: "absolute",
                    right: 8,
                    top: 8,
                    color: "#6E2E87"
                  }}
                >
                  <ContentCopyIcon fontSize="small" />
                </IconButton>
              </Tooltip>
            </Alert>
          ) : (
            <Typography variant="body2" sx={{ color: "#999" }}>
              Lade...
            </Typography>
          )}
        </Box>

        {/* Footer */}
        <Box
          sx={{
            mt: "auto",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 2
          }}
        >
          {/* Designed by */}
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography
              variant="body2"
              sx={{
                fontFamily: "'Comfortaa', sans-serif",
                color: "#6E2E87",
                mr: 1
              }}
            >
              designed by
            </Typography>
            <a href="https://www.uberli.ch" target="_blank" rel="noopener noreferrer">
              <img
                src="/images/logo_uberli_purple_150w.png"
                alt="uberli"
                style={{ height: 32 }}
              />
            </a>
          </Box>

          {/* GitHub-Link */}
          <a
            href="https://github.com/uberli/secret"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "flex",
              alignItems: "center",
              color: "#6E2E87",
              fontFamily: "'Comfortaa', sans-serif",
              textDecoration: "none",
              fontSize: "0.9rem"
            }}
          >
            <GitHubIcon fontSize="small" sx={{ mr: 0.5 }} />
            Open Source: You can trust our code.
          </a>
        </Box>
      </Box>
    </Box>
  );
}
