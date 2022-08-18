const path = require("path")
module.exports = {
  siteMetadata: {
    title: `Hacktoberfest`,
    description: `Projeto opensource do Hacktoberfest promovido pela Globo.com`,
    url: "https://hacktoberfest.globo.com",
    author: `@globocom`,
    images: {
      opengraph: {
        type: "image/png",
        url: "images/share-image.png",
        width: 1200,
        height: 630
      }
    }
  },
  plugins: [
    `gatsby-plugin-top-layout`,
    `gatsby-plugin-material-ui`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-gatsby-cloud`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/themes/images`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/themes/images/hacktoberfest-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
          alias: {
              '@themes': path.resolve(__dirname, 'src/themes'),
              '@components': path.resolve(__dirname, 'src/components'),
              '@services': path.resolve(__dirname, 'src/services'),
              '@helpers': path.resolve(__dirname, 'src/helpers'),
              '@defs': path.resolve(__dirname, 'src/definitions')
          },
          extensions: [
              "ts",
              "tsx"
          ]
      }
   },
   {
    resolve: `gatsby-plugin-google-gtag`,
    options: {
      // You can add multiple tracking ids and a pageview event will be fired for all of them.
      trackingIds: [
        "G-6BD3V20X9M", // Google Analytics / GA
      ],
      head: false,
        // Setting this parameter is optional
      anonymize: true,
      // Setting this parameter is also optional
      respectDNT: true,
      // Avoids sending pageview hits from custom paths
      exclude: ["/preview/**", "/do-not-track/me/too/"],
      // Delays sending pageview hits on route update (in milliseconds)
      pageTransitionDelay: 0,
      defer: false,
        // Any additional optional fields
      sampleRate: 5,
      siteSpeedSampleRate: 10,
      // defaults to false
      enableWebVitalsTracking: true,
    },
  },
  ],
}
