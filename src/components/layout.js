import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Header from './Header';
import TopBar from './TopBar';
import '../layouts/index.css';

import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
// import Headroom from './Headroom';

const TemplateWrapper = ({ children }) => (
  <div className="site-wrapper">
    <Helmet
      title="Baymedia Ireland"
      meta={[
        {
          name: 'description',
          content: 'Lamppost banner flags'
        },
        {
          name: 'keywords',
          content: 'banners, street advertising, flags, festivals'
        }
      ]}
    />
    {/* <TopBar /> */}
    <Header bg="#6C1F22" />
    {/* <Headroom>
      <h1>You can put anything you'd like inside the Headroom Component</h1>
    </Headroom> */}
    <div className="home-body">
 
      <Card className="card card-colm">
      <CardContent>
        <Typography color="textSecondary" gutterBottom>
        Our aim at Bay Media is to make a real change in peoples daily lives.  To transform the roads we daily travel on. To make your street an inspiration, exciting and memorable’
        </Typography>
        <div className="card-profile">
        <Typography className="card-mugshot"><img src="https://res.cloudinary.com/bshano/image/upload/c_scale,f_auto,r_100,w_120/v1539984900/Baymedia/colm-oduil-baymedia.jpg"/></Typography>
        <Typography className="card-mugshot-name">Colm O'Duil</Typography>
        </div>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
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
            <div className="icon">
              <img src="https://res.cloudinary.com/bshano/image/upload/f_auto/v1540158868/Baymedia/icons/icon-banner.png"/>
            </div>
            <div>2× 0.8 metre solid PVC, pre - stretched banner, printed
            on both sides with UV protected ink</div>
          </li>
          <li>
            <div className="icon">
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
        <div>Once bracket system is installed, banners and poles can easily be removed leaving just the discrete bracket in place.
          This makes our patented system ideal for annual events and festivals.</div>
          <div style={{
            display: 'flex',
            justifyContent: 'space-around',
            fontSize: '.8rem'
            }}>
            <div>Replacement banners just €189.</div>
            <div>*minimum order of 10-12 units</div>
          </div>

        </div>
      </section>
      <section className="section-3"> 
      <Card className="card card-list">
      <CardContent>
      <div><div className="card-heading">WHY LAMPPOST BANNER FLAGS?</div>
          <ul>
            <li>Massive impact</li>
            <li>High recall</li>
            <li>Attractive</li>
            <li>Excellent value</li>
            <li>Adds colour and vibrancy</li>
            <li>Creates occasion</li>
            <li>Urban promotion</li>
            <li>Durable</li>
          </ul>
        </div>
      </CardContent>
    </Card>

      <Card className="card card-list">
      <CardContent>
      <div><div className="card-heading">WHY BAY MEDIA?</div>
          <ul>
            <li>Trained engineers</li>
            <li>Fully certified</li>
            <li>Experienced planning team</li>
            <li>Public liability insurance</li>
            <li>Nationwide</li>
            <li>Guaranteed quality</li>
            <li>Excellent service</li>
            <li>Proven success</li>
          </ul>
        </div>

      </CardContent>
    </Card>

        
</section>
    <section className="background-open-banner-frame"> 
      <div className="banner-flags"><strong>Specialising in Lamppost banner flags</strong>
        <div>Using our experience in street dressing and outdoor general urban decoration we provide a range of services tailored to suit the needs of our clients.</div>

        <strong>Why do we specialise in lamppost banner flags? </strong>
        <div>Lamppost banner flags are an ideal, cost effective and highly efficient means of communicating with the public in a local setting. Lamppost banner flags engage directly with the public as they go about their daily business. Whether this is publicizing a festival or used for a sustained campaign such as marketing the town as a regional shopping destination.</div>
      </div>
      {/* <img src="https://res.cloudinary.com/bshano/image/upload/e_cartoonify,f_auto,fl_apng/e_auto_color/v1540132607/irish-open-trans.png"/>  */}
      <div className="background-open-banner">
      <div className="background-open-banner-inner">
      </div></div>
      </section>
      {/* <section> hi there </section> */}
    <div
      style={{
        margin: '0 auto',
        // maxWidth: 960,
        // padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0
      }}
    >
      {children}
    </div>
    </div>
    </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
