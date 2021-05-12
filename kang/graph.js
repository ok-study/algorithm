
solution(6, [[3, 6], [4, 3], [3, 2], [1, 3], [1, 2], [2, 4], [5, 2]]);


function solution(n, edge) {
  var level = [[1]],
      sub, data, index;

  for(var index in edge) {
    edge[index].sort((a, b) => a - b); //각 1차원 배열 sort
  }
  edge.sort((a, b) => (a[0] - b[0] || a[1] - b[1])); // 2차원 배열 sort
  sub = [];
  
	index = 0;
  while(edge.length != 0) {
    data = edge.shift();
    if(level[index].includes(data[0])) {
      push(level, data, sub, index);
    } else {
      level.push(sub);
      index++;
      sub = [];
      push(level, data, sub, index);
    }
  }
  level.push(sub);
  console.log(level);

  return level[level.length -1].length
}

function push(level, data, sub, index) {
  if(level[index] != undefined && level[index].includes(data[1])) {
    return;
  }
  for(var i = 0 ; i < level[index].length ; i ++) {
    if(data[0] == level[index][i]) {
      if(!sub.includes(data[1])) {
        sub.push(data[1]);
      }
      break;
    }
  }
}