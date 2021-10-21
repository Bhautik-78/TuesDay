import React from 'react';
import Page from 'elements/Page';
import imgHomeBackground from 'assets/images/page-header-bg.png';
import InvolvedSection from "components/lnvolvedSection";
import StatsSection from "components/statsSection";
import AboutUs from "components/aboutUs";
import OurMission from "components/ourMission";
import "./index.scss"

const About = () => {
    return (
        <Page className="home">
            {/* HEADING SECTION */}
            <div
                className="container-fluid heading-section d-flex flex-column justify-content-center align-items-start">
                <img className="heading-bg" src={imgHomeBackground} alt="heading-background"/>
                <div className="title ft-xx-huge">About Us</div>
                <div className="sub-title fs-14 ft-small color-gray-2">
                    Help today because tomorrow you may be the one who<br/>
                    needs more helping!
                </div>
                <div className="sub-title fs-14 textLeft ft-small learn-more color-gray-2 p-0 ">Home / About us</div>
            </div>

            {/*about us*/}
            <AboutUs/>

            {/* INVOLVED SECTION */}
            <InvolvedSection/>

            {/*Our Mission*/}
            <OurMission/>

            {/* STATS SECTION */}
            <StatsSection/>
        </Page>
    )
};

export default About;
