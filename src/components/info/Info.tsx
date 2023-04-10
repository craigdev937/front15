import React from "react";
import { InfoCard } from "./InfoCard";
import { dBase } from "../../data/data";

export const Info = () => {
    return (
        <React.Fragment>
            {dBase.map((info) => (
                <InfoCard 
                    key={info.id} 
                    info={info} 
                />
            ))}
        </React.Fragment>
    );
};



