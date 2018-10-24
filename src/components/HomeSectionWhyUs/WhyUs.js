import React, { Component } from 'react';
import './WhyUs.scss';

import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

class WhyUs extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render() {
    console.log('ineeer');

    return (
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
    );
  }
}

export default WhyUs;

