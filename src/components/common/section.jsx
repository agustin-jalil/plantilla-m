import React from 'react';
import Header from './header';
import Footer from './footer';

const Section = ({ children, showVideo = true }) => {
  return (
    <>  
        <div className="section">
          {showVideo && (
            <div className="section-video-background">
              <video autoPlay muted loop id="section-video-background__background-video">
                <source src="/Nodo.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          )}
          <div className='section-contenedor'>
            <Header/>
              <main>
                {children}
              </main>
            <Footer/>
          </div>
        </div>
    </>
  );
};

export default Section;
