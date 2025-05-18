import React from "react";
import "./_menu.scss";

const Menu = (props) => {
    return (
        <nav className="header__menu">
            <ul className="header__menu--nav-list">
                {props.items.map((item, i) => (
                    <li key={i} className="nav-list--item">
                        <a href={item.url}>{item.title}</a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Menu;