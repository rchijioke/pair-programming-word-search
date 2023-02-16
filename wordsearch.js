const wordSearch = (letters, word) => {
    const horizontalJoin = letters.map(ls => ls.join(''))
    for (l of horizontalJoin) {
      if (l.includes(word)) {
        return true;
      }
      for (col of horizontalJoin[0]) {
        if (col.includes(word))
          return true;
      }
    }
    
    return false;
  }

module.exports = wordSearch