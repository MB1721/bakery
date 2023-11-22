function camelCaseContext(path, pascalCase = false, extList = ['png','jpeg','jpg','svg','gif','tiff','raw']) { // camel case context keys
  let extRegexStr = extList.reduce((str, ext) => str + ext + '|','\\.(');
  extRegexStr = extRegexStr.replace(/\|$/, '');
  extRegexStr += ')$';
  
  const imgRegex = new RegExp(extRegexStr, 'gi'); // capture image extention
  const pathRegex = /.\//; // capture path
  const wordBreakRegex = /-\w/g; // capture word break
  
  const pathIdx = path.search(pathRegex);
  const extIdx = path.search(imgRegex);
  let fileName = path.slice(pathIdx+2, extIdx) // retrieve file name without path and extension
  if (pascalCase) fileName = fileName.replace(fileName[0], fileName[0].toUpperCase());
  
  const wordBreaks = fileName.match(wordBreakRegex); // return an array of hyphenated chars
  if (wordBreaks) { // process file name if hyphens exist
    // Create an array from the hyphenated chars. 
    // Replace with capital chars and erase hyphens.
    const replacements = wordBreaks.map(letter => letter.replace(letter, letter[1].toUpperCase()));
    let replacementIdx = 0; // track next letter to replace
    
    // replace hyphenated instances with capital chars
    for (let i = 0; i < fileName.length - 1; i++) { 
      const testSubStr = fileName[i] + fileName[i + 1]; // analyze a pair of chars
      if (wordBreakRegex.test(testSubStr)) {
        // modify file name
        fileName = fileName.replace(testSubStr, replacements[replacementIdx++]);
      }
    }
  }
  return fileName;
}