import React from 'react';
import { Link } from 'react-router-dom';

import imgLogo from 'assets/images/logo.png';
import iconFacebook from 'assets/images/icon-facebook.png';
import iconInstagram from 'assets/images/icon-instagram.png';
import iconTwitter from 'assets/images/icon-twitter.png';
import iconYoutube from 'assets/images/icon-youtube.png';
import Button from 'elements/Button';

const navGroup = [
  {
    title: 'About',
    items: [
      { title: 'What is GivingTuesday', path: '/about' },
      { title: 'Terms of Use', path: '/terms-of-use' },
      { title: 'Privacy policy', path: '/privacy-policy' },
    ]
  },
  {
    title: 'Get Involved',
    items: [
      { title: 'Charities', path: '/charities' },
      { title: 'Companies', path: '/companies' },
      { title: 'Groups, Schools', path: '/groups-and-schools' },
      { title: 'Individuals, Families', path: '/individuals-and-families' },
    ]
  },
  {
    title: 'Resources',
    items: [
      { title: 'Organizations', path: '/organizations' },
      { title: 'Individuals, Families', path: '/individuals-and-families' },
      { title: 'Media', path: '/media' },
    ]
  }
];

const socials = [
  { icon: iconFacebook, path: 'https://www.facebook.com' },
  { icon: iconInstagram, path: 'https://www.instagram.com' },
  { icon: iconTwitter, path: 'https://www.twitter.com' },
  { icon: iconYoutube, path: 'https://www.youtube.com' },
];

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-heading-section container-fluid d-flex flex-column flex-sm-row justify-content-center justify-content-sm-between align-items-start">
        <div>
          <div className="title ft-xxx-large">
            Change the life, Change the World
          </div>
          <div className="subtitle ft-small">
            Itaque corporis doloribus consequatur fugit voluptatum ex
          </div>
        </div>
        <Button size="small" className="get-started-btn" long grayed>Get Started</Button>
      </div>
      <div className="footer-navigation container-fluid">
        <div className="row">
          <div className="footer-socials-wrapper col-xs-12 col-md-5">
            <img src={imgLogo} alt="GivingTuesday" />
            <div className="footer-social-description ft-small color-gray-2">
              Itaque corporis doloribus consequatur<br />
              fugit voluptatum ex reru perspiciatis<br />
              cupiditate, esse hic!
            </div>
            <div className="d-flex">
              {socials.map(({ icon, path }) => (
                <a className="social-icon" href={path} key={path}>
                  <img src={icon} alt="" />
                </a>
              ))}
            </div>
          </div>
          <div className="col-xs-12 col-md-7">
            <div className="row">
              {navGroup.map(({ title, items }) => (
                <div className="nav-group col-4 pt-3 pt-md-0" key={title}>
                  <div className="ft-small ft-weight-medium">{title}</div>
                  {items.map(({ title, path }) => (
                    <Link className="nav-item d-block ft-tiny color-gray-2" key={title} to={path}>{title}</Link>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="footer-copyright color-dark-blue ft-small text-center container-fluid">
        Copyright © 2021 givingtuesday
      </div>
    </div>
  )
};

export default Footer;
