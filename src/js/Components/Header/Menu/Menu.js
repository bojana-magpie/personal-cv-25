import React, {useState} from "react";
import "./_menu.scss";
import menu from "../../../assets/menu.svg";

const Menu = (props) => {
    const [mobile,setMobile] = useState(true);

    const toggleMobile = (e) => {setMobile(!mobile);}

    return (
        <nav className="header__menu">
            <img onClick={toggleMobile} className="header__menu--mobile-toggle" src={menu} alt="mobile menu"/>
            <ul className="header__menu--nav-list" style={{visibility: mobile ? "visible" : "hidden" }}>
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