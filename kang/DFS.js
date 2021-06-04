
solution("hit","cog",	["hot", "dot", "dog", "lot", "log", "cog"])
function solution(begin, target, words) {
  var answer = 0;
  let answers = [];

  words.forEach((el, idx, ary) => { 
    //재귀로 처리해야할 부분
    //dog - log 때문에 5회로 나옴 
    //dog - cog로 넘어가려면? 
    dfs(begin, target, ary, answers, 0);
    // while(copy.length) {
    //   word = copy.shift();
    //   console.log(word);
    //   if(word == target || copy.length == 0) {
    //     if(canChange(temp, word)){
    //       temp = word;
    //       answers.push(count+1);
    //     }
    //     break;
    //   }
    //   if(canChange(temp, word)) {
    //     temp = word;
    //     count+=1;
    //   }
    // }
    ary.push(ary.shift());
  })
  console.log(Math.min.apply(null, answers));
}

function dfs(begin, target, copy, answers, count){
  let list = copy.slice();
  let word = list.shift();
  if(word == target || list.length == 0) {
    if(canChange(begin, word)) {
      answers.push(count+1);
    }
    return
  }
  if(canChange(begin, word)) {
      dfs(word, target, list, answers, count+1);
    }
  dfs(begin, target, list, answers, count);
}

function canChange(word, target) {
  let count = 0;
  let chAry = word.split("");
  
  chAry.forEach((el, idx) => {
    if(el != target[idx]) count++;
  });
  return count == 1;
}