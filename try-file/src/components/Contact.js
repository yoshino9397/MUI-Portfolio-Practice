import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({});
const InputField = createTheme({});

const Contact = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box component="div">
        <Grid container justify="center">
          <Box component="form">
            <Typography variant="h5">Hire or Contact me...</Typography>
            <InputField
              theme={InputField}
              fullWidth={true}
              label="Name"
              variant="outlined"
              // inputProps={{ className: classes.input }}
            />
            <InputField
              theme={InputField}
              fullWidth={true}
              label="Email"
              variant="outlined"
              // inputProps={{ className: classes.input }}
            />
            <InputField
              theme={InputField}
              fullWidth={true}
              label="Message"
              variant="outlined"
              multiline
              rows={4}
              // inputProps={{ className: classes.input }}
            />
            <Button variant="outlined" fullWidth={true} endIcon={<SendIcon />}>
              Contact Me
            </Button>
          </Box>
        </Grid>
      </Box>
    </ThemeProvider>
  );
};

export default Contact;
