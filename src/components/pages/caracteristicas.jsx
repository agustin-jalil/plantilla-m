import React from 'react';
import Section from '../common/section';

const Caracteristicas = () => {
  return (
    <Section>
        <div className="caracteristicas-container">
        <div className="caracteristicas-column">
            <img src="/test/satelite.svg" alt="" />
        </div>
        <div className="caracteristicas-column">
          <CaracteristicasCard/>
          <CaracteristicasCard/>
          <CaracteristicasCard/>
          <CaracteristicasCard/>
          <CaracteristicasCard/>
          <CaracteristicasCard/>
          <CaracteristicasCard/>
          <CaracteristicasCard/>

        </div>
        <div className="caracteristicas-column">
            <h1>Columna 3</h1>
            <p>Contenido de la columna 3</p>
        </div>
        </div>
    </Section>
  );
};

const CaracteristicasCard = () => {
  return(
    <div className="caracteristicas-column-card">
      <img className="caracteristicas-column-card-img" src="/test/robot.svg" alt="" />
      <span className="caracteristicas-column-card-span">
        <h3 className="caracteristicas-column-card-h3">Contenido de la columna 3Contenido de la columna 3 Contenido de la columna 3Contenido de la columna 3Contenido de la columna 3 Contenido de la columna 3 Contenido de la columna 3 Contenido de la columna 3</h3>
      </span>
    </div>
  );
}

export default Caracteristicas;
