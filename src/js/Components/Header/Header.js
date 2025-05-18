import React from "react";
import "./_header.scss";
import Logo from "./Logo/Logo";
import Menu from "./Menu/Menu";

const Header = () => {
    return (
        <header className="header">
            <Logo/>
            <Menu items={
                [
                    { title: "Home",  url: "#home" },
                    { title: "About",  url: "#about" },
                    { title: "Tech Stack",  url: "#stack" },
                    { title: "Projects",  url: "#projects" },
                    { title: "Contact",  url: "#contact" },
                ]
            }/>
        </header>
    )
}

export default Header;