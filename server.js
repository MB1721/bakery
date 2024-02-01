const dotenv = require('dotenv');
dotenv.config();
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

// configure host variables
const env = process.env;
const { PORT: port = 5670, HOST: host = 'localhost/' } = env;

app.listen(port, () => console.log(`App listening on http://${host}:${port}\n`));