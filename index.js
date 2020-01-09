class Formatter {
  //add static methods here
  static capitalize(str) {
     var reg = /(\b[a-z](?!\s))/g
     return str.replace(reg, (match) => match.toUpperCase())
  };

  static santitize(str) {
    // removes non-alphanumeric characters except for dash, single quote, and space
  };

  static titleize(str) {
    // capitalizes all words in a stentence xcept 'the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', and 'from'
      // always capitalizes the first word
  };
}
