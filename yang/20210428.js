// 가장 먼 노드
function solution(n, edge) {
  const list = {};
  for (let i = 0; i < edge.length; i++) {
    let [a, b] = edge[i];
    list[a] ? list[a].push(b) : (list[a] = [b]);
    list[b] ? list[b].push(a) : (list[b] = [a]);
  }
  // console.log({list})
  // {
  //   list: {
  //     '1': [ 3, 2 ],
  //     '2': [ 3, 1, 4, 5 ],
  //     '3': [ 6, 4, 2, 1 ],
  //     '4': [ 3, 2 ],
  //     '5': [ 2, 7 ],
  //     '6': [ 3 ],
  //     '7': [ 5 ]
  //   }
  // }

  const visited = new Array(n + 1).fill(false);
  const nodesPerEachStep = [1];
  visited[1] = true;
  let answer = 0;
  while (nodesPerEachStep.length !== 0) {
    let len = nodesPerEachStep.length;
    answer = len;
    for (let i = 0; i < len; i++) {
      let currentNode = nodesPerEachStep[0];
      nodesPerEachStep.shift();
      for (let j = 0; j < list[currentNode].length; j++) {
        let next = list[currentNode][j];
        if (!visited[next]) {
          visited[next] = true;
          nodesPerEachStep.push(next);
        }
      }
    }
  }
  return answer;
}
