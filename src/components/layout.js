import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Header from './Header';
import '../layouts/index.css';

import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';


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
    <Header bg="#6C1F22" />
    <div className="home-body">
      <p> 
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
        €356 per installed lamppost banner.<br />
        *Includes, patented spring tensioned
        bracket system, 2× 0.8 metre solid PVC, pre - stretched banner, printed
        on both sides with UV protected ink.Brackets installed using solid
        stainless steel banding, doubled over and in triplicate.Works done by
        trained engineers to the highest standard.
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
    <section> hi there </section>
      <section> hi there </section>
    </p>
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
