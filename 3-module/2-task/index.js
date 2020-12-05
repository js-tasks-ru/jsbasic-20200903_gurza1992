/**
 * @param {number[]} arr
 * @param {number} a
 * @param {number} b
 * @returns {number[]}
 */


function filterRange(arr, a, b) {

  let result = arr.filter(function(number) {

    return number >= a && number <= b;

  });

  return result;

}
