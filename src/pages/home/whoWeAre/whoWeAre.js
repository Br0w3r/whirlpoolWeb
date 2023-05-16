import React from "react";
import './whoWeAre.scss';
import { RxDividerHorizontal } from 'react-icons/rx';

function whoWeAre() {
    var image1 = "https://i.postimg.cc/6qXSd6F6/estufa.jpg";
    var image2 = "https://i.postimg.cc/gJhkDPHt/ezgif-com-webp-to-jpg.jpg";
    return (
        <div className="who-row">
            <div className="who-column">
                <p className="who-title-text">Servicio Técnico en Reparación de Linea Blanca</p>
                <div className="who-subtitle-text">
                    <h1><span>Whirl</span><span>Pool</span></h1>
                </div>
                <RxDividerHorizontal className="icon-who" />
                <div className="who-info">
                    <p>Sabemos lo importante que es proteger tus equipos, es por eso que nuestro Centro de Servicio Whirlpool, sólo contamos con técnicos altamente capacitados para dejarlos en perfectas condiciones, brindando Garantía de satisfacción total por escrito, hasta por un año, dependiendo de la reparación, porque tenemos la certeza de que sólo trabajamos con refacciones nuevas y originales.</p>
                </div>
            </div>

            <div className="who-images">
                <div className="images-right" style={{ marginRight: "40px" }}>
                    <div className="card" style={{ background: `url('${image1}')` }}>
                        <div className="img">
                            <span style={{ background: `url('${image1}')` }} />
                        </div>
                        <div className="content">
                            <h2>Refacciónes</h2>
                            <h2>Originales</h2>
                            <h4>Todas nuestras refacciónes son completamente originales, garantizamos un perfecto trabajo y su correcto funcionaminto del mismo.</h4>
                        </div>
                    </div>
                </div>

                <div className="images-right" style={{ marginLeft: "40px" }}>
                    <div className="card" style={{ background: `url('${image2}')` }}>
                        <div className="img">
                            <span style={{ background: `url('${image2}')` }} />
                        </div>
                        <div className="content">
                            <h2>Especialistas en:</h2>
                            <h4>Reparación, Servicio de Mantenimiento e Instalación de lavadoras, refrigeradores, secadoras, centros de lavado, lavavajillas, estufas y hornos de gas.</h4>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default whoWeAre;