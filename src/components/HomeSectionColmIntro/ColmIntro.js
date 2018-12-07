import React, { Component } from 'react';
import './ColmIntro.scss';

// import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

class ColmIntro extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    console.log('ineeer');

    return (
      <div className="card-background">
        <Card className="card card-colm">
          <CardContent>
            <Typography
              color="textSecondary"
              className="colm-quote"
              gutterBottom
            >
              <p className="colm-quote--title">
                Our aim at Bay Media is to make a real change in peoples daily
                lives.
              </p>
              <p>
                To transform the roads we daily travel on. To make your street
                an inspiration, exciting and memorable
              </p>
              <br />
            </Typography>
            <div className="card-profile">
              {/* <Typography className="card-mugshot"><img alt="baymedia colm" src="https://res.cloudinary.com/bshano/image/upload/c_scale,f_auto,r_60,w_120/v1541021777/Baymedia/colm-headshot2.jpg"/></Typography> */}
              <Typography className="card-mugshot">
                <img
                  alt="baymedia colm"
                  src="https://res.cloudinary.com/bshano/image/upload/c_scale,f_auto,q_auto:best,r_60,w_120/v1541024377/colm-headshot4.jpg"
                />
              </Typography>

              <Typography className="card-mugshot-name">
                {/* Colm O'Duil */}
                <img
                  alt="colm signature"
                  src="https://res.cloudinary.com/bshano/image/upload/c_scale,f_auto,q_100,w_201/v1544195306/Baymedia/colm%20signature.png"
                />
              </Typography>
            </div>
          </CardContent>
          <CardActions>
            {/* <Button size="small">Learn More</Button> */}
          </CardActions>
        </Card>
      </div>
    );
  }
}

export default ColmIntro;
