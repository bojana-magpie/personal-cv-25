import React from "react";
import "./_footer.scss";
import Logo from "../Header/Logo/Logo";
import Menu from "../Header/Menu/Menu";
import Social from "../Header/Social/Social";

import github from "../../assets/gith.svg";
import linkedin from "../../assets/linkedin.svg";

const Footer = () => {
    return (
        <>
            <footer className="header footer__top">
                <Logo/>
                <Menu items={
                    [
                        { title: "+91 12345 09876",  url: "tel:+91 12345 09876" },
                        { title: "info@example.com",  url: "mailto:info@example.com" },
                    ]
                }/>
                <Social
                    items={
                        [
                            { url: "https://github.com/rpritr",  src: github},
                            { url: "#",  src: linkedin},

                        ]
                    }
                />
            </footer>
            <div className="footer__bottom">
                <Menu items={
                    [
                        { title: "Home",  url: "#home" },
                        { title: "About",  url: "#about" },
                        { title: "Tech Stack",  url: "#stack" },
                        { title: "Projects",  url: "#projects" },
                        { title: "Contact",  url: "#contact" },
                    ]
                }/>
                <p>Designed and built by <span className="gradient">Pavan MG</span> with <span className="gradient">Love</span> & <span className="gradient">Coffee</span></p>
            </div>
        </>
    )
}

export default Footer;