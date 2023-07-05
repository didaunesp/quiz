const withAntdLess = require("next-plugin-antd-less");

module.exports = withAntdLess({
  cssLoaderOptions: {
    // ...
    mode: "local",
    // localIdentName: __DEV__ ? "[local]--[hash:base64:4]" : "[hash:base64:8]", // invalid! for Unify getLocalIdent (Next.js / CRA), Cannot set it, but you can rewritten getLocalIdentFn
    exportLocalsConvention: "camelCase",
    exportOnlyLocals: false,
    // ...
    getLocalIdent: (context, localIdentName, localName, options) => {
      return "whatever_random_class_name";
    },
  },

  // for Next.js ONLY
  nextjs: {
    localIdentNameFollowDev: true, // default false, for easy to debug on PROD mode
  },

  // Other Config Here...

  webpack(config) {
    return config;
  },
});
