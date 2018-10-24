module.exports = {
  siteMetadata: {
    title: 'Baymedia Ireland',
  },
  plugins: ['gatsby-plugin-react-helmet', `gatsby-plugin-sass`,
  // plugins: [],
  // plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `BayMedia IE`,
        short_name: `Baymedia`,
        start_url: `/`,
        background_color: `#f4f7f8`,
        theme_color: `#f4f7f8`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    }],
  // ]
  
};
