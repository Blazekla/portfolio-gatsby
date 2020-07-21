require("dotenv").config()
const config = require("./src/config")

module.exports = {
  siteMetadata: {
    title: config.siteTitle,
    description: config.siteDescription,
    author: config.name,
    siteUrl: config.siteUrl,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-robots-txt`,
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `images`,
    //     path: `${__dirname}/src/images`
    //   }
    // },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Luis Portfolio Page`,
        short_name: `Luis Portfolio Page`,
        start_url: `/`,
        background_color: `#002333`,
        theme_color: `#002333`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-material-ui`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
    //
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          config.googleAnalyticsID, // Google Analytics / GA
          // "AW-CONVERSION_ID", // Google Ads / Adwords / AW
          // "DC-FLOODIGHT_ID", // Marketing Platform advertising products (Display & Video 360, Search Ads 360, and Campaign Manager)
        ],
        // This object gets passed directly to the gtag config command
        // This config will be shared across all trackingIds
        // gtagConfig: {
        //   optimize_id: "OPT_CONTAINER_ID",
        //   anonymize_ip: false,
        //   cookie_expires: 0,
        // },
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: true,
          // Setting this parameter is also optional
          // respectDNT: true,
          // Avoids sending pageview hits from custom paths
          // exclude: ["/preview/**", "/do-not-track/me/too/"],
        },
      },
    },
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: process.env.STRAPI_API_URL,
        queryLimit: 1000, // Default to 100
        contentTypes: [
          `nav-links`,
          `social-medias`,
          `projects`,
          `technologies`,
        ],
        //If using single types place them in this array.
        singleTypes: [
          `hero-section`,
          `about-section`,
          `contact-section`,
          `footer-section`,
        ],
        // Possibility to login with a strapi user, when content types are not publically available (optional).
        loginData: {
          identifier: process.env.STRAPI_LOGIN_IDENTIFIER,
          password: process.env.STRAPI_LOGIN_PASSWORD,
        },
      },
    },
  ],
}
