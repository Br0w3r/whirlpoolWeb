import React from "react";
import './home.scss';
import Carrousel from './carrousel/carrousel.js';

function Home() {
    return (
        <div className="principal">
            <div className="carrousel">
                <Carrousel />
            </div>
            <div className="carrousel">
                <Carrousel />
            </div>
            <div className="carrousel">
                <Carrousel />
            </div>
            <div className="carrousel">
                <Carrousel />
            </div>
        </div>
    );
}

export default Home;