function solution(progresses, speeds) {
  var answer = [0];
  var left = 0;
  var day = 1;
  var point = 0;
  var index = 0;
  var flag = true;
  while(true) {
    if(progresses[index] + (speeds[index] * day) < 100) {
      if(!flag) {
        answer.push(0);
        point+=1;
      }
      left = 100 - (progresses[index] + (speeds[index] * day));
      day = day + Math.ceil(left / speeds[index]);
      answer[point] +=1;
    } else {
      answer[point] += 1;
    }
    flag = false;
    index+=1;
    if(index == progresses.length) {
      break;
    }
  }
  return answer;
}