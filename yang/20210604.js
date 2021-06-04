//가장 큰 수
//ex: numbers=[2, 20, 220];
const solution = (numbers) => {
  // 두줄 끝내기!
  // return numbers.sort((a,b)=> { const [stringA, stringB] = [String(a),String(b)]; return Number(stringA+stringB) >= Number(stringB+stringA) ? -1: 1;
  // }).reduce((acc, next)=> { if(acc === 0||acc === "0" && next === 0){ return "0";} return String(acc)+ String(next)})

  //2 => 두 숫자중에 누가 먼저 올 것인가? 두둔...
  const whichIsFirst = (a, b) => {
    const stringA = String(a);
    const stringB = String(b);
    // a+b랑 더한게 더 큰가? vs b+a랑 더한게 더 큰가? 체킹해서 자리를 정한다.
    return Number(stringA + stringB) >= Number(stringB + stringA) ? -1 : 1;
  };
  // 1 => 버블 sorting  시작!
  const sortedArr = numbers.sort((a, b) => whichIsFirst(a, b));

  // 3 => 고렇게 sorting한 배열을 차례대로 더해준다.
  const answer = sortedArr.reduce((acc, next) => {
    if (acc === 0 || (acc === "0" && next === 0)) {
      return "0";
    }
    return String(acc) + String(next);
  });
  return answer;
};
