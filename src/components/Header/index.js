import React from 'react';
import Link from 'gatsby-link';

const Header = () => (
  <div
    className="header-hero"
    style={{
      borderBottom: '2px solid #29aae4'
    }}
  >
    <div
      style={{
        margin: '0 auto',
        color: '#29aae4',
        // maxWidth: 960,
        padding: '1rem'
      }}
    >
      <h1
        style={{
          margin: 0
        }}
      >
        <Link
          to="/"
          style={{
            color: '#29aae4',
            fontFamily: 'Orbitron, sans-serif',
            fontWeight: '900',
            textDecoration: 'none'
          }}
        >
          <p className="header-logo-para">
            <span
              style={{
                color: '#6d6e70'
              }}
            >
              BAY{' '}
            </span>MEDIA{' '}
          </p>{' '}
        </Link>{' '}
      </h1>{' '}
      <div
        style={{
          color: '#fff',
          fontFamily: 'Nunito, sans-serif',
          fontWeight: '400',
          textTransform: 'Uppercase'
        }}
      >
        <p> The Street Dressing Specialists </p>{' '}
      </div>{' '}
    </div>
    {/* <Image publicId="Baymedia/dublin-airport.svg" /> */}
    <img
      className="background-banners-svg"
      src="https://res.cloudinary.com/bshano/image/upload/v1535118081/Baymedia/dublin-airport.svg"
    />
    {/* <img src="http://res.cloudinary.com/bshano/image/upload/v1535119715/Baymedia/dublin-airport1.svg" /> */}
    {/* <div className="wave"> </div>{' '} */}
  </div>
);

export default Header;
