import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import Home from "./components";
import Resume from "./components/Resume";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      {/* <Navbar /> */}
      <Portfolio />
      {/*
      <Routes>
        <Route path="/" component={Home} />
        <Route path="/resume" component={Resume} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/contact" component={Contact} />
      </Routes> */}
    </React.Fragment>
  );
}

export default App;
