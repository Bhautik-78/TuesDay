import React from 'react';
import moment from 'moment';

import imgHomeBackground from 'assets/images/home-bg.png';
import Button from 'elements/Button';
import Page from 'elements/Page';
import ProgressBar from 'elements/progressBar';
import CountDown from 'components/countDown';
import InvolvedSection from 'components/lnvolvedSection';
import StatsSection from 'components/statsSection';

const Home = () => {
    // TODO: should come from backend
    const endDate = '2021-11-05';
    const progress = 53;
    return (
        <Page className="home">
            {/* HEADING SECTION */}
            <div
                className="container-fluid heading-section d-flex flex-column justify-content-center align-items-start">
                <img className="heading-bg" src={imgHomeBackground} alt="heading-background"/>
                <div className="sub-title ft-small">Change the life, Change the World</div>
                <div className="title ft-xx-huge">Better Life for People</div>
                <div className="sub-title ft-small">
                    Help today because tomorrow you may be the one who needs helping!<br/>
                    Forget what you can get and see what you can give.
                </div>
                <Button className="learn-more">Learn more</Button>
            </div>

            {/* COUNT DOWN SECTION */}
            <div className="count-down-section container-fluid d-flex flex-column align-items-center">
                <div className="title ft-x-large ft-weight-medium color-primary">The Countdown</div>
                <div className="slogan text-center ft-x-huge ft-weight-black color-secondary">The Biggest Day of
                    Generosity is On
                </div>
                <div className="description text-center ft-medium color-gray-2">Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed do eiusmod tempor
                </div>
                <div
                    className="end-date pt-4 ft-x-large ft-weight-medium color-black">{moment(endDate).format('DD MMM YYYY')}</div>
                <CountDown endTime={moment.utc(endDate).unix() * 1000}/>
                <ProgressBar percent={progress}/>
                <div className="ft-medium color-black">{progress} % Done</div>
            </div>

            {/* INVOLVED SECTION */}
            <InvolvedSection/>

            {/* STATS SECTION */}
            <StatsSection/>
        </Page>
    )
};

export default Home;
