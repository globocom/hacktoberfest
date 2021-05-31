const path = require('path')
module.exports = {
  siteMetadata: {
    title: `Hacktoberfest`,
    description: `Projeto opensource do Hacktoberfest promovido pela Globo.com`,
    author: `@globocom`,
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
        path: `${__dirname}/src/themes/2021/images`,
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
        icon: `src/themes/2021/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
          alias: {
              '@themes': path.resolve(__dirname, 'src/themes'),
              '@components': path.resolve(__dirname, 'src/components'),
              '@definitions': path.resolve(__dirname, 'src/definitions')
          },
          extensions: [
              "ts",
              "tsx"
          ]
      }
   },
  ],
}
