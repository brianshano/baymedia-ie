import React, { Component } from 'react';
import './BannerFlags.scss';

class BannerFlags extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render() {
    console.log('ineeer');

    return (
      <section className="background-open-banner-frame"> 
      <div className="banner-flags">
        <strong className="banner-flag-description">Specialising in Lamppost banner flags</strong>
        <div className="banner-flag-description">Using our experience in street dressing and outdoor general urban decoration 
          we provide a range of services tailored to suit the needs of our clients.</div>
          <p></p>
        <strong className="banner-flag-description">Why do we specialise in lamppost banner flags? </strong>
        <div className="banner-flag-description">Lamppost banner flags are an ideal, cost effective and highly efficient means of 
          communicating with the public in a local setting that engage 
          directly with the public as they go about their daily business. Whether
          publicizing a festival or used for a sustained campaign such as marketing the town 
          as a regional shopping destination.</div>
      </div>
      {/* <img src="https://res.cloudinary.com/bshano/image/upload/e_cartoonify,f_auto,fl_apng/e_auto_color/v1540132607/irish-open-trans.png"/>  */}
      <div className="background-open-banner">
      <div className="background-open-banner-inner">
      </div></div>
      </section>
    );
  }
}

export default BannerFlags;

