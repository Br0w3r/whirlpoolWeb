import React from "react";
import './whoWeAre.scss';
import { RxDividerHorizontal } from 'react-icons/rx';

function whoWeAre() {
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
            <div className="images-right">
                <div className="card">
                    <div className="img">
                        <span />
                        <span />
                        <span />
                        <span />
                    </div>
                    <div className="content">
                        <h2>MacBook Air</h2>
                        <h2>Lightness</h2>
                        <h4>The most loved Mac is about to make you fall in love all over again. Available in silver, space gray, and gold, the new thinner and lighter MacBook Air features a brilliant Retina display, Touch ID, the latest-generation keyboard, and a Force Touch trackpad</h4>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default whoWeAre;