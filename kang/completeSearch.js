solution("17");

  
function solution(numbers) {
  const numberAry = numbers.split('');
  const result = new Set();
  combination(numberAry, '', result)
  var answer = result.size();
  result.forEach(el=>{
    console.log(el);
    if(!isPrime(el)) {
      result.delete(el);
    }
  })
  console.log(result);
  return answer;
}


function combination(ary, str, result) {
  if(ary.length) {
    for(let i = 0 ; i < ary.length ; i ++) {
      let copy = [...ary];
      copy.splice(i,1)
      combination(copy, str + ary[i], result);
    }
  } 
  if(str > 0) {
    result.add(Number(str))
  } 
}

function isPrime(number) {
  if( number == 1) {
    return false;
  }
  if(number != 2 && number % 2 == 0) {
    return false;
  }

  let sqrt = parseInt(Math.sqrt(number));

  for(let i =  sqrt; i > 1 ; i --) {
    console.log(number / i);
    if(Number.isInteger(number / i)) return false;
  }

  return true;
}
