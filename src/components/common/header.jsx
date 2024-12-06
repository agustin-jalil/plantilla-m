const Header = () => {
    // Correct the typo in "length" and fix object structure
    const listaItems = Array.from({ length: 1 }, (_, index) => {
        return { logo: "/img/mapa.svg" }; // Proper object syntax
    });

    return (
        <header>
            <nav>
                <img src="/img/logo-sfvc.svg" alt="" width={100}/>
                {listaItems.map((item, index) => { // Use "item" instead of "items"
                    return (
                        <a href="" key={index}>
                            <img src={item.logo} alt="Map logo" width={24} />
                        </a>
                    );
                })}
            </nav>
        </header>
    );
}

export default Header;
