// main.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'; 
import SecretPage from "./pages/secret/SecretPage";
import { ThemeProvider, CssBaseline } from '@mui/material';
import theme from './theme';
import './index.css';
import SecretView from './pages/secret/SecretView';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/secret" element={<SecretPage />} />
          <Route path="/secret/:id" element={<SecretView />} /> {/* NEU */}
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
