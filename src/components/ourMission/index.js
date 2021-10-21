import React from 'react';
import Button from 'elements/Button';
import aboutUsImage from "assets/images/about.png";
import roundImg from "assets/images/Ellipse.png";
import play from "assets/images/Path.png";
import "./index.scss"

const OurMission = () => {
    return (
        <div className="container-fluid">
            <div className="row align-items-center">
                <div className="col-xs-12 col-lg-6 p-3 p-lg-5">
                    <div className="title ft-x-large ft-weight-medium color-primary">Our Mission</div>
                    <div className="slogan paddingLeft ft-x-huge ft-weight-black color-secondary"><h3
                        className="fs-36">We believe that we can
                        save more lifes with you.</h3></div>
                    <div className="description ft-medium color-gray-2">Lorem ipsum dolor sit amet, consectetur
                        adipisicing elit.
                        Itaque corporis doloribus consequatur fugit volu ptatum ex
                        rerum perspiciatis cupiditate, esse hic Lorem ipsum dolor
                        sit amet, consectetur adipisicing elit.
                    </div>
                    <Button className="learn-more">Join us</Button>
                </div>
                <div className="col-xs-12 col-lg-6 aboutUsImg">
                    <div className="row">
                        <div className="position">
                            <img className="w-100" src={aboutUsImage} alt=""/>
                            <div className="rectangle-mission">
                                <div className="recText-mission"><img src={play} alt=""/></div>
                                <img src={roundImg} alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default OurMission;
