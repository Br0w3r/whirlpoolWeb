import React from "react";
import '../../styleSheets/header/header.css';
import { FaWhatsapp } from 'react-icons/fa';
import { BsFillPhoneVibrateFill } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md'
import { RxDividerVertical } from 'react-icons/rx';


function Header() {
  return (
    //#region BackGround Header
    <div className="header-class">

      <img
        className="logo-page"
        src={require('../../images/logo-whir.png')}
        alt="Logo"
      />

      {/*Container Contacts*/}
      <ContainerContacst />
    </div>
  );
}

function ContainerContacst() {
  return (
    <div className="header-contacts">

      {/* Create Row */}
      <div className="container-row">

        {/* Create Column */}
        <div className="container-column" style={{ marginRight: 15, marginLeft: 25 }}>
          <div className="container-column">
            <FaWhatsapp style={{ marginTop: 25, color: "#f7b100" }} size="45px" />
          </div>
          <div className="container-column-width">
            <div style={{ marginTop: 22 }}>
              <p className="title-text">WhatsApp</p>
              <p className="subtitle-text">56-2418-1610</p>
            </div>
          </div>
          <div className="container-column">
            <RxDividerVertical style={{ marginTop: 25, color: "#424242" }} size="45px" />
          </div>
        </div>
        {/* End Column */}

        <div className="container-column" style={{ marginRight: 15 }}>
          <div className="container-column">
            <BsFillPhoneVibrateFill style={{ marginTop: 25, color: "#f7b100" }} size="45px" />
          </div>
          <div className="container-column-width">
            <div style={{ marginTop: 22 }}>
              <p className="title-text">Atención a Clientes</p>
              <p className="subtitle-text">56-2418-1610</p>
            </div>
          </div>
          <div className="container-column">
            <RxDividerVertical style={{ marginTop: 25, color: "#424242" }} size="45px" />
          </div>
        </div>

        <div className="container-column">
          <div className="container-column">
            <MdEmail style={{ marginTop: 25, color: "#f7b100" }} size="45px" />
          </div>
          <div className="container-column-width">
            <div style={{ marginTop: 22 }}>
              <p className="title-text">Email</p>
              <p className="subtitle-text">gamerbrower@gmail.com</p>
            </div>
          </div>
          <div className="container-column">
            <RxDividerVertical style={{ marginTop: 25, color: "#424242" }} size="45px" />
          </div>
        </div>

      </div>
      {/* End Row */}
    </div>
  );
}

export default Header;