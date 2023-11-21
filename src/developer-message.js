export default function developerMessage() {
  const steps = [
    '1. /src/pages/Home.js\n\tDelete Ln 3 and Ln 8',
    '2. /src/components/\n\tDelete HomeComponent/ and Sample/',
    '3. /src/App.js\n\tAdjust Ln 12, Col 17 \`pages\` array to reflect /src/pages/.',
    '4. /src/index.tsx\n\tDelete Ln 5 and Ln 6',
    '5. /src/developer-message.js\n\tDelete this file.'
  ];
  const devSteps = steps.join('\n');
  if (process.env.NODE_ENV !== 'production') {
    console.group('Start developing me!');
    console.log(devSteps);
    console.groupEnd();
  }
}