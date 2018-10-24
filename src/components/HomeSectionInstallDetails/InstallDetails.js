import React, { Component } from 'react';
import './InstallDetails.scss';
import Link from 'gatsby-link';

import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

class InstallDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render() {
    console.log('ineeer');

    return (
      <section className="section-1">
      <div className="section-1-text">
        <div className="section-1-text-header">€356 per installed lamppost banner</div>
        <div>Including:</div>
        <ul >
          
          <li>
            <div className="icon">
              <img src="https://res.cloudinary.com/bshano/image/upload/f_auto/v1540158868/Baymedia/icons/icon-spring.png"/>
            </div>
            <div>Patented spring tensioned bracket system</div>
            </li>
            <li>
            <div className="icon banner">
              <img src="https://res.cloudinary.com/bshano/image/upload/f_auto/v1540158868/Baymedia/icons/icon-banner.png"/>
            </div>
            <div>2× 0.8 metre solid PVC, pre - stretched banner, printed
            on both sides with UV protected ink</div>
          </li>
          <li>
            <div className="icon bracket">
              <img src="https://res.cloudinary.com/bshano/image/upload/f_auto/v1540158868/Baymedia/icons/icon-bracket.png"/>
            </div>
            <div>Brackets installed using solid stainless steel banding, doubled over and in triplicate</div>
          </li>
          <li>
            <div className="icon">
              <img src="https://res.cloudinary.com/bshano/image/upload/f_auto/v1540158868/Baymedia/icons/icon-engineers.png"/>
            </div>
            <div>Implemented by trained engineers to the highest standard</div>
          </li>
        </ul>
        <Link to="/lamp-post-flag-banners/"><Button variant="contained"
        color="primary">Learn More</Button></Link>

        {/* <div>Once bracket system is installed, banners and poles can easily be removed leaving just the discrete bracket in place.
          This makes our patented system ideal for annual events and festivals.</div> */}
          <div style={{
            display: 'flex',
            justifyContent: 'space-around',
            fontSize: '.8rem',
            padding: '1rem 0'
            }}>
            <div>Replacement banners just €189.</div>
            <div>*minimum order of 10-12 units</div>
          </div>

        </div>
      </section>
    );
  }
}

export default InstallDetails;

