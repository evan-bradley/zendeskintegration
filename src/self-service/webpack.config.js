const path = require("path");

module.exports = {
  mode: "development",
  entry: {
    CoveoForZendesk: "./src/Index",
  },
  output: {
    path: path.resolve("./bin/commonjs"),
    filename: `[name].js`,
    libraryTarget: "umd",
    library: "CoveoForZendesk",
    publicPath: "/commonjs",
  },
  externals: [
    {
      // Defines the module "coveo-search-ui" as external, "Coveo" is defined in the global scope.
      // This requires you to load the original CoveoJsSearch.js file in your page.
      "coveo-search-ui": "Coveo",
    },
  ],
  resolve: {
    extensions: [".ts", ".js"],
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: "ts-loader",
        options: {
          configFile: path.resolve("./tsconfig.json"),
          compilerOptions: {
            target: "es6",
          },
        },
      },
      {
        test: /\.html$/,
        use: "raw-loader",
      },
    ],
  },
  plugins: [],
  bail: true,
};
