const { exec } = require('child_process');
const { platform } = require('process');

switch (platform) {
  case 'darwin':
  case 'linux':
    exec("rm -r dist/*");
  case 'win32':
    exec("rmdir /S /Q dist\\*");
}