import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { makeStyles } from "@material-ui/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: "#233",
  },
  heading: {
    color: "tomato",
    padding: "3rem 0",
    textTransform: "uppercase",
  },
}));

const Resume = () => {
  const classes = useStyles();
  return (
    <Box component="header" className={classes.mainContainer}>
      <Typography
        variant="h4"
        align="center"
        className={classes.heading}
        sx={{ mt: "4rem" }}
      >
        Working Experience
      </Typography>
      
    </Box>
  );
};

export default Resume;
