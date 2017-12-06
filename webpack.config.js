var webpack = require('webpack'),
    path = require('path'),
    yargs = require('yargs');

var libraryName = 'iland',
    outputFile;

var plugins = [];

if (yargs.argv.p) {
  plugins.push(new DtsBundlePlugin());
  plugins.push(new webpack.optimize.UglifyJsPlugin({minimize: true}));
  outputFile = libraryName + ".min.js";
} else {
  outputFile = libraryName + ".js";
}

var config = {
  entry: './src/index.ts',
  output: {
    filename: outputFile,
    path: path.resolve(__dirname, 'build'),
    library: libraryName,
    libraryTarget: 'umd',
    umdNamedDefine: true
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
    "rxjs": {
      commonjs: "rxjs",
      commonjs2: "rxjs",
      amd: "rxjs",
      root: "rxjs"
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
  },
  plugins: plugins
};

module.exports = config;

function DtsBundlePlugin() {
}

DtsBundlePlugin.prototype.apply = function(compiler) {
  compiler.plugin('done', function() {
    var dts = require('dts-bundle');
    dts.bundle({
      name: libraryName,
      main: 'build/build/src/index.d.ts',
      out: '../../' + libraryName + '.d.ts',
      removeSource: true,
      outputAsModuleFolder: true
    });
  });
};
