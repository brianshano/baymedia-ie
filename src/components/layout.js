import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

// import TopBar from './TopBar';
import '../layouts/index.scss';

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
      {/* <Headroom>
        <h1>You can put anything you'd like inside the Headroom Component</h1>
      </Headroom> */}
      <div className="home-body">
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
