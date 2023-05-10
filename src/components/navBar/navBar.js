import React from "react";
import { NavLink } from "react-router-dom";
import '../../styleSheets/navBar/navBar.css';

function SingleNavBar() {
    return (
        <div className="navBar-container">

            <li className="navBar-margin">
                <NavLink
                    className="nav-link"
                    to="/"
                >
                    Inicio
                </NavLink>
            </li>

            <li className="navBar-margin">
                <NavLink
                    className="nav-link"
                    to="/services"
                >
                    Servicios
                </NavLink>
            </li>

            <li className="navBar-margin">
                <NavLink
                    className="nav-link"
                    to="/contact"
                >
                    Contacto
                </NavLink>
            </li>

        </div>
    );
}


export default SingleNavBar;