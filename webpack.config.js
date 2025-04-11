const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "/", // Important for dev server routing
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.svg$/,
        use: ["@svgr/webpack", "file-loader"], // Use @svgr/webpack for SVGs, fallback to file-loader
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/i, // Handle other image types
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html", // Path to your template index.html
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, "public"), // Serve files from public directory
    },
    historyApiFallback: true, // Important for single-page apps
    hot: true, // Enable hot module replacement
    port: 3000, // You can choose any port
    open: true, // Open browser automatically
  },
  resolve: {
    extensions: [".js", ".jsx"], // Automatically resolve these extensions
    alias: {
      "@src": path.resolve(__dirname, "src/"), // Add alias for src directory
    },
  },
};
