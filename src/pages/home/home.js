import React from "react";
import './home.scss';
import Carrousel from './carrousel/carrousel.js';

function Home() {
    return (
        <div className="principal">
            <div className="carrousel">
                <Carrousel />
            </div>
            <p>Hola</p>
        </div>
    );
}

export default Home;