import Section from "../common/section";
import FlexHome from "../reusables/flex";

const Home = () => {
    return (
        <Section>
            <div style={{textAlign:"center", padding:"10px 0px 10px 0px",display:"flex", justifyContent:"space-around", flexDirection:"column", height:"100%"}}>
                <h1 style={{textAlign:"center", fontSize:"50px"}}>Nodo Tecnologico SFVC</h1>
                <h2 style={{fontSize:"40px"}}>Transformá sueños en realidades extraordinarias aprendiendo nuevas tecnologias</h2>
                <FlexHome/>
            </div>
        </Section>
    )
}
export default Home;