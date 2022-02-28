import React from "react";
import Particles from "react-tsparticles";

const Particle = () => (
  <Particles
    options={{
      fpsLimit: 60,
      backgroundMode: {
        enable: true,
      },
      background: {
        color: "#000",
      },
      particles: {
        // canvas borders bounce factors
        bounce: {
          horizontal: {
            value: 1.01,
          },
          vertical: {
            value: 1.01,
          },
        },
        color: {
          value: "#ffffff",
        },
        links: {
          color: "#ffffff",
          distance: 150,
          enable: true,
          opacity: 0.5,
          width: 1,
        },
        collisions: {
          enable: true,
          // collisions bounce factors
          bounce: {
            horizontal: {
              value: 1.5,
            },
            vertical: {
              value: 1.5,
            },
          },
        },
        move: {
          direction: "none",
          enable: true,
          outMode: "bounce",
          random: false,
          speed: 5,
          straight: false,
        },
        number: {
          density: {
            enable: true,
            area: 800,
          },
          value: 80,
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: "circle",
        },
        size: {
          random: true,
          value: 5,
        },
      },
      detectRetina: true,
    }}
  />
);

export default Particle;
