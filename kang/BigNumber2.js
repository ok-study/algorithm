
// solution([90,908,89,898,10,101,1,8,9])
function solution(numbers) {
  let answer = '';
  result = quickSort(numbers, 0, numbers.length - 1).join('').replace(/(^0+)/, "");
  return result === '' ? "0" : result
}

function swap(items, leftIndex, rightIndex){
    var temp = items[leftIndex];
    items[leftIndex] = items[rightIndex];
    items[rightIndex] = temp;
}
function partition(items, left, right) {
    var pivot   = items[Math.floor((right + left) / 2)],
        i = left,
        j = right;
    while (i <= j) {
        while (compare(items[i], pivot)) {
            i++;
        }
        while (compare(pivot, items[j])) {
            j--;
        }
        if (i <= j) {
            swap(items, i, j); 
            i++;
            j--;
        }
    }
    return i;
}

function quickSort(items, left, right) {
    var index;
    if (items.length > 1) {
        index = partition(items, left, right);
        if (left < index - 1) {
            quickSort(items, left, index - 1);
        }
        if (index < right) { 
            quickSort(items, index, right);
        }
    }
    return items;
}

function compare(first, second) {
  let firstStr = (first+'').split("");
  let secondStr = (second+'').split("");
  let temp, temp2

  if(firstStr.length >= secondStr.length) {
    for( var idx in secondStr) {
      if(firstStr[idx] != secondStr[idx]) {
        return firstStr[idx] > secondStr[idx];
      }
    }
    temp = firstStr.slice(secondStr.length).join('');
    temp2 = secondStr.join('');
    return (temp+temp2 > temp2+temp);
  } else {
    for( var idx in firstStr) {
      if(firstStr[idx] != secondStr[idx]) {
        return firstStr[idx] > secondStr[idx];
      }
    }  
    if(firstStr.length == secondStr.length) {
      return false;
    }   
    temp = secondStr.slice(firstStr.length).join('');
    temp2 = firstStr.join('');
    return (temp+temp2 < temp2+temp); 
  }
}