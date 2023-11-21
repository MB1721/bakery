export default function developerMessage() {
  const devSteps = `
    1. 
    \nGo to "/src/developer-message.js" to delete this file.\nThen delete \`developerMessage();\` in /src/index.tsx (Ln 7, Col 1.)
  `;
  if (process.env.NODE_ENV !== 'production') {
    console.group('Start developing me!');
    console.log(devSteps);
    console.groupEnd();
  }
}