/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: "My Homepage",
    description: "This is where I write my thoughts.",
  },

  plugins: [
    `gatsby-plugin-netlify`,
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        // your WordPress source
        baseUrl: `data.kmfurniture.pl/www`,
        protocol: `https`,
        //restApiRoutePrefix: "wp-json",
        // is it hosted on wordpress.com, or self-hosted?
        hostingWPCOM: false,
        // does your site use the Advanced Custom Fields Plugin?
        useACF: true,
        verboseOutput: true,
      },
    },
    {
      resolve: "@pasdo501/gatsby-source-woocommerce",
      options: {
        // Base URL of Wordpress site
        api: "data.kmfurniture.pl/www",

        // set to false to not see verbose output during build
        // default: true
        verbose: true,

        // true if using https. otherwise false.
        https: true,
        api_keys: {
          consumer_key: "ck_5b94d750e7258d6e27258a8ac48253ff6836d92d",
          consumer_secret: "cs_faf2d229d642161c816dd7729e38fdebcb4d7d47",
        },
        // Array of strings with fields you'd like to create nodes for...
        fields: ["products"],
        // Send the API keys as query string parameters instead of using the authorization header
        // OPTIONAL: defaults to false
        query_string_auth: true,
        // Version of the woocommerce API to use
        // OPTIONAL: defaults to 'wc/v3'
        //api_version: "wc/v3",
        // OPTIONAL: How many results to retrieve *per request*
        per_page: 100,
        // OPTIONAL: Custom WP REST API url prefix, only needed if not using
        // the default wp-json prefix.
        wpAPIPrefix: "wp-json",
        // OPTIONAL: Support for URLs with ports, e.g. 8080; defaults to no port
        port: "8000",
        //
        // OPTIONAL: Encoding; default to 'utf8'
        encoding: "utf8",
        // OPTIONAL: Custom Axios config (see https://github.com/axios/axios) - note that this can override other options.
      },
    },
  ],
}
//
