const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');

const app = express();
const config = require('./views/pc-repair-app/webpack.dev.js');
const compiler = webpack(config);
const path = require('path');

// Tell express to use the webpack-dev-middleware and use the webpack.config.js
// configuration file as a base.
app.use(
  webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath,
  })
);

app.use(express.static(path.resolve(__dirname, 'views/pc-repair-app/dist')));

app.get('/', (req, res, next) => {
  res.sendFile('./views/pc-repair-app/dist/index.html', {
    root: __dirname
  });
});

// configure host variables
const env = process.env;
const { PORT: port = 5670, HOST: host = 'localhost/' } = env;

app.listen(port, () => console.log(`App listening on http://${host}:${port}\n`));