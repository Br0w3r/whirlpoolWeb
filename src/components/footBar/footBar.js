import React from "react";
import './footBar.css';
import { FaWhatsapp } from 'react-icons/fa';
import { BsFillPhoneVibrateFill } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
import { FaLaptopCode } from 'react-icons/fa';

function FootBar() {
    return (
        <div className="foot-row">
            <div className="foot-column">
                <p className="foot-title-text">Empresa</p>
                <p className="foot-subtitle-text">Centro de servicio técnico especializado en reparación de linea blanca Whirlpool.</p>
                <img
                    className="logo-page"
                    src={require('../../images/logo-whir.png')}
                    alt="Logo"
                />
            </div>

            <div className="foot-column">
                <p className="foot-title-text">Zonas de Servicios</p>
                <p className="foot-subtitle-text">Nezahualcoyotl</p>
                <p className="foot-subtitle-text">Cuautitlán</p>
                <p className="foot-subtitle-text">Tultitlán</p>
                <p className="foot-subtitle-text">Tlalnepantla</p>
                <p className="foot-subtitle-text">Huixquilucan</p>
                <p className="foot-subtitle-text">Naucalpan</p>
                <p className="foot-subtitle-text">Atizapán</p>
                <p className="foot-subtitle-text">Ecatepec</p>
                <p className="foot-subtitle-text">Magdalena Contreras</p>
                <p className="foot-subtitle-text">Milpa Alta</p>
                <p className="foot-subtitle-text">Tláhuac</p>
            </div>

            <div className="foot-column">
                <p className="foot-title-text">Zonas de Servicios</p>
                <p className="foot-subtitle-text">Miguel Hidalgo</p>
                <p className="foot-subtitle-text">Azcapotzalco</p>
                <p className="foot-subtitle-text">Benito Juaréz</p>
                <p className="foot-subtitle-text">Cuajimalpa</p>
                <p className="foot-subtitle-text">Alvaro Obregón</p>
                <p className="foot-subtitle-text">Cuauhtémoc</p>
                <p className="foot-subtitle-text">Gustavo A Madero</p>
                <p className="foot-subtitle-text">Iztacalco</p>
                <p className="foot-subtitle-text">Coyoacan</p>
                <p className="foot-subtitle-text">Xochimilco</p>
                <p className="foot-subtitle-text">Tlalpan</p>
                <p className="foot-subtitle-text">Venustiano Carranza</p>
            </div>


            <div className="foot-column">
                <p className="foot-title-text">Contacto</p>
                <a href="https://wa.me/+525624181610?text=Buenas+tardes+me+interesa+una+cotización+de+un+sito+web." className="link-decoration">
                    <div className="foot-contact-row">
                        <FaWhatsapp className="icon-foot" />
                        <p className="foot-subtitle-text">Cel. 56-2418-1610</p>
                    </div>
                </a>
                <a href="tel:+525624181610" className="link-decoration">
                    <div className="foot-contact-row">
                        <BsFillPhoneVibrateFill className="icon-foot" />
                        <p className="foot-subtitle-text">Tel. 56-2418-1610</p>
                    </div>
                </a>

                <a href="mailto:gamerbrower@gmail.com?subject=Servicio Nuevo
                            &body=Buenas tardes me interesa una cotización de un servicio de reparación." className="link-decoration">
                    <div className="foot-contact-row">
                        <MdEmail className="icon-foot" />
                        <p className="foot-subtitle-text">gamerbrower@gmail.com</p>
                    </div>
                </a>


                <div className="developer">
                    <div className="foot-column" style={{ alignItems: "center" }}>
                        <p className="foot-title-text">Desarrollador</p>
                        <a href="https://wa.me/+525624181610?text=Buenas+tardes+me+interesa+una+cotización+de+un+sito+web." className="link-decoration">
                            <div className="foot-contact-row">
                                <FaLaptopCode className="icon-foot" />
                                <p className="foot-subtitle-text">Eishon - Corp</p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FootBar;