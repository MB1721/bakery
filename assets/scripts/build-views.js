const fs = require('fs/promises');
const path = require('path');
const { exec } = require('child_process');
const { stdout, stderr } = require('process');
const getViews = require('./get-views');

async function buildViews() {
  const views = await getViews();
  for (const view of views) exec(`cd "${view}" && npm i`);
}

buildViews();