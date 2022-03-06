import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "../components/CSS/style.css";

import { makeStyles } from "@material-ui/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import WorkIcon from "@mui/icons-material/Work";
import SchoolIcon from "@mui/icons-material/School";
import BabyChangingStationIcon from "@mui/icons-material/BabyChangingStation";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: ["Rajdhani", "sans-serif"].join(","),
  },
});

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
      <ThemeProvider theme={theme}>
        <Typography
          variant="h4"
          align="center"
          className={classes.heading}
          sx={{ mt: "4rem", fontSize: "3.5rem" }}
        >
          Working Experience
        </Typography>
      </ThemeProvider>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2011 - present"
          icon={<WorkIcon />}
        >
          <h1 className="vertical-timeline-element-title">Creative Director</h1>
          <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
          <p>
            Creative Direction, User Experience, Visual Design, Project
            Management, Team Leading
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2010 - 2011"
          icon={<WorkIcon />}
        >
          <h1 className="vertical-timeline-element-title">Art Director</h1>
          <h4 className="vertical-timeline-element-subtitle">
            San Francisco, CA
          </h4>
          <p>
            Creative Direction, User Experience, Visual Design, SEO, Online
            Marketing
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2008 - 2010"
          icon={<WorkIcon />}
        >
          <h1 className="vertical-timeline-element-title">Web Designer</h1>
          <h4 className="vertical-timeline-element-subtitle">
            Los Angeles, CA
          </h4>
          <p>User Experience, Visual Design</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2006 - 2008"
          icon={<WorkIcon />}
        >
          <h1 className="vertical-timeline-element-title">Web Designer</h1>
          <h4 className="vertical-timeline-element-subtitle">
            San Francisco, CA
          </h4>
          <p>User Experience, Visual Design</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="April 2013"
          iconStyle={{ background: "#8a1c1c", color: "tan" }}
          icon={<SchoolIcon />}
        >
          <h1 className="vertical-timeline-element-title">
            Content Marketing for Web, Mobile and Social Media
          </h1>
          <h4 className="vertical-timeline-element-subtitle">Online Course</h4>
          <p>Strategy, Social Media</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="November 2012"
          iconStyle={{ background: "#8a1c1c", color: "tan" }}
          icon={<SchoolIcon />}
        >
          <h1 className="vertical-timeline-element-title">
            Agile Development Scrum Master
          </h1>
          <h4 className="vertical-timeline-element-subtitle">Certification</h4>
          <p>Creative Direction, User Experience, Visual Design</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          iconStyle={{
            background: "tomato",
            color: "#8a1c1c",
            boxShadow: "0 0 0 4px tan",
          }}
          icon={<BabyChangingStationIcon />}
        />
      </VerticalTimeline>
    </Box>
  );
};

export default Resume;
