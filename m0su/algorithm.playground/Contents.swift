//놀이기구의 이용료 price : 1 ≤ price ≤ 2,500, price는 자연수
//처음 가지고 있던 금액 money : 1 ≤ money ≤ 1,000,000,000, money는 자연수
//놀이기구의 이용 횟수 count : 1 ≤ count ≤ 2,500, count는 자연수

// price가 3인 놀이기구를 4번 타고 싶은 고객이 가진 현금이 20이면
// (3*1) + (3*2) + (3*3) + (3*4) = 30
// 1n+2n+...+kn = nk(k+1)/2
// 30-20은 10

import Foundation

func solution(_ price: Int, _ money: Int, _ count: Int) -> Int64 {
  let totalPrice = price * (count * (count+1) / 2)
  
  if money >= totalPrice { return 0 }
  
  return Int64(totalPrice - money)
}


print("result: \(solution(3, 20, 4))")
