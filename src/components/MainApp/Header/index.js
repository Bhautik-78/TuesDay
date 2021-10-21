import React, { useState } from 'react';
import { Link, withRouter, useHistory } from 'react-router-dom';
import classNames from 'classnames';

import imgLogo from 'assets/images/logo.png';
import Button from 'elements/Button';

const menuItems = [
  { title: 'Home', path: '/home' },
  { title: 'About', path: '/about' },
  { title: 'Organizations', path: '/organizations' },
  { title: 'Individuals', path: '/individuals' },
  { title: 'Media', path: '/media' },
];

const Header = ({ history }) => {
  const [open, setOpen] = useState(false);

  const onContactUS = () => {
      history.push("/contactUs")
  };

  const menu = (isBig) => (
    <>
      {menuItems.map(({ title, path }) => (
        <Link
          className={
            classNames('menu-item', {
              active: history.location.pathname.startsWith(path)
            })
          }
          key={title}
          to={path}
          onClick={() => setOpen(false)}
        >
          {title}
        </Link>
      ))}
      <Button onClick={onContactUS} size={isBig ? 'medium' : 'small'} long={isBig} className="contact-us">Contact us</Button>
      {isBig && <div className="close-btn ft-xx-huge color-primary" onClick={() => setOpen(false)}>×</div>}
    </>
  );
  return (
    <div className="header container-fluid d-flex align-items-center justify-content-end justify-content-lg-between">
      <img src={imgLogo} alt="GivingTuesday" className="d-none d-lg-block" />
      <div className="hamburger d-block d-sm-none color-primary ft-huge" onClick={() => setOpen(true)}>
        ☰
      </div>
      <div className="d-none d-sm-flex align-items-center">
        {menu(false)}
      </div>
      {open && (
        <div className="popup-menu d-flex d-sm-none flex-column align-items-center justify-content-between">
          {menu(true)}
        </div>
      )}
    </div>
  );
};

export default withRouter(Header);
