function solution(begin, target, words) {
  //조건
  //1. 한 번에 한 개의 알파벳만 바꿀 수 있습니다.
  //2. words에 있는 단어로만 변환할 수 있습니다.
  //ex) 예를 들어 begin이 "hit", target가 "cog", words가 ["hot","dot","dog","lot","log","cog"]라면 "hit" -> "hot" -> "dot" -> "dog" -> "cog"와 같이 4단계를 거쳐 변환할 수 있습니다.
  let answer = 0;
  const temp = [];
  const visit = [];
  temp.push([begin, answer]); // temp에 시작단어 및 카운트 숫자를 넣는다.

  if (!words.inludes(target)) return 0;

  while (temp.length) {
    // 계속 temp돌린다
    let [currentWord, count] = temp.shift();
    if (currentWord === target) return count; // 현재 단어와 목표 단어가 같으면 그때의 count를 리턴!
    words.forEach((word, index) => {
      // 단어들이 들어있는 배열을 계속 돌린다.
      const idxArr = []; //
      const stringArr = [...word]; // for문을 돌려서 currentWord랑 비교하기 위해, 단어를 string쪼개서 배열로 만든다
      stringArr.forEach((string, index) => {
        // string으로 쪼개진 배열을 for문 돌려서 currentWord랑 한글자씩 비교하고 다르다면 그 다른 index를 idxArr에 푸시한다.
        string !== currentWord[index] && idxArr.push(index);
      });
      if (idxArr.length == 1 && !visit[index]) {
        // 한글자만 달라야 하므로 idx의 length가 1일때 && 그리고 방문하지 않은 index일때만 업데이트를 시킨다.
        visit[index] = 1;
        temp.push([word, count + 1]); // 조건에 맞는 경우만 단어와 경로 업데이트 숫자를 temp에 넣는다.
      }
    });
  }
  return answer;
}

solution("hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog"]);
