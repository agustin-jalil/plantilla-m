import React from 'react';
import Section from "../common/section";

const FooterSection = () => {
    return (
        <Section>
            <div className="footerSection__container">
                <h1 className="footerSection__h1">Segui en Contacto</h1>
                <table className="footerSection__table">
                    <thead>
                        <tr className="footerSection__table-row">
                            <th className="footerSection__table-title">Acerca de</th>
                            <th className="footerSection__table-title">Links</th>
                            <th className="footerSection__table-title">Redes</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="footerSection__table-row">
                            <td className="footerSection__table-cell">
                                <a href="#" className="footerSection__table-link">Link 1</a>
                                <a href="#" className="footerSection__table-link">Link 2</a>
                                <a href="#" className="footerSection__table-link">Link 3</a>
                                <a href="#" className="footerSection__table-link">Link 4</a>
                                <a href="#" className="footerSection__table-link">Link 5</a>
                            </td>
                            <td className="footerSection__table-cell">
                                <a href="#" className="footerSection__table-link">Link 1</a>
                                <a href="#" className="footerSection__table-link">Link 2</a>
                                <a href="#" className="footerSection__table-link">Link 3</a>
                                <a href="#" className="footerSection__table-link">Link 4</a>
                                <a href="#" className="footerSection__table-link">Link 5</a>
                            </td>
                            <td className="footerSection__table-cell">
                                <a href="#" className="footerSection__table-link">Link 1</a>
                                <a href="#" className="footerSection__table-link">Link 2</a>
                                <a href="#" className="footerSection__table-link">Link 3</a>
                                <a href="#" className="footerSection__table-link">Link 4</a>
                                <a href="#" className="footerSection__table-link">Link 5</a>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div className="footerSection__logo-container">
                    <img src="/test/logo.svg" alt="Logo" className="footerSection__logo" />
                    <h2 className="footerSection__company-name">Nodo Tecnologico</h2>
                </div>
                <div className="footerSection__description">
                    <q className="footerSection__description-q">Por una Catamarca más tecnológica</q>
                </div>
                <div className="footerSection__copyright">
                    <small className="footerSection__copyright-small">© Copyright 2024, All Rights Reserved by Aura UI</small>
                </div>
            </div>
        </Section>
    );
}

export default FooterSection;
