const Footer = () => {
    // Correct the typo in "length" and fix object structure
    const listaItems = Array.from({ length: 6 }, (_, index) => {
        return { logo: "/img/mapa.svg" }; // Proper object syntax
    });

    return (
        <footer>
            <nav>
                {listaItems.map((item, index) => { // Use "item" instead of "items"
                    return (
                        <a href="" key={index}>
                            <img src={item.logo} alt="Map logo" width={24} />
                        </a>
                    );
                })}
            </nav>
        </footer>
    );
}

export default Footer;
