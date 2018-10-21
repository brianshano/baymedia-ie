import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import Link from 'gatsby-link';

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      title: ''
    };
  }

  render() {
    return (
      <div>
        <div
          style={{
            background: this.props.bg1
            // marginBottom: '1.45rem'
          }}
        >
          <div
            style={{
              maxWidth: '100%',
              color: 'white',
              padding: '1.45rem 1.0875rem'
              
            }}
          >
            <div style={{ 
              margin: 0,
              padding: 0,
              fontFamily: 'Montserrat, sans-serif',
              fontSize: '.8rem'
              }}>
              <div>

Copyright 2018 Bay Media | All Rights Reserved</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Footer.propTypes = {
  bg1: PropTypes.string
};

export default Footer;
