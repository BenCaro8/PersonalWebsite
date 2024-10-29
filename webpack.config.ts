import path from 'path';
import webpack from 'webpack';
import HTMLWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import CopyPlugin from 'copy-webpack-plugin';
import CompressionPlugin from 'compression-webpack-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';

const isDevelopment = process.env.NODE_ENV !== 'production';

// define plugins
const plugins: webpack.WebpackPluginInstance[] = [
  new HTMLWebpackPlugin({
    template: './public/index.html',
  }),
  new CopyPlugin({
    patterns: [
      { from: './public/*.png', to: '.' },
      { from: './public/*.jpg', to: '.' },
      { from: './public/*.pdf', to: '.' },
      { from: './public/shaders/*.glsl', to: '.' },
    ],
  }),
  new CompressionPlugin(),
];

if (isDevelopment) {
  plugins.push(new ReactRefreshWebpackPlugin());
  plugins.push(new BundleAnalyzerPlugin());
} else {
  plugins.push(new MiniCssExtractPlugin());
}

isDevelopment
  ? plugins.push(new ReactRefreshWebpackPlugin())
  : plugins.push(new MiniCssExtractPlugin());

const config: webpack.Configuration = {
  mode: isDevelopment ? 'development' : 'production',
  devServer: {
    hot: true,
    port: 3000,
    historyApiFallback: true,
  },
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'index.js',
    publicPath: '/',
  },
  plugins,
  resolve: {
    modules: [path.resolve(__dirname, './src'), 'node_modules'],
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.scss', '.css'],
    alias: {
      // absolute path importing files
      '@pages': path.resolve(__dirname, './src/pages'),
    },
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: ['html-loader'],
      },
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: require.resolve('babel-loader'),
            options: {
              plugins: [
                isDevelopment && require.resolve('react-refresh/babel'),
              ].filter(Boolean),
            },
          },
        ],
      },
      {
        test: /\.scss$/i,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          {
            loader: 'css-loader',
            options: {
              modules: true,
            },
          },
          'postcss-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.css$/i, // separated out as tailwind uses global scope not modules...
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
    ],
  },
};

export default config;
