/**
 * Multi dimension Array
 *
 *
 * 1) [1,2,3]
 * 2 ) [[1,2,3],[4,5,6]]
 * 3 ) [[[1,2,3]]]
 */

const numb2DArr: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
];

const str2DArr = [
  ["1", "2", "3"],
  ["4", "5", "6"],
];

const strAndNumber2DArr: (string | number)[][] = [
  ["1", "2", "3"],
  [4, "2", 6],
];

const strArrOrNumbArr: string[][] | number[][] = [
  ["1", "2", "3"],
  ["4", "5", "6"],
];

for (let arr of numb2DArr) {
  for (let item of arr) {
    item;
  }
}
