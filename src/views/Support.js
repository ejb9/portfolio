import React from "react";
import Header from "../components/layout/Header.js";
import Footer from "../components/layout/Footer.js";
import Banner from "../components/sections/Banner.js";

const Support = () => {
    return (
        <>
            <Header />

            <Banner>
                SUPPORT!
            </Banner>
            
            If you need support for this page, please contact someone@google.com.
            <Footer />
        </>
    );
};

export default Support;