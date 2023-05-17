import React from "react";
import './barPublish.css';
import { FaWhatsapp } from 'react-icons/fa';
import { BsFillPhoneFill } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md'

function BarPublish() {
    return (
        <div className="container-row-barPublish">

            {/* Create Column */}
            <a href="tel:+525624181610" className="link-decoration">
                <div className="container-column-barPublish">
                    <div className="container-column-barPublish">
                        <BsFillPhoneFill className="icon-class-barPublish" />
                    </div>
                    <div className="container-column-width-barPublish">
                        <div>
                            <p className="subtitle-bar-text">56-2418-1610</p>
                            <p className="title-bar-text">Lun. a Sab. de 09:00 am - 06:00 pm</p>
                        </div>
                    </div>
                </div>
            </a>
            {/* End Column */}

            <a href="mailto:gamerbrower@gmail.com?subject=Servicio Nuevo
                            &body=Buenas tardes me interesa una cotización de un servicio de reparación." className="link-decoration">
                <div className="container-column-barPublish">
                    <div className="container-column-barPublish">
                        <MdEmail className="icon-class-barPublish" />
                    </div>
                    <div className="container-column-width-barPublish">
                        <div>
                            <p className="subtitle-bar-text">gamerbrower@gmail.com</p>
                            <p className="title-bar-text">Contáctanos vía correo.</p>
                        </div>
                    </div>
                </div>
            </a>

            <a href="https://wa.me/+525624181610?text=Buenas+tardes+me+interesa+una+cotización+de+un+sito+web." className="link-decoration">
                <div className="container-column-barPublish">
                    <div className="container-column-barPublish">
                        <FaWhatsapp className="icon-class-barPublish" />
                    </div>
                    <div className="container-column-width-barPublish">
                        <div className="text-decoration">
                            <p className="subtitle-bar-text">56-2418-1610</p>
                            <p className="title-bar-text">Envíanos un whatsApp las 24 hrs.</p>
                        </div>
                    </div>
                </div>
            </a>

        </div>
    );
}

export default BarPublish;