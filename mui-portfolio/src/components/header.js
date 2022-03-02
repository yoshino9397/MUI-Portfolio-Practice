import React from "react";
import ReactTypingEffect from "react-typing-effect";
import Avatar from "@mui/material/Avatar";
import avatar from "../images/avatar.jpg";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { grey } from "@mui/material/colors";

const theme = createTheme({
  // typography: {
  //   h2: {
  //     fontSize: 36,
  //     marginBottom: 15,
  //   },
  // },
  palette: {
    primary: {
      main: grey[50],
    },
  },
});

const Header = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box>
        <Grid container justify="center">
          <Avatar src={avatar} alt="Yoshino Yayama" />
        </Grid>
        <Typography variant="h4">
          <ReactTypingEffect
            text={["Yoshino Yayama"]}
            speed={100}
            cursorRenderer={(cursor) => (
              <h1 style={{ color: "white" }}>{cursor}</h1>
            )}
            displayTextRenderer={(text, i) => {
              return (
                <h1 style={{ color: "white" }}>
                  {text.split("").map((char, i) => {
                    const key = `${i}`;
                    return (
                      <span
                        key={key}
                        // style={i % 2 === 0 ? { color: "magenta" } : {}}
                      >
                        {char}
                      </span>
                    );
                  })}
                </h1>
              );
            }}
          />
        </Typography>
        <Typography variant="h5">
          <ReactTypingEffect
            text={["Frontend Developer"]}
            speed={100}
            cursorRenderer={(cursor) => (
              <h1 style={{ color: "white" }}>{cursor}</h1>
            )}
            displayTextRenderer={(text, i) => {
              return (
                <h1 style={{ color: "white" }}>
                  {text.split("").map((char, i) => {
                    const key = `${i}`;
                    return (
                      <span
                        key={key}
                        // style={i % 2 === 0 ? { color: "magenta" } : {}
                      >
                        {char}
                      </span>
                    );
                  })}
                </h1>
              );
            }}
          />
        </Typography>
        <Typography variant="h5">
          <ReactTypingEffect
            text={["React App Developer"]}
            speed={100}
            cursorRenderer={(cursor) => (
              <h1 style={{ color: "white" }}>{cursor}</h1>
            )}
            displayTextRenderer={(text, i) => {
              return (
                <h1 style={{ color: "white" }}>
                  {text.split("").map((char, i) => {
                    const key = `${i}`;
                    return (
                      <span
                        key={key}
                        // style={i % 2 === 0 ? { color: "magenta" } : {}}
                      >
                        {char}
                      </span>
                    );
                  })}
                </h1>
              );
            }}
          />
        </Typography>
      </Box>
    </ThemeProvider>
  );
};

export default Header;
