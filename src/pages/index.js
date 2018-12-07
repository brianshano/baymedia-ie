import React from 'react';
import Link from 'gatsby-link';
import Layout from '../components/layout';
import HomeSectionBannerFlags from '../components/HomeSectionBannerFlags';
// import HomeSectionWhyUs from '../components/HomeSectionWhyUs';
import HomeSectionBigText from '../components/HomeSectionBigText';
import HomeSectionInstallDetails from '../components/HomeSectionInstallDetails';
import HomeSectionColmIntro from '../components/HomeSectionColmIntro';
import HomeSectionContactUs from '../components/HomeSectionContactUs';

import Header from '../components/Header';

import OurClients from '../components/OurClients';
import Footer from '../components/Footer';

const IndexPage = () => (
  <div>
    <Header bg="#6C1F22" />
    <Layout>
      <HomeSectionColmIntro />
      <HomeSectionInstallDetails />
      <OurClients bg1="#6C1F22" />
      <HomeSectionBannerFlags />
      <HomeSectionContactUs />
      <HomeSectionBigText />
      {/* <HomeSectionWhyUs /> */}

      <Link to="/lamp-post-flag-banners/"> Go to page 2 </Link>
      <Footer bg1="#444" />
    </Layout>
  </div>
);

export default IndexPage;
