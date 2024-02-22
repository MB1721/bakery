const path = require('path');
const siteRouter = require('express').Router();

const siteApp = path.resolve(__dirname, '../views/site/dist/');

siteRouter.get('/', (req, res) => {
  res.sendFile('index.html', {
    root: siteApp
  });
});

module.exports = { router: siteRouter, static: siteApp };