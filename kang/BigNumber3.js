solution([90,908,89,898,10,101,1,8,9]);

function solution(numbers) {
  let answer = '';
  numbers = quickSort(numbers, 0, numbers.length - 1);
  return result === '' ? "0" : result
}

function quickSort(arr) {
  const len = arr.length;
  if(len === 0) return [];
  
  let left = [];
  let right = [];
  let pivot = arr.shift();
  let target;
  while(arr.length) {
    target = arr.shift();
    if (compare(target, pivot)) {
      left.push(target);
    } else {
      right.push(target);
    }
  }
  return quickSort(left).concat(pivot, quickSort(right));
}