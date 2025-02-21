const NovedadesItem = () => {
    return ( 
        <div className="novedades__grid-item">
            <span className="novedades__grid-item-image">
                <img src="/test/novedades.svg" alt="Novedades" /> 
            </span>
            <h2 className="novedades__grid-item-title">Título de Novedad Ficticia</h2>
            <p className="novedades__grid-item-text">
                Este es un texto de ejemplo para mostrar cómo se ve una novedad en este componente. Puedes
                agregar más contenido según lo necesites.
            </p>
            <a href="" className="novedades__grid-item-link">
                <small className="novedades__grid-item-link-text">Ver más</small> 
                <img className="novedades__grid-item-link-icon" src="/test/link.svg" alt="Ver más" />
            </a>
        </div>
    );
}

export default NovedadesItem;
