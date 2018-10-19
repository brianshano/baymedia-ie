import React from 'react';
import Link from 'gatsby-link';
import './styles.css';

const Header = () => (
  <header className="header">
    <div className="header-content">
      <h1 className="company-logo">
        <span className="company-logo-bay"> Bay </span> Media
      </h1>
      <h2 className="company-tag"> Design dressing experts! </h2>
    </div>
    <div className="background-svg" />

    {/* <Image publicId="Baymedia/dublin-airport.svg" /> */}
    {/* <img
            className="background-banners-svg"
            src="https://res.cloudinary.com/bshano/image/upload/v1535118081/Baymedia/dublin-airport.svg"
          /> */}
    {/* <img src="http://res.cloudinary.com/bshano/image/upload/v1535119715/Baymedia/dublin-airport1.svg" /> */}
    {/* <div className="wave"> </div> */}
  </header>
);

export default Header;
