import React from "react";
import { NavLink } from "react-router-dom";
import './navBar.css';

function SingleNavBar() {
    return (
        <div className="navBar-container">

            <div className="navBar-options">
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
                        Solicitar Visita Técnica
                    </NavLink>
                </li>

            </div>

        </div>
    );
}


export default SingleNavBar;