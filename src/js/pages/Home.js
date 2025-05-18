import React from "react";
import Header from "../Components/Header/Header";
import Banner from "../Components/Banner/Banner";
import Section from "../Components/Section/Section";
import Footer from "../Components/Footer/Footer";

const Home = () => {
    return (
        <>
            <Header/>
            <Banner/>
            <Section class="tech" heading="My Tech Stack" subtitle="Technologies I've been working with recently">
                <p>Tech</p>
            </Section>
            <Section class="projects" heading="Projects" subtitle="Things I've built so far">
                <p>Tech</p>
            </Section>
            <Footer/>
        </>
    )
}

export default Home;