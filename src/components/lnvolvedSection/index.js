import React from 'react';

import ImgCard1 from 'assets/images/cards/card-1.png';
import ImgCard2 from 'assets/images/cards/card-2.png';
import ImgCard3 from 'assets/images/cards/card-3.png';
import ImgCard4 from 'assets/images/cards/card-4.png';
import imgBulletPoint from 'assets/images/bullet-point.png';
import "./index.scss"

// TODO: Should come from the backend
const cards = [
    {
        key: 'card-1',
        image: ImgCard1,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
    },
    {
        key: 'card-2',
        image: ImgCard2,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
    },
    {
        key: 'card-3',
        image: ImgCard3,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
    },
    {
        key: 'card-4',
        image: ImgCard4,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
    },
];

const bulltePoints = [
    'Lorem ipsum dolor sit amet',
    'Consectetur adipisicing elit',
    'Unde doloremque'
];

const InvolvedSection = () => {
    const leftCards = cards.slice(0, Math.floor(cards.length / 2));
    const rightCards = cards.slice(Math.floor(cards.length / 2));
    const cardRender = ({key, image, description}) => (
        <div key={key} className="involved-card">
            <img src={image} alt=""/>
            <div className="description ft-small color-gray-2">{description}</div>
        </div>
    )
    return (
        <div className="involved-section margin-50  container-fluid">
            <div className="row margin-50 align-items-center">
                <div className="col-xs-12 col-lg-6">
                    <div className="row">
                        <div className="col-xs-12 col-sm-6 pt-0 pt-lg-5">
                            {leftCards.map(cardRender)}
                        </div>
                        <div className="col-xs-12 col-sm-6">
                            {rightCards.map(cardRender)}
                        </div>
                    </div>
                </div>
                <div className="col-xs-12 col-lg-6 p-3 p-lg-5">
                    <div className="title ft-x-large ft-weight-medium color-primary">Get Involved</div>
                    <div className="slogan p-2 ft-x-huge ft-weight-black color-secondary">Want to get involved?</div>
                    <div className="description ft-medium color-gray-2">Lorem ipsum dolor sit amet, consectetur
                        adipisicing elit. Itaque corporis doloribus consequatur fugit volu ptatum exrerum perspiciatis
                        cupiditate, esse hic Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </div>
                    <div className="description ft-medium color-gray-2 pt-3 pb-3">Itaque corporis doloribus consequatur
                        fugit voluptatum exreru perspiciatis cupiditate, esse hic!
                    </div>
                    <div className="bullet-points">
                        {bulltePoints.map(bulletPoint => (
                            <div key={bulletPoint} className="d-flex align-items-center pt-1 pb-1">
                                <img className="bullet-point-icon" src={imgBulletPoint} alt=""/>
                                <div className="ft-medium color-gray-2 pl-3">{bulletPoint}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
};

export default InvolvedSection;
