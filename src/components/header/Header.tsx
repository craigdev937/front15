import React from "react";
import "./Header.css";
import Logo from "@public/logo.svg";
import Mockup from "@public/illustration-mockups.svg";

export const Header = () => {
    return (
        <React.Fragment>
            <header>
                <section className="header__container">
                    <aside className="header__top">
                        <img
                            className="header__logo"
                            alt="Huddle Logo"  
                            src={Logo}
                        />
                        <a 
                            href="#" 
                            className="header__button"
                            >Try It Free
                        </a>
                    </aside>
                    <aside className="header__hero">
                        <section className="header__content">
                            <h1>Build The Community Your Fans Will Love</h1>
                            <p>
                                Huddle re-imagines the way we 
                                build communities. You have a voice, 
                                but so does your audience. Create 
                                connections with your users as you 
                                engage in genuine discussion. 
                            </p>
                            <a href="#">Get Started For Free</a>
                        </section>
                    </aside>
                    <img src={Mockup} alt="Mockup" />
                </section>
            </header>
        </React.Fragment>
    );
};



