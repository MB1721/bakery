export default class keyList {
  constructor(newList = []) {
    this.keys = {};
    this.numKeys = 0;
    newList.forEach(definedKey => this.ammendList(definedKey));
  }

  get keyMap() {
    return this.keys;
  }

  ammendList(newKey) {
    this.keys[newKey] = {instances: 1};
    this.numKeys++;
  }

  unicodeKey(repeatKey) {
    const unicodeSeq = repeatKey.split('').reduce((intStr, ch) => intStr + ch.codePointAt(0).toString(), '');
    return Number(unicodeSeq);
  }

  generateKey(unique) {
    unique = unique.toString();
    const exists = this.keys[unique] ? true : false;
    if (!exists) {
      this.ammendList(unique);
      return unique;
    } else {
      const unicode = this.unicodeKey(unique) * ++this.keys[unique].instances;
      const modifiedRepeatKey = unique + unicode.toString();
      return modifiedRepeatKey; 
    }
  }
}