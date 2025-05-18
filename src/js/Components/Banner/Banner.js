import React from "react";
import "./_banner.scss";

import profile from "../../assets/profile.png";

const Banner = () => {
    return (
        <section className="section banner">
            <div className="banner__intro">
                <h1>
                    Hi 👋,
                    My name is<br/>
                    <span className="gradient">Pavan MG</span><br/>
                    I build things for web
                </h1>
            </div>
            <div className="banner__image">
                <img src={profile}  alt="profile" />
            </div>
        </section>
    )
}

export default Banner;