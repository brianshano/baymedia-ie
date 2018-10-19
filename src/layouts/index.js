import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Header from '../components/Header';
import './index.css';

const TemplateWrapper = ({ children }) => (
  <div className="site-wrapper">
    <Helmet
      title="Gatsby Default Starter"
      meta={[
        {
          name: 'description',
          content: 'Sample'
        },
        {
          name: 'keywords',
          content: 'sample, something'
        }
      ]}
    />
    <Header bg="#6C1F22" />
    <div className="home-body">
      <p> hi there hi there hi there hi there hi there hi there hi there </p>
      <section>
        €356 per installed lamppost banner.*Includes, patented spring tensioned
        bracket system, 2× 0.8 metre solid PVC, pre - stretched banner, printed
        on both sides with UV protected ink.Brackets installed using solid
        stainless steel banding, doubled over and in triplicate.Works done by
        trained engineers to the highest standard.
      </section>
      <section> WHY LAMPPOST BANNER FLAGS ? </section>
      <section> WHY BAY MEDIA ? </section> <section> hi there </section>
      <section> hi there </section>
    </div>
    <div
      style={{
        margin: '0 auto',
        // maxWidth: 960,
        // padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0
      }}
    >
      {children()}
    </div>
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
