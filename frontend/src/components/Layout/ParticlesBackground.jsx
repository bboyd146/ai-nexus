// src/components/Layout/ParticlesBackground.jsx
import { useEffect, useMemo } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export default function ParticlesBackground() {
  useEffect(() => {
    initParticlesEngine(async engine => {
      await loadSlim(engine);
    });
  }, []);

  const options = useMemo(
    () => ({
      background: {
        color: { value: "#0f172a" }, // keep dark background
      },
      fpsLimit: 60,
      interactivity: {
        events: {
          onHover: { enable: true, mode: "repulse" },
          onClick: { enable: true, mode: "push" },
        },
        modes: {
          repulse: { distance: 100, duration: 0.4 },
          push: { quantity: 4 },
        },
      },
      particles: {
        color: { value: "#38bdf8" }, // brighter cyan-blue
        links: {
          color: "#38bdf8",
          distance: 140,
          enable: true,
          opacity: 0.6, // make it more visible
          width: 1.2,
        },
        move: {
          enable: true,
          speed: 2.0,
          direction: "none",
          outModes: { default: "bounce" },
        },
        number: { value: 100, density: { enable: true, area: 800 } },
        opacity: { value: 0.8 },
        shape: { type: "circle" },
        size: { value: { min: 1.5, max: 3.5 } },
      },
      detectRetina: true,
    }),
    []
  );

  return (
    <Particles
      id="tsparticles"
      options={options}
      className="fixed inset-0 -z-10"
    />
  );
}
