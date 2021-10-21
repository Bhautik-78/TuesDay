import React from 'react';
import imgHomeBackground from "assets/images/page-header-bg.png";
import Page from "elements/Page";
import CustomMap from "components/CustomMap";
import "./index.scss"
import ContactForm from "../../components/contactForm";

const ContactUs = () => {
    return (
        <Page className="home">
            {/* HEADING SECTION */}
            <div
                className="container-fluid heading-section d-flex flex-column justify-content-center align-items-start">
                <img className="heading-bg" src={imgHomeBackground} alt="heading-background"/>
                <div className="title ft-xx-huge">Contact us</div>
                <div className="sub-title fs-14 ft-small color-gray-2">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Itaque corporis doloribus
                </div>
                <div className="sub-title fs-14 textLeft ft-small learn-more color-gray-2 p-0 ">Home / Contact us</div>
            </div>

            {/* HEADING SECTION */}
            <div className="container-fluid max-height p-5 map-margin">
                <CustomMap/>
            </div>

            {/* Contact Us */}
            <div className="count-down-section container-fluid d-flex flex-column align-items-center">
                <div className="slogan text-center ft-x-huge ft-weight-black color-secondary">Contact us
                </div>
                <div className="description text-center ft-medium color-gray-2 mt-20">Lorem ipsum dolor sit amet, consectetur
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque corporis doloribus consequatur
                    fugit<br/>
                    volu ptatum ex rerum perspiciatis cupiditate, esse hic Lorem ipsum dolor
                </div>
            </div>

            {/* Contact Form */}
            <ContactForm/>

        </Page>
    )
};

export default ContactUs;
