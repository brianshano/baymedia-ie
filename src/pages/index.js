import React from 'react';
import Link from 'gatsby-link';
import Layout from '../components/layout';
import ContactUs from '../components/ContactUs';
import HomeSectionBannerFlags from '../components/HomeSectionBannerFlags';
import HomeSectionWhyUs from '../components/HomeSectionWhyUs';
import HomeSectionInstallDetails from '../components/HomeSectionInstallDetails';
import HomeSectionColmIntro from '../components/HomeSectionColmIntro';
import Header from '../components/Header';

import OurClients from '../components/OurClients';
import Footer from '../components/Footer';

const IndexPage = () => (
  <div>
    <Header bg="#6C1F22" />
    <Layout>
      <HomeSectionColmIntro/>
      <HomeSectionInstallDetails/>
      <HomeSectionWhyUs/>
      <HomeSectionBannerFlags/>
      
      {/* <ContactUs bg1="#9BA3A4" /> */}
      <OurClients bg1="#6C1F22" />
      <Link to="/lamp-post-flag-banners/"> Go to page 2 </Link>
      <Footer bg1="#444" />
    </Layout>
  </div>
);

export default IndexPage;
