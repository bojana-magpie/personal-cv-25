import React from "react";
import "./_header.scss";
import Logo from "./Logo/Logo";
import Menu from "./Menu/Menu";
import Social from "./Social/Social";

import github from "../../assets/gith.svg";
import linkedin from "../../assets/linkedin.svg";

const Header = () => {
    return (
        <header className="header">
            <Logo/>
            <Menu items={
                [
                    { title: "Home",  url: "#home" },
                    { title: "Tech Stack",  url: "#stack" },
                    { title: "Projects",  url: "#projects" },
                    { title: "Contact",  url: "#contact" },
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
        </header>
    )
}

export default Header;