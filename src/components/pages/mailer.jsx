import React from 'react';
import Section from "../common/section";

const Mailer = () => {
    return ( 
        <Section showGaleria={true} className="mailer">
            <div className="mailer__content">
                <div className="mailer__header">
                    <h1 className="mailer__title">Actualizate con las novedades</h1>
                    <p className="mailer__description">ejemplojqodwijqodiwq</p>
                </div>
                <div className="mailer__form">
                    <label className="mailer__label" htmlFor="email">
                        <small className="mailer__label-text">Subscribite ingresando tu mail</small>
                    </label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        className="mailer__input"
                        placeholder="Ingrese su correo electrónico"
                    />
                    <button className="mailer__button">Enviar</button>
                </div>
            </div>
        </Section>
    );
}

export default Mailer;
