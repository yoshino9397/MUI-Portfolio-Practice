import React from "react";
import ReactTypingEffect from "react-typing-effect";
import { makeStyles } from "@material-ui/styles";
import Avatar from "@mui/material/Avatar";
import avatar from "../images/avatar.jpg";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

// const useStyles = makeStyles((theme) => ({
//   avatar: {
//     width: theme.spacing(15),
//     height: theme.spacing(15),
//     margin: theme.spacing(1),
//   },
//   title: {
//     color: "tomato",
//   },
//   subtitle: {
//     color: "tan",
//     textTransform: "uppercase",
//   },
//   typedContainer: {
//     position: "absolute",
//     top: "50%",
//     left: "50%",
//     transform: "translate(-50%,-50%)",
//     width: "100vw",
//     textAlign: "center",
//     zIndex: 1,
//   },
// }));

const Header = () => {
  // const classes = useStyles();
  return (
    <Box>
      <Grid container justify="center">
        <Avatar src={avatar} alt="Yoshino Yayama" />
      </Grid>
      <Typography variant="h4">
        <ReactTypingEffect
          text={["Yoshino Yayama"]}
          speed={100}
          cursorRenderer={(cursor) => (
            <h1 style={{ color: "black" }}>{cursor}</h1>
          )}
          displayTextRenderer={(text, i) => {
            return (
              <h1 style={{ color: "blue" }}>
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
            <h1 style={{ color: "black" }}>{cursor}</h1>
          )}
          displayTextRenderer={(text, i) => {
            return (
              <h1>
                {text.split("").map((char, i) => {
                  const key = `${i}`;
                  return (
                    <span
                      key={key}
                      // style={i % 2 === 0 ? { color: "magenta" } : {}}
                      style={{ color: "black" }}
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
            <h1 style={{ color: "black" }}>{cursor}</h1>
          )}
          displayTextRenderer={(text, i) => {
            return (
              <h1>
                {text.split("").map((char, i) => {
                  const key = `${i}`;
                  return (
                    <span
                      key={key}
                      // style={i % 2 === 0 ? { color: "magenta" } : {}}
                      style={{ color: "black" }}
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
  );
};

export default Header;
