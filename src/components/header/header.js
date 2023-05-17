import React from "react";
import './header.css';
import { FaWhatsapp } from 'react-icons/fa';
import { BsFillPhoneVibrateFill } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md'
import { RxDividerVertical } from 'react-icons/rx';


function SingleHeader() {
  return (
    //#region BackGround Header
    <div className="header-class">

      <div className="header-logo">
        <img
          className="logo-page"
          src={require('../../images/logo-whir.png')}
          alt="Logo"
        />
      </div>


      {/*Container Contacts*/}
      <div className="header-contacts">
        <ContainerContacst />
      </div>

    </div>
  );
}

function ContainerContacst() {
  return (
    <div className="container-row">

      {/* Create Column */}
      <a href="https://wa.me/+525624181610?text=Buenas+tardes+me+interesa+una+cotización+de+un+sito+web." className="link-decoration">
        <div className="container-column">
          <div className="container-column">
            <FaWhatsapp className="icon-class" />
          </div>
          <div className="container-column-width">
            <div>
              <p className="title-text">WhatsApp</p>
              <p className="subtitle-text">56-2418-1610</p>
            </div>
          </div>
          <div className="container-column">
            <RxDividerVertical className="icon-divider-class" />
          </div>
        </div>
      </a>
      {/* End Column */}

      <a href="tel:+525624181610" className="link-decoration">
        <div className="container-column">
          <div className="container-column">
            <BsFillPhoneVibrateFill className="icon-class" />
          </div>
          <div className="container-column-width">
            <div>
              <p className="title-text">Atención a Clientes</p>
              <p className="subtitle-text">56-2418-1610</p>
            </div>
          </div>
          <div className="container-column">
            <RxDividerVertical className="icon-divider-class" />
          </div>
        </div>
      </a>

      <a href="mailto:gamerbrower@gmail.com?subject=Servicio Nuevo
               &body=Buenas tardes me interesa una cotización de un servicio de reparación." className="link-decoration">
        <div className="container-column">
          <div className="container-column">
            <MdEmail className="icon-class" />
          </div>
          <div className="container-column-width">
            <div>
              <p className="title-text">Email</p>
              <p className="subtitle-text">gamerbrower@gmail.com</p>
            </div>
          </div>
          <div className="container-column">
            <RxDividerVertical className="icon-divider-class" />
          </div>
        </div>
      </a>

    </div>
  );
}

export default SingleHeader;