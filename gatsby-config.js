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
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        // your WordPress source
        baseUrl: `wordpress.kmfurniture.pl/`,
        protocol: `http`,
        // is it hosted on wordpress.com, or self-hosted?
        hostingWPCOM: false,
        // does your site use the Advanced Custom Fields Plugin?
        useACF: true,
      },
    },
    {
      resolve: "@pasdo501/gatsby-source-woocommerce",
      options: {
        // Base URL of Wordpress site
        api: "wordpress.kmfurniture.pl/",

        // set to false to not see verbose output during build
        // default: true
        verbose: true,

        // true if using https. otherwise false.
        https: false,
        api_keys: {
          consumer_key: "ck_3f2fa9654eed764a19a8e04803d0379c7f737c8c",
          consumer_secret: "cs_91d64ba457780ee5095127b6e625b20feeb78e7e",
        },
        // Array of strings with fields you'd like to create nodes for...
        fields: ["products", "products/categories", "products/attributes"],
        // Send the API keys as query string parameters instead of using the authorization header
        // OPTIONAL: defaults to false
        query_string_auth: false,
        // Version of the woocommerce API to use
        // OPTIONAL: defaults to 'wc/v3'
        api_version: "wc/v3",
        // OPTIONAL: How many results to retrieve *per request*
        per_page: 100,
        // OPTIONAL: Custom WP REST API url prefix, only needed if not using
        // the default wp-json prefix.
        wpAPIPrefix: "wp-rest",
        // OPTIONAL: Support for URLs with ports, e.g. 8080; defaults to no port
        port: "8000",
        // OPTIONAL: Encoding; default to 'utf8'
        encoding: "utf8",
        // OPTIONAL: Custom Axios config (see https://github.com/axios/axios) - note that this can override other options.
        axios_config: {
          // Axios config options
        },
      },
    },
  ],
}
