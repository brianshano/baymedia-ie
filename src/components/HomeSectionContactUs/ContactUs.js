import React, { Component } from 'react';
import './ContactUs.scss';

// import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

class ContactUs extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    console.log('ineeer');

    return (
      <div className="card-contact-background">
        <Card className="card card-colm">
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              <address className="contact-us">
                <div className="bold">Bay Media Ireland Limited</div>
                <div>Weston Mills</div>
                <div>Back Weston</div>
                <div>Leixlip</div>
                <div>Co. Kildare</div>
              </address>
              <div>
                <div>
                  Phone:
                  <span itemprop="telephone">
                    <a href="tel:+35314545234">+353(0)14545234</a>
                  </span>
                </div>
                <div>
                  Email:{' '}
                  <a href="mailto:example@tutorialspark.com">
                    info@baymedia.ie
                  </a>
                </div>
              </div>
            </Typography>
          </CardContent>
        </Card>
        {/* <form name="contact" method="POST" netlify>
  <p>
    <label>Your Name: <input type="text" name="name" /></label>   
  </p>
  <p>
    <label>Your Email: <input type="email" name="email" /></label>
  </p>
  <p>
    <label>Your Role: <select name="role[]" multiple>
      <option value="leader">Leader</option>
      <option value="follower">Follower</option>
    </select></label>
  </p>
  <p>
    <label>Message: <textarea name="message"></textarea></label>
  </p>
  <p>
    <button type="submit">Send</button>
  </p>
</form> */}
      </div>
    );
  }
}

export default ContactUs;
