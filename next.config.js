const withSass = require("@zeit/next-sass");
const withCSS = require("@zeit/next-css");
const withFonts = require("nextjs-fonts");
const withPWA = require("next-pwa");
const withPlugins = require("next-compose-plugins");

module.exports = withPlugins([withPWA, withSass, withCSS, withFonts], {
  pwa: {
    dest: "public"
  },
  webpack(config, options) {
    config.module.rules.push({
      test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
      use: {
        loader: "url-loader",
        options: {
          limit: 100000
        }
      }
    });

    return config;
  }
});
