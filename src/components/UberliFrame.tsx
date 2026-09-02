import { type ReactNode, useEffect, useState } from "react";
import { Box, Button, Paper, Stack, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Link as RouterLink, useLocation } from "react-router-dom";

const circleStyle = (bgColor: string, textColor: string, size: number) => ({
  width: size,
  height: size,
  borderRadius: "50%",
  backgroundColor: bgColor,
  color: textColor,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: size * 0.6,
  fontWeight: "bold",
  fontFamily: "'Comfortaa', sans-serif",
  margin: 0,
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  transition: "all 0.6s ease",
});

type CircleRowProps = {
  letters: string[];
  bgColors: string[];
  textColors: string[];
  size: number;
};

const navItems = [
  { label: "Start", path: "/" },
  { label: "Projekte", path: "/projekte/" },
  { label: "Experimente", path: "/experimente/" },
  { label: "Über", path: "/ueber/" },
  { label: "Kontakt", path: "/kontakt/" },
];

const normalizePath = (path: string) => {
  if (path === "/") {
    return path;
  }

  return path.replace(/\/$/, "");
};

const logoAnimationKey = "uberli-logo-animation-complete";

const hasLogoAnimationPlayed = () => {
  try {
    return sessionStorage.getItem(logoAnimationKey) === "true";
  } catch {
    return false;
  }
};

const rememberLogoAnimation = () => {
  try {
    sessionStorage.setItem(logoAnimationKey, "true");
  } catch {
    // If sessionStorage is unavailable, route changes still keep this frame mounted.
  }
};

function CircleRow({ letters, bgColors, textColors, size }: CircleRowProps) {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", position: "relative" }}>
      {letters.map((char, idx) => (
        <Box key={char} sx={{ position: "relative", display: "flex", justifyContent: "center" }}>
          <Box sx={{ ...circleStyle(bgColors[idx], textColors[idx], size), position: "relative", zIndex: 1 }}>
            {char}
          </Box>
        </Box>
      ))}
    </Box>
  );
}

export default function UberliFrame({ children }: { children: ReactNode }) {
  const [active, setActive] = useState(hasLogoAnimationPlayed);
  const theme = useTheme();
  const location = useLocation();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const size = isMobile ? 100 : 120;
  const logoGap = isMobile ? 16 : 24;
  const activePath = normalizePath(location.pathname);

  useEffect(() => {
    if (active) {
      return undefined;
    }

    const timer = setTimeout(() => {
      setActive(true);
      rememberLogoAnimation();
    }, 350);

    return () => clearTimeout(timer);
  }, [active]);

  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: theme.palette.background.paper,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        overflow: "hidden",
      }}
    >
      <Stack
        sx={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
          maxWidth: "lg",
          width: "100%",
          overflow: "hidden",
        }}
      >
        <Box
          aria-hidden="true"
          sx={{
            position: "absolute",
            top: 0,
            left: "50%",
            transform: active ? `translate(-50%, calc(${size / 2}px))` : `translate(-50%, calc(50vh - ${size}px))`,
            transition: "transform 0.8s ease",
            width: size * 2,
            height: size * 0.5,
            backgroundColor: theme.palette.secondary.main,
            zIndex: 0,
            borderRadius: 0,
          }}
        />
        <Box
          sx={{
            transform: active ? `translateY(calc(-50vh + ${size}px))` : `translateY(-50%)`,
            transition: "transform 0.8s ease",
            zIndex: 1,
          }}
        >
          <CircleRow
            letters={["u", "b", "e"]}
            bgColors={["#ffffff", theme.palette.text.primary, theme.palette.text.primary]}
            textColors={[theme.palette.text.primary, "#ffffff", "#ffffff"]}
            size={size}
          />
        </Box>

        <Stack
          component="nav"
          aria-label="Hauptnavigation"
          sx={{
            position: "absolute",
            top: size,
            transform: active ? "scaleY(1)" : "scaleY(0)",
            transformOrigin: "top",
            transition: "transform 0.8s ease",
            transitionDelay: active ? "0.8s" : "0s",
            width: "100%",
            bgcolor: theme.palette.background.paper,
            display: "flex",
            justifyContent: { xs: "flex-start", sm: "center" },
            zIndex: 10,
            py: 2,
            px: 2,
            flexDirection: "row",
            alignItems: "center",
            gap: 1,
            overflowX: "auto",
          }}
        >
          {navItems.map(({ label, path }) => {
            const isActive = activePath === normalizePath(path);

            return (
              <Button
                key={label}
                component={RouterLink}
                to={path}
                variant="text"
                aria-current={isActive ? "page" : undefined}
                sx={{
                  fontFamily: "'Comfortaa', sans-serif",
                  whiteSpace: "nowrap",
                  flexShrink: 0,
                  minWidth: "auto",
                  px: 1.5,
                  color: isActive ? "#fff" : theme.palette.text.primary,
                  backgroundColor: isActive ? theme.palette.text.primary : "transparent",
                  mx: 0.25,
                  ":hover": {
                    bgcolor: theme.palette.text.primary,
                    color: "white",
                  },
                }}
              >
                {label}
              </Button>
            );
          })}
        </Stack>

        <Paper
          component="main"
          elevation={3}
          sx={{
            position: "absolute",
            top: `calc(36px + ${size}px)`,
            bottom: `${size + logoGap}px`,
            transform: active ? "scaleY(1)" : "scaleY(0)",
            transformOrigin: "center",
            transition: "transform 0.8s ease",
            left: 0,
            width: "100%",
            borderRadius: 3,
            bgcolor: theme.palette.mode === "dark" ? "#2A2340" : "#FCF8FF",
            color: theme.palette.text.primary,
            zIndex: 5,
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            px: isMobile ? 2.5 : 4,
            py: 3,
            textAlign: "left",
            overflowY: "auto",
          }}
        >
          {children}
          <Box
            component="footer"
            sx={{
              width: "100%",
              pt: 5,
              pb: 1,
              textAlign: "center",
              color: theme.palette.text.secondary,
            }}
          >
            <Typography variant="caption" sx={{ fontFamily: "'Comfortaa', sans-serif" }}>
              uberli · persönliche Projekte & Experimente · privat und nicht-kommerziell
            </Typography>
          </Box>
        </Paper>

        <Box
          aria-hidden="true"
          sx={{
            position: "absolute",
            top: 0,
            left: "50%",
            transform: active ? `translate(-50%, calc(100vh - ${size}px))` : `translate(-50%, calc(50vh - ${size / 2}px))`,
            transition: "transform 0.8s ease",
            width: size * 2,
            height: size * 0.5,
            backgroundColor: theme.palette.secondary.main,
            zIndex: 0,
            borderRadius: 0,
          }}
        />
        <Box
          sx={{
            transform: active ? `translateY(calc(50vh - ${size}px))` : `translateY(-50%)`,
            transition: "transform 0.8s ease",
            zIndex: 1,
          }}
        >
          <CircleRow
            letters={["r", "l", "i"]}
            bgColors={[theme.palette.text.primary, theme.palette.text.primary, "#ffffff"]}
            textColors={["#ffffff", "#ffffff", theme.palette.text.primary]}
            size={size}
          />
        </Box>
      </Stack>
    </Box>
  );
}
