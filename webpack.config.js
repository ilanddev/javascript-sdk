var webpack = require('webpack'),
    path = require('path');

var libraryName = 'iland',
    outputFile = libraryName + ".js";

var config = {
  entry: './src/index.ts',
  output: {
    filename: outputFile,
    path: path.resolve(__dirname, 'build'),
    library: libraryName,
    libraryTarget: 'umd'
  },
  externals: {
    "axios": {
      commonjs: "axios",
      commonjs2: "axios",
      amd: "axios",
      root: "axios"
    },
    "keycloak-js": {
      commonjs: "keycloak-js",
      commonjs2: "keycloak-js",
      amd: "keycloak-js",
      root: "Keycloak"
    },
    "rxjs-es": {
      commonjs: "rxjs-es",
      commonjs2: "rxjs-es",
      amd: "rxjs-es",
      root: "rxjs-es"
    },
    "tslib": {
      commonjs: "tslib",
      commonjs2: "tslib",
      amd: "tslib",
      root: "tslib"
    }
  },
  resolve: {
    // Add '.ts' and '.tsx' as a resolvable extension.
    extensions: [".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
  },
  module: {
    loaders: [
      {
        test: /\.tsx?$/,
        exclude: /.*?node_modules/,
        loader: "ts-loader" }
    ]
  }
};

module.exports = config;