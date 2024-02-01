const env = require('dotenv');
env.config();
const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');

const app = express();
const config = require('./views/pc-repair-app/webpack.dev.js');
const compiler = webpack(config);

// Tell express to use the webpack-dev-middleware and use the webpack.config.js
// configuration file as a base.
app.use(
  webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath,
  })
);

app.get('/', (req, res, next) => {
  res.send('Hello World');
});

PORT = process.env.PORT || 5670;

app.listen(PORT, () => console.log(`App listening on port: ${PORT}!\n`));