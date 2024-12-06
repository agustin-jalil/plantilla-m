import React, { useEffect, useRef } from "react";
import ReactFullpage from '@fullpage/react-fullpage';
import { NeatGradient } from "@firecms/neat";
import Section from "./common/section";
import Home from "./pages/home";
import Novedades from "./pages/novedades";

// Componente Fullpage
const Fullpage = () => (
  <ReactFullpage
    licenseKey={'YOUR_KEY_HERE'}
    scrollingSpeed={500}
    render={({ state, fullpageApi }) => {
      return (
        <ReactFullpage.Wrapper>
            <Home/>
            <Novedades/>
            <Home/>
            <Novedades/>
        </ReactFullpage.Wrapper>
      );
    }}
  />
);

// Componente HomePage
export const App = () => {
  const canvasRef = useRef(null);
  const gradientRef = useRef(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    gradientRef.current = new NeatGradient({
      ref: canvasRef.current,
      colors: [
        { color: '#26A7FC', enabled: true },
        { color: '#add8e6', enabled: true },
        { color: '#add8e6', enabled: true },
        { color: '#26A7FC', enabled: true },
        { color: '#1E86CA', enabled: true },
      ],
      speed: 4.5,
      horizontalPressure: 4,
      verticalPressure: 5,
      waveFrequencyX: 4,
      waveFrequencyY: 3,
      waveAmplitude: 2,
      shadows: 10,
      highlights: 10,
      colorBrightness: 0.95,
      colorSaturation: 10,
      wireframe: false,
      colorBlending: 10,
      backgroundColor: '#00A2FF',
      backgroundAlpha: 1,
      grainScale: 53,
      grainSparsity: 0,
      grainIntensity: 0,
      grainSpeed: 0.3,
      resolution: 0.35,
    });

    return () => gradientRef.current.destroy();
  }, [canvasRef.current]);

  return (
    <>
      <canvas
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          height: "100vh",
          width: "100vw",
          display: "block",
          zIndex: 0,
        }}
        ref={canvasRef}
      />
        
      <Fullpage />
    </>
  );
};

export default App;
