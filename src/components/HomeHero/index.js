import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import Link from 'gatsby-link';

class HomeHero extends Component {
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
            <h1 style={{ margin: 0 }}>
              <p>HomeHero Component {this.props.bg1}</p>
            </h1>
          </div>
        </div>
      </div>
    );
  }
}

HomeHero.propTypes = {
  bg1: PropTypes.string
};

export default HomeHero;
