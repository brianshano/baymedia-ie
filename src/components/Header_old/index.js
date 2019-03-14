import React from 'react';
// import Link from 'gatsby-link';
import './styles.scss';

const Header = () => (
  <div>
    <header className="header">
      <div className="header-content">
        <h1 className="company-logo">
          <span className="company-logo-bay"> Bay </span> Media
        </h1>
        <h2 className="company-tag"> Design dressing experts</h2>
      </div>
      <div className="background-svg" />
    </header>

    <div className="cta-bar">
      <div>Simple</div>
      <div>Elegant</div>
      <div>Beautiful</div>
    </div>
  </div>
);

export default Header;
