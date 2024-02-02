const path = require('path');
const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const dotenv = require('dotenv');
dotenv.config();

// set up application-level middleware
const app = express();

// set up webpack
const webpackConfig = require('./views/pc-repair-app/webpack.dev.js');
const compiler = webpack(webpackConfig);
const publicPath = webpackConfig.output.publicPath;

app.use(
  webpackDevMiddleware(compiler, {
    publicPath: publicPath,
  })
);

app.use(express.static(publicPath));

// configure main website routes
app.get('/', (req, res, next) => {
  res.send('Hello World');
});

// configure repair app routes
const repairAppDir = path.resolve(__dirname, 'views/pc-repair-app/');

app.get('/pc-repair-clinic', (req, res, next) => {
  res.sendFile('index.html', {
    root: path.resolve(repairAppDir, 'dist/')
  });
});

// configure host variables
const env = process.env;
const { PORT: port = 5670, HOST: host = 'localhost/' } = env;

app.listen(port, () => console.log(`App listening on http://${host}:${port}\n`));