const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { htmlWebpackPluginTemplateCustomizer } = require('template-ejs-loader');
const CopyPlugin = require('copy-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = ({ build, analyze, dev }, args) => {
  const config = {
    mode: build ? 'production' : 'development',
    devtool: dev || analyze ? 'inline-source-map' : undefined,
    entry: './src/js/index.js',
    output: {
      filename: './[name].[contenthash].js',
      path: path.resolve(__dirname, 'build'),
      clean: true,
    },
    plugins: [
      new MiniCssExtractPlugin({ filename: './[name].[contenthash].css' }), //
      new HtmlWebpackPlugin({
        filename: 'index.html',
        template: htmlWebpackPluginTemplateCustomizer({
          templatePath: './src/index.ejs',
          htmlLoaderOption: {
            sources: {
              list: [
                { tag: 'img', attribute: 'src', type: 'src' },
                { tag: 'link', attribute: 'href', type: 'src' },
              ],
            },
          },
        }),
      }),
      new CopyPlugin({
        patterns: [{ from: './public', to: './public' }],
      }),
      analyze && new BundleAnalyzerPlugin(),
    ].filter(Boolean),
    module: {
      rules: [
        {
          test: /\.m?js$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
            },
          },
        },
        {
          test: /\.css$/i,
          use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif|woff|woff2|eot|ttf)$/i,
          type: 'asset/resource',
          generator: { filename: './media/[name][ext]' },
        },
      ],
    },
    optimization: {
      moduleIds: 'deterministic',
      runtimeChunk: 'single',
      splitChunks: {
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all',
          },
        },
      },
    },
  };
  return config;
};
