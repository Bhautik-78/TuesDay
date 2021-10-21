import React from 'react';
import imgHomeBackground from "assets/images/page-header-bg.png";
import Page from "elements/Page";
import backJack from "assets/images/give-back-jack.png";
import "./index.scss"

const Individuals = () => {
    return (
        <Page className="home">
            {/* HEADING SECTION */}
            <div
                className="container-fluid heading-section d-flex flex-column justify-content-center align-items-start">
                <img className="heading-bg" src={imgHomeBackground} alt="heading-background"/>
                <div className="title ft-xx-huge">Individuals</div>
                <div className="sub-title fs-14 ft-small color-gray-2">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Itaque corporis doloribus
                </div>
                <div className="sub-title fs-14 textLeft ft-small learn-more color-gray-2 p-0 ">Home / Individuals
                </div>
            </div>

            {/* Individuals */}
            <div className="count-down-section container-fluid d-flex flex-column align-items-center">
                <div className="title ft-x-large ft-weight-medium color-primary">Individuals</div>
                <div className="slogan text-center ft-x-huge ft-weight-black color-secondary">How to Participate in
                    GivingTuesday
                </div>
                <div className="description text-center ft-medium color-gray-2 mt-27 w-60">Lorem ipsum dolor sit amet, consectetur
                    adipisicing elit. Itaque corporis doloribus consequatur fugit<br/>
                    volu ptatum ex rerum perspiciatis cupiditate, esse hic Lorem ipsum dolor
                </div>
                <div className="list">
                    <li><div >Donation Station</div><div className="li-border" /></li>
                    <li><div>Pay it Forward</div></li>
                    <li><div>Offer Kindness</div></li>
                    <li><div>Help Neighbours</div></li>
                </div>
            </div>

            {/* Donation Station */}
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col-xs-12 col-lg-6 p-3 p-lg-5">
                        <div className="slogan paddingLeft ft-x-huge ft-weight-black color-secondary">Create a
                            Donation Station
                        </div>
                        <div className="description ft-medium color-gray-2">Lorem ipsum dolor sit amet, consectetur
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Itaque corporis doloribus consequatur fugit volu ptatum ex
                            rerum perspiciatis cupiditate, esse hic Lorem ipsum dolor
                            sit amet, consectetur adipisicing elit. Lorem ipsum dolor
                            sit amet, consect
                        </div>
                        <div className="description ft-medium color-gray-2">Lorem ipsum dolor sit amet, consectetur
                            consequatur fugit volu ptatum ex rerum perspiciatis cupiditate,
                            esse hic Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        </div>
                    </div>
                    <div className="col-xs-12 col-lg-6 aboutUsImg">
                        <div className="row">
                            <img src={backJack} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </Page>
    )
};

export default Individuals;
