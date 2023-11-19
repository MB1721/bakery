export default function developerMessage() {
  if (process.env.NODE_ENV !== 'production') {
    console.log('Start developing me!\nYou may go to "/src/developer-message.js" to delete this file.\nThen delete `developerMessage();` in /src/index.tsx (Ln 7, Col 1.)');
    console.log('');
  }
}