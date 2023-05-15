import React from "react";
import './home.scss';
import Carrousel from './carrousel/carrousel.js';
import BarPublish from "./barPublish/barPublish";
import WhoWeAre from "./whoWeAre/whoWeAre";

function Home() {
    return (
        <div className="principal">
            <div className="carrousel">
                <Carrousel />
            </div>

            <div className="barPublish">
                <BarPublish />
            </div>

            <div className="whoWeAre">
                <WhoWeAre />
            </div>
        </div>
    );
}

export default Home;