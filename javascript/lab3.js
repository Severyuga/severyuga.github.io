export function getDecimal(num) {
    if (typeof num !== 'number' || !Number.isFinite(num)) {
      throw new Error('num должен быть конечным числом');
    }
  
    let decimal = Math.abs(num) % 1;
  
    if (num < 0) {
      decimal = 1 - decimal;
    }
  
    return decimal;
  }

  export function normalizeUrl(url) {
    if (typeof url !== 'string') {
      throw new Error('url должен быть строкой');
    }
  
    if (!url.startsWith('http://') && !url.startsWith('https://')) {
      url = 'https://' + url;
    }
  
    return url;
  }
 

  function checkSpam(str) {
    if (typeof str !== 'string') {
      throw new Error('str должен быть строкой');
    }
  
    const lowerStr = str.toLowerCase();
    return lowerStr.includes('viagra') || lowerStr.includes('xxx');
  }

  function checkSpam(str) {
    if (typeof str !== 'string') {
      throw new Error('str должен быть строкой');
    }
  
    const lowerStr = str.toLowerCase();
    return lowerStr.includes('viagra') || lowerStr.includes('xxx');
  }

  function truncate(str, maxlength) {
    if (typeof str !== 'string') {
      throw new Error('str должен быть строкой');
    }
  
    if (typeof maxlength !== 'number' || maxlength < 1) {
      throw new Error('maxlength должен быть положительным числом');
    }
  
    if (str.length <= maxlength) {
      return str;
    }
  
    const truncatedStr = str.slice(0, maxlength - 1) + '\u2026';
    return truncatedStr;
  }

  function ucFirst(str) {
    if (typeof str !== 'string') {
      throw new Error('str должен быть строкой');
    }
  
    if (str.length === 0) {
      return '';
    }
  
    const firstChar = str.charAt(0).toUpperCase();
    const restChars = str.slice(1);
    return firstChar + restChars;
  }
  
  function camelize(str) {
    if (typeof str !== 'string') {
      throw new Error('str должен быть строкой');
    }
  
    const words = str.split('-');
    const camelizedWords = [words[0]].concat(words.slice(1).map(ucFirst));
    const camelizedStr = camelizedWords.join('');
    return camelizedStr;
  }

  