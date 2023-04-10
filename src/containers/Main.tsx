import React from "react";
import { Header } from "../components/header/Header";
import { Info } from "../components/info/Info";
import { Footer } from "../components/footer/Footer";

export const Main = () => {
    return (
        <React.Fragment>
            <Header />
            <Info />
            <Footer />
        </React.Fragment>
    );
};



