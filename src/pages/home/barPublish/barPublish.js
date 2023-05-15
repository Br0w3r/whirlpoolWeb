import React from "react";
import './barPublish.css';
import { FaWhatsapp } from 'react-icons/fa';
import { BsFillPhoneFill } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md'

function BarPublish() {
    return (
        <div className="container-row-barPublish">

            {/* Create Column */}

            <div className="container-column-barPublish">
                <div className="container-column-barPublish">
                    <BsFillPhoneFill className="icon-class-barPublish" />
                </div>
                <div className="container-column-width-barPublish">
                    <div style={{ marginTop: 22 }}>
                        <p className="subtitle-bar-text">56-2418-1610</p>
                        <p className="title-bar-text">L. a S. de 9:00am - 18:00pm</p>
                    </div>
                </div>
            </div>
            {/* End Column */}

            <div className="container-column-barPublish">
                <div className="container-column-barPublish">
                    <MdEmail className="icon-class-barPublish" />
                </div>
                <div className="container-column-width-barPublish">
                    <div style={{ marginTop: 22 }}>
                        <p className="subtitle-bar-text">gamerbrower@gmail.com</p>
                        <p className="title-bar-text">Escribanos</p>
                    </div>
                </div>
            </div>

            <div className="container-column-barPublish">
                <div className="container-column-barPublish">
                    <FaWhatsapp className="icon-class-barPublish" />
                </div>
                <div className="container-column-width-barPublish">
                    <div style={{ marginTop: 22 }}>
                        <p className="subtitle-bar-text">56-2418-1610</p>
                        <p className="title-bar-text">Envianos un WhatsApp las 24 hrs.</p>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default BarPublish;