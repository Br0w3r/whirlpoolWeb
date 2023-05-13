import React from "react";
import { NavLink } from "react-router-dom";
import './navBar.scss';

function SingleNavBar() {
    return (
        <nav>
            <ul class="menu">
                <li><a href="#!">Home</a></li>
                <li><a href="#!">About</a></li>
                <li><a href="#!">Contact</a></li>
                <li><a href="#!">Faq</a></li>
            </ul>
        </nav>
    );
}


export default SingleNavBar;