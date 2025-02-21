import React, { useEffect, useState, useRef } from "react";
import ReactFullpage from '@fullpage/react-fullpage';
import Home from "./pages/home";
import Novedades from "./pages/novedades";
import Mailer from "./pages/mailer";
import Testimonial from "./pages/testimonial";
import Caracteristicas from "./pages/caracteristicas";
import Sponsors from "./pages/sponsors";
import FooterSection from "./pages/footerSection";
import LoadingScreen from './pages/LoadingScreen';  // Import the loading screen
import Header from "./common/header";
import Footer from "./common/footer";

const Fullpage = () => (
  <ReactFullpage
    licenseKey={'YOUR_KEY_HERE'}
    scrollingSpeed={500}
    render={({ state, fullpageApi }) => {
      return (
        <ReactFullpage.Wrapper>
            <Home/>
            <Novedades/>
            <Mailer/>
            <Testimonial/>
            <Mailer/>
            <Caracteristicas/>
            <Mailer/>
            <Sponsors/>
            <FooterSection/>
        </ReactFullpage.Wrapper>
      );
    }}
  />
);

export const App = () => {
  const canvasRef = useRef(null);
  const gradientRef = useRef(null);
  const [loading, setLoading] = useState(true);  // Add loading state
  const [progress, setProgress] = useState(0);  // Track progress

  useEffect(() => {
    // Simulate loading of assets
    const loadAssets = async () => {
      const interval = setInterval(() => {
        setProgress((prevProgress) => {
          if (prevProgress >= 100) {
            clearInterval(interval);  // Stop when loading is complete
            setLoading(false);  // Change loading state to false when assets are ready
            return 100;
          }
          return prevProgress + 2;  // Increase progress by 2% every interval
        });
      }, 100);  // Update progress every 100ms (simulating loading)
    };

    loadAssets();
  }, []);

  return (
    <>
      {loading ? (
        <LoadingScreen progress={progress} />  // Pass progress to the LoadingScreen
      ) : (
        <>
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              height: "100vh",
              width: "100vw",
              display: "block",
              zIndex: 0,
            }}
            className="BGINICIO"
          ></div>
          <div className="navfooter">
            <Header/>
            <Footer/>
          </div>
          <Fullpage />
        </>
      )}
    </>
  );
};

export default App;
