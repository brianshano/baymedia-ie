import React from 'react';
// import Link from 'gatsby-link';
import './styles.css';

const Header = () => (
  <div>
    <header className="header">
    <div className="header-content">
      <h1 className="company-logo">
        <span className="company-logo-bay"> Bay </span> Media
        <h2 className="company-tag"> Design dressing experts! </h2>
      </h1>
    </div>
    <div className="background-svg" />
    </header>
    <div className="cta-bar">
      <div>Call Us Today! +353 (0) 1 4545234</div>
      <div>info@baymedia.ie</div>
      <div>The Street Dressing Specialists</div>
    </div>
  </div>
);

export default Header;
