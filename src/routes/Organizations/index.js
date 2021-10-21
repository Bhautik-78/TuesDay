import React from 'react';
import imgHomeBackground from "assets/images/page-header-bg.png";
import Page from "elements/Page";
import aboutUsImage from "assets/images/about-us.png";
import Card from "components/card";
import img1 from "assets/images/cardIcon1.png";
import img2 from "assets/images/cardIcon2.png";
import img3 from "assets/images/cardIcon3.png";
import logo1 from "assets/images/logo/img-1.png";
import logo2 from "assets/images/logo/img-2.png";
import logo3 from "assets/images/logo/img-3.png";
import logo4 from "assets/images/logo/img-4.png";
import logo5 from "assets/images/logo/img-5.png";
import logo6 from "assets/images/logo/img-6.png";
import logo7 from "assets/images/logo/img-7.png";
import logo8 from "assets/images/logo/img-8.png";
import logo9 from "assets/images/logo/img-9.png";
import logo10 from "assets/images/logo/img-10.png";
import './index.scss';

const Organizations = () => {
    const DUMMY_DATA = [
        {
            id: 1,
            image: img1,
            heading: `NGOs`,
            list: [
                'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
                'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
                'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
            ]
        },
        {
            id: 2,
            image: img2,
            heading: `NGOs`,
            list: [
                'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
                'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
                'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
            ]
        },
        {
            id: 3,
            image: img3,
            heading: `NGOs`,
            list: [
                'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
                'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
                'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
            ]
        }
    ];

    const DUMMY_LIST_ONE_OF_LOGO = [
        logo1,
        logo2,
        logo3,
        logo4,
        logo5
    ];
    const DUMMY_LIST_TWO_OF_LOGO = [
        logo6,
        logo7,
        logo8,
        logo9,
        logo10
    ];

    return (
        <Page className="home">
            {/* HEADING SECTION */}
            <div
                className="container-fluid heading-section d-flex flex-column justify-content-center align-items-start">
                <img className="heading-bg" src={imgHomeBackground} alt="heading-background"/>
                <div className="title ft-xx-huge">Organizations</div>
                <div className="sub-title fs-14 ft-small color-gray-2">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Itaque corporis doloribus
                </div>
                <div className="sub-title fs-14 textLeft ft-small learn-more color-gray-2 p-0 ">Home / Organizations
                </div>
            </div>

            {/* ABOUT PROJECT */}
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col-xs-12 col-lg-6 p-3 p-lg-5">
                        <div className="title ft-x-large ft-weight-medium color-primary">About Project</div>
                        <div className="slogan paddingLeft ft-x-huge ft-weight-black color-secondary">Giving Tuesday
                            Projects
                        </div>
                        <div className="description ft-medium color-gray-2">Lorem ipsum dolor sit amet, consectetur
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Itaque corporis doloribus consequatur fugit volu ptatum ex
                            rerum perspiciatis cupiditate, esse hic Lorem ipsum dolor
                            sit amet, consectetur adipisicing elit.
                        </div>
                        <div className="description ft-medium color-gray-2">Lorem ipsum dolor sit amet, consectetur
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Itaque corporis doloribus consequatur fugit volu ptatum ex
                            rerum perspiciatis cupiditate, esse hic Lorem ipsum dolor
                            sit amet, consectetur adipisicing elit.
                        </div>
                    </div>
                    <div className="col-xs-12 col-lg-6 aboutUsImg">
                        <div className="row">
                            <img src={aboutUsImage} alt=""/>
                        </div>
                    </div>
                </div>
            </div>

            {/* Organizations*/}
            <div
                className="organisation count-down-section involved-section container-fluid d-flex flex-column align-items-center">
                <div className="title ft-x-large ft-weight-medium color-primary">Organizations</div>
                <div className="slogan text-center ft-x-huge ft-weight-black color-secondary">Being Part of
                    GivingTuesday
                </div>
                <div className="description text-center ft-medium color-gray-2">
                    <div className="organisationText">
                        Lorem ipsum dolor sit amet, consectetur
                        adipisicing elit. Itaque corporis doloribus consequatur fugit
                        volu ptatum ex rerum perspiciatis cupiditate, esse hic Lorem ipsum dolor
                    </div>
                </div>
                <div className="cardMenu">
                    {DUMMY_DATA.map(data => {
                        return <Card key={data.id} data={data}/>
                    })}
                </div>
            </div>

            {/* Organizations*/}
            <div className="count-down-section container-fluid d-flex flex-column align-items-center">
                <div className="title ft-x-large ft-weight-medium color-primary">Organizations</div>
                <div className="slogan text-center ft-x-huge ft-weight-black color-secondary">Participating
                    Organizations
                </div>
                <div className="logoMenu">
                    <div className="logoLine">
                        {DUMMY_LIST_ONE_OF_LOGO.map((image) =>
                        <div className='logoBox'>
                            <img src={image} alt='' height="100%" width='100%'/>
                        </div>
                        )}
                    </div>
                    <div className="logoLine">
                        {DUMMY_LIST_TWO_OF_LOGO.map((image) =>
                            <div className='logoBox'>
                                <img src={image} alt='' height="100%" width='100%'/>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </Page>
    )
};

export default Organizations;
