import React from 'react';
import Link from 'gatsby-link';
import Layout from '../components/layout';
import HomeHero from '../components/HomeHero';
import ContactUs from '../components/ContactUs';
import OurClients from '../components/OurClients';
import Footer from '../components/Footer';

const IndexPage = () => (
  <Layout>
    {/* <HomeHero bg1="#2F363A" />
    <HomeHero bg1="#6d6e70" />
    <HomeHero bg1="#6C1F22 " />
    <HomeHero bg1="#9BA3A4" /> */}
    {/* <ContactUs bg1="#9BA3A4" /> */}
    <OurClients bg1="#6C1F22" />
    {/* <Link to="/lamp-post-flag-banners/"> Go to page 2 </Link> */}
    <Footer bg1="#444" />
  </Layout>
);

export default IndexPage;
