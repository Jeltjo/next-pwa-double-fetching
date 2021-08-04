const withImages = require("next-images");
const withPWA = require("next-pwa");
const runtimeCaching = require("next-pwa/cache");
const path = require("path");
const Webpack = require("webpack");
const dev = process.env.NODE_ENV !== "production";

module.exports = withPWA({
	pwa: {
		disable: false,
		register: true,
		runtimeCaching,
		dest: "public",
		sw: "/sw.js",
		publicExcludes: ["!static/fonts/*"],
		//dynamicStartUrl: false
	},
	reactStrictMode: true,
});
