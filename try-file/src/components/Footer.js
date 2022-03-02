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
      <BottomNavigation sx={{ bgcolor: "tomato" }}>
        <BottomNavigationAction icon={<GitHubIcon />} sx={{ color: "white" }} />
        <BottomNavigationAction
          icon={<LinkedInIcon />}
          sx={{ color: "white" }}
        />
        <BottomNavigationAction
          icon={<InstagramIcon />}
          sx={{ color: "white" }}
        />
      </BottomNavigation>
    </ThemeProvider>
  );
};

export default Footer;
