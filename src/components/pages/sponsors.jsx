import Section from "../common/section";

const Sponsors = () => {
    return ( 
        <Section>
            <div className="sponsors">
                <div className="sponsors__header">
                    <h1 className="sponsors__titleh1">Trusted by businesses of all scales</h1>
                    <h2 className="sponsors__title">Join over 200+ tech companies already using Auraui</h2>
                </div>

                <div className="sponsors__logos">
                    <img className="sponsors__logo" src="/test/logo.svg" alt="Sponsor 1" />
                    <img className="sponsors__logo" src="/test/logo.svg" alt="Sponsor 2" />
                    <img className="sponsors__logo" src="/test/logo.svg" alt="Sponsor 3" />
                    <img className="sponsors__logo" src="/test/logo.svg" alt="Sponsor 4" />
                    <img className="sponsors__logo" src="/test/logo.svg" alt="Sponsor 5" />
                    <img className="sponsors__logo" src="/test/logo.svg" alt="Sponsor 1" />
                    <img className="sponsors__logo" src="/test/logo.svg" alt="Sponsor 2" />
                    <img className="sponsors__logo" src="/test/logo.svg" alt="Sponsor 3" />
                    <img className="sponsors__logo" src="/test/logo.svg" alt="Sponsor 4" />
                    <img className="sponsors__logo" src="/test/logo.svg" alt="Sponsor 5" />          
                    <img className="sponsors__logo" src="/test/logo.svg" alt="Sponsor 1" />
                    <img className="sponsors__logo" src="/test/logo.svg" alt="Sponsor 2" />
                    
                </div>

                <a href="" className="sponsors__a">
                    <small className="sponsors__a-text">Ver más</small> 
                    <img className="sponsors__a-icon" src="/test/link.svg" alt="Ver más" />
                </a>
            </div>
        </Section>
    );
}

export default Sponsors;
