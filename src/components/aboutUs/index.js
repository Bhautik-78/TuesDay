import React from 'react';
import Button from 'elements/Button';
import aboutUsImage from "assets/images/icon-about.png";
import rectangle from "assets/images/Rectangle.png";
import "./index.scss"

const AboutUs = () => {
    return (
        <div className="container-fluid">
            <div className="row align-items-center">
                <div className="col-xs-12 col-lg-6 p-3 p-lg-5">
                    <div className="title ft-x-large ft-weight-medium color-primary">About Us</div>
                    <div className="slogan paddingLeft ft-x-huge ft-weight-black color-secondary">What is Giving
                        Tuesday?
                    </div>
                    <div className="description ft-medium color-gray-2">Lorem ipsum dolor sit amet, consectetur
                        adipisicing elit.
                        Itaque corporis doloribus consequatur fugit volu ptatum ex
                        rerum perspiciatis cupiditate, esse hic Lorem ipsum dolor
                        sit amet, consectetur adipisicing elit.
                    </div>
                    <div className="d-flex projectList">
                        <div><span className="fs fw-500">5240+</span>
                            <div className="color-gray-2">Finished Projects</div>
                        </div>
                        <div><span className="fs fw-500">2490+</span>
                            <div className="color-gray-2">Individuals</div>
                        </div>
                        <div><span className="fs fw-500">250+</span>
                            <div className="color-gray-2">Business</div>
                        </div>
                    </div>
                    <Button className="learn-more">Join us</Button>
                </div>
                <div className="col-xs-12 col-lg-6 aboutUsImg">
                    <div className="row">
                        <div className="position">
                            <img src={aboutUsImage} alt=""/>
                            <div className="rectangle">
                                <div className="rec-text">More Than 365 000+ People Were Helped</div>
                                <img src={rectangle} alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default AboutUs;
