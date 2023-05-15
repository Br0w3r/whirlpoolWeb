import React from "react";
import { NavLink } from "react-router-dom";
import './navBar.scss';

function SingleNavBar() {
    return (
        <nav className="style-nav">
            <ul className="menu">
                <li>
                    <NavLink
                        className="nav-link"
                        to="/">
                        Inicio
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        className="nav-link"
                        to="/services">
                        Servicios
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        className="nav-link"
                        to="/contact">
                        Contacto
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default SingleNavBar;