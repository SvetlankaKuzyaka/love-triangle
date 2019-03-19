/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  return preferences.reduce(function(prev, item, index, arr){
    if ((arr[arr[item-1]-1] == index+1) && (index+1 != item)) prev += 1;
    debugger;
    return prev;
  }, 0)/3;
};
