import React from "react";
import "../App.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const theme = createTheme({});
const Footer = () => {
  return (
    <ThemeProvider theme={theme}>
      <BottomNavigation sx={{ bgcolor: "#222" }}>
        <BottomNavigationAction
          icon={<GitHubIcon />}
          sx={{
            color: "tan",
            ":hover": {
              color: "tomato",
            },
          }}
        />
        <BottomNavigationAction
          icon={<LinkedInIcon />}
          sx={{
            color: "tan",
            ":hover": {
              color: "tomato",
            },
          }}
        />
        <BottomNavigationAction
          icon={<InstagramIcon />}
          sx={{
            color: "tan",
            ":hover": {
              color: "tomato",
            },
          }}
        />
      </BottomNavigation>
    </ThemeProvider>
  );
};

export default Footer;
