import React from "react";
import "./InfoCard.css";
import { DBASE } from "../../models/Interface";

type CAR = {
    info: DBASE
};

export const InfoCard = ({ info }: CAR) => {
    return (
        <section>
            <div className="section__content">
                <h3>{info.title}</h3>
                <p>{info.paragraph}</p>
            </div>
            <img
                alt={info.title}  
                src={info.imageSVG} 
            />
        </section>
    );
};


