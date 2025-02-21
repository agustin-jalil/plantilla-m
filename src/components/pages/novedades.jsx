import NovedadesItem from "../common/novedadesItem";
import Section from "../common/section";

const Novedades = () => {
  return ( 
    <Section className="novedades">
      <div className="novedades__grid">
        <NovedadesItem/>
        <NovedadesItem/>
        <NovedadesItem/>
        <NovedadesItem/>
        <NovedadesItem/>
        <NovedadesItem/>
        
      </div>
    </Section>
  );
}

export default Novedades;
