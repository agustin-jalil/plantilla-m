import React, { useState } from 'react';
import Section from "../common/section";

const Novedades = () => {
  // Create an array of 6 items for the slider
  const lista = Array.from({ length: 6 }, (_, index) => {
    return {
      titulo: `novedad ${index + 1}`,
      p: `parrafo de la noticia ${index + 1}`,
    };
  });

  // State for the active slide index
  const [active, setActive] = useState(0);

  // Function to show the current slide
  const loadShow = () => {
    return lista.map((item, index) => {
      // Determine the styles based on the current active index
      let transform = 'translateX(0) scale(1)';
      let zIndex = 0;
      let opacity = 0;
      let filter = 'none';

      if (index === active) {
        zIndex = 1;
        opacity = 1;
      } else if (index === active - 1) {
        transform = 'translateX(-250px) scale(0.8)';
        filter = 'blur(1px)';
        opacity = 0.1;
      } else if (index === active + 1) {
        transform = 'translateX(250px) scale(0.8)';
        filter = 'blur(1px)';
        opacity = 0.1;
      }

      return (
        <div
          key={index}
          className="item"
          style={{
            transform,
            zIndex,
            opacity,
            filter,
            transition: 'transform 0.5s, opacity 0.5s, filter 0.5s',
          }}
        >
          <h1>{item.titulo}</h1>
          <p>{item.p}</p>
        </div>
      );
    });
  };

  // Handle next and previous button clicks
  const handleNext = () => {
    if (active + 1 < lista.length) {
      setActive(active + 1);
    }
  };

  const handlePrev = () => {
    if (active - 1 >= 0) {
      setActive(active - 1);
    }
  };

  return (
    <Section showVideo={false}>
      <div className="slider">
        {loadShow()}
      </div>
      <button id="prev" onClick={handlePrev}><img src="/img/arrowLeft.svg" alt="" /></button>
      <button id="next" onClick={handleNext}><img src="/img/arrowRight.svg" alt="" /></button>
    </Section>
  );
};

export default Novedades;
