 module.exports = function towelSort (matrix) {
  if(arguments.length > 0) {
    let res = [];

    for(i = 0; i < matrix.length; i++) {
      if( i % 2 === 0) {
        res = res.concat( matrix[i]);
      }
      else {
        res = res.concat( matrix[i].reverse());
      }
    }
    return res;
  }
  return [];
}
