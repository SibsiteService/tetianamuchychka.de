/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Tetiana Muchychka`,
        short_name: `Muchychka`,
        start_url: `/`,
        background_color: `#000000`,
        theme_color: `#000000`,
        display: `standalone`,
        icon: `src/favicons/icon.png`, // This path is relative to the root of the site.
        icons: [
              {
                src: `/favicons/icon-192x192.png`,
                sizes: `192x192`,
                type: `image/png`,
              },
              {
                src: `/favicons/icon-512x512.png`,
                sizes: `512x512`,
                type: `image/png`,
              },
        ],
      },
    },
  ],
  
}
