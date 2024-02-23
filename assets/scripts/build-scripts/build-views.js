const { exec } = require('child_process');
const getViews = require('./get-views');

async function buildViews() {
  const views = await getViews();
  for (const view of views) exec(`cd "${view}" && npm i`);
}

buildViews();