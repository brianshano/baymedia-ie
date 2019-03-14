import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

// import TopBar from './TopBar';
import '../layouts/index.scss';

// import Headroom from './Headroom';

const TemplateWrapper = ({ children }) => (
  <div className="section">
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

    <div className="home-body">
      {children}
      <div>
        <style jsx>{``}</style>
      </div>
    </div>
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
