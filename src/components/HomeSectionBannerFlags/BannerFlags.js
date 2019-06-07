import React, { Component } from 'react';
import './BannerFlags.scss';

class BannerFlags extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    console.log('ineeer');

    return (
      <section className="background-open-banner-frame">
        <div className="banner-flags">
          <strong className="banner-flag-description">
            Specialising in Lamppost banner flags
          </strong>
          <div className="banner-flag-description">
            Using our experience in street dressing and outdoor general urban
            decoration we provide a range of services tailored to suit the needs
            of our clients.
          </div>
          <button className="button is-primary">
            <a href="http://baymedia.ie/lamp-post-flags-system/">Learn More</a>
          </button>
          <p />
          <strong className="banner-flag-description">
            Why do we specialise in lamppost banner flags?{' '}
          </strong>
          <div className="banner-flag-description">
            Lamppost banner flags are an ideal, cost effective and highly
            efficient means of communicating with the public in a local setting
            that engage directly with the public as they go about their daily
            business. Whether publicizing a festival or used for a sustained
            campaign such as marketing the town as a regional shopping
            destination.
          </div>
          <button className="button is-primary">
            <a href="http://baymedia.ie/what-we-do/">What We Do</a>
          </button>
        </div>
        <div className="background-open-banner">
          <div className="background-open-banner-inner" />
        </div>

        <style jsx>
          {`
            .btn {
              padding: 0;
              background-color: #986fda;
              width: 10rem;
              margin: 0 auto;
              height: 4rem;
            }
            a {
              color: white;
              text-decoration: none;
            }
          `}
        </style>
      </section>
    );
  }
}

export default BannerFlags;
