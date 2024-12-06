const FlexHome = () => {
    const flexHome = Array.from({ length: 3 }, (_, index) => {
      return {
        titulo: `3200${index + 1}`,
        subtitulo: `Generados ${index + 1}`,
        p: `alguna descripcion corta ${index + 1}`,
        small: `ver mas ${index + 1}`,
      };
    });
  
    return (
      <div className="flex-home">
        {flexHome.map((cards, index) => {
          return (
            <div className="flex-home__content" key={index}>
              <h3 className="flex-home__title">{cards.titulo}</h3>
              <h2 className="flex-home__subtitle">{cards.subtitulo}</h2>
              <p className="flex-home__description">{cards.p}</p>
              <small className="flex-home__small">{cards.small}</small>
            </div>
          );
        })}
      </div>
    );
  };
  
  export default FlexHome;
  