import React from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Button,
} from '@mui/material';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <Box sx={{ bgcolor: '#e0f2f1', minHeight: '100vh', py: 6 }}>
      <Container maxWidth="md" sx={{ textAlign: 'center' }}>
        <img
          src="/logo_uberli_green_300w.png"
          alt="uberli logo"
          style={{ width: '120px', marginBottom: '24px' }}
        />
        <Typography variant="h3" gutterBottom>
          uberli.ch
        </Typography>
        <Typography variant="h6" gutterBottom>
          IT-Beratung für Bildung – Cloud, AI, EdTech & Sicherheit
        </Typography>

        <Grid container spacing={4} mt={2}>
          {[
            {
              title: 'QR Code Generator',
              description: 'Erstelle QR Codes für Schule & Events.',
              to: '/qr',
            },
            {
              title: 'Passwort-Austausch',
              description: 'Sicherer DSGVO-konformer Passwortversand.',
              to: '/password-share',
            },
            {
              title: 'Bildungsdaten Analyse',
              description:
                'Analysiere CH-Bildungsdaten für fundierte Entscheidungen.',
              to: '/edu-data',
            },
          ].map((tool, index) => (
            <Grid size={{ xs: 12, md: 4 }} key={index}>
              <Card elevation={3}>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    {tool.title}
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    {tool.description}
                  </Typography>
                  <Button
                    variant="contained"
                    component={Link}
                    to={tool.to}
                    sx={{ mt: 1 }}
                  >
                    Öffnen
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Box mt={6}>
          <Typography variant="body2" color="text.secondary">
            Spezialisiert auf: IT Management, Cloud, EdTech, AI, IT Security
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
