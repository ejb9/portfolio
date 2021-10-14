import React from "react";
import Header from "../components/layout/Header.js";
import Footer from "../components/layout/Footer.js";
import Banner from "../components/sections/Banner.js";

const AboutUs = () => {
    return (
        <>
           <Header />

            <Banner>
                About Us!
            </Banner>

            This is a page about myself. All about my life and what I like.

            <Footer />
        </>
    )
}

export default AboutUs