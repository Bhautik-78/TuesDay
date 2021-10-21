import React from 'react';
import locationIcon from "assets/images/locationIcon.png"
import webSiteIcon from "assets/images/websiteIcon.png"
import callIcon from "assets/images/callIcon.png"
import emailIcon from "assets/images/emailIcon.png"
import Button from "../../elements/Button";
import "./index.scss"

const ContactForm = () => {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-7">
                    <div className="mb-25">
                        <form className="">
                            <div className="mb-3 fs-35">Get in touch</div>
                            <div className="mt-3">
                                <label className="color-gray-2">Name</label>
                                <div>
                                    <input className="border" type="text"/>
                                </div>
                            </div>
                            <div className="mt-3">
                                <label className="color-gray-2">Email</label>
                                <div>
                                    <input className="border" type="email"/>
                                </div>
                            </div>
                            <div className="mt-3">
                                <label className="color-gray-2">Subject</label>
                                <div>
                                    <input className="border" type="text"/>
                                </div>
                            </div>
                            <div className="mt-3">
                                <label className="color-gray-2">Message</label>
                                <div>
                                    <textarea className="border" rows={10}/>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="col-md-1"/>
                <div className="col-md-4 involved-section">
                    <div className="p-70">
                        <card>
                            <div className="card-max-width">
                                <div className="d-flex">
                                    <div><img src={locationIcon} alt=""/></div>
                                    <div className="pl-3">
                                        <div >Address</div>
                                        <div className="mt-3 mb-45 color-gray-2">17/24 Soi Yos Anee, Chaofa West Road
                                            Chalong, Phuket 83130
                                            Thailand
                                        </div>
                                    </div>
                                </div>
                                <div className="d-flex">
                                    <div><img src={callIcon} alt=""/></div>
                                    <div className="pl-3">
                                        <div >Phone</div>
                                        <div className="mt-3 mb-45 color-gray-2">02 831 3131
                                        </div>
                                    </div>
                                </div>
                                <div className="d-flex">
                                    <div><img src={emailIcon} alt=""/></div>
                                    <div className="pl-3">
                                        <div >Email</div>
                                    <div className=" mt-3 mb-45 color-gray-2">info@givingtuesdaythailand.com
                                    </div>
                                    </div>
                                </div>
                                <div className="d-flex">
                                    <div><img src={webSiteIcon} alt=""/></div>
                                    <div className="pl-3">
                                        <div >Website</div>
                                    <div className="mt-3 mb-45 color-gray-2">www.givingtuesdaythailand.com
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </card>
                    </div>
                </div>
            </div>
            <Button className="learn-more button-width">Send Message</Button>
        </div>
    )
};

export default ContactForm;
