var array = [3, 30, 34, 5, 9]

var list: [String] = []

import Foundation

// MARK: 나의 존재

func solution(_ numbers: [Int]) -> String {
  let list = numbers.sorted { Int("\($0)\($1)")! > Int("\($1)\($0)")! }
  
  if list[0] == 0 { return "0" }
  
  return list.reduce("") { $0 + "\($1)" }
}

let item = solution(array)

print("answer: \(item)")

// MARK: 1위

func solution2(_ numbers: [Int]) -> String {
  let sortedNumbers = numbers.sorted {
    Int("\($0)\($1)")! > Int("\($1)\($0)")!
  }
  
  let answer = sortedNumbers.map { String($0) }.reduce("") { $0 + $1 }
  return sortedNumbers.first == 0 ? "0" : answer
}

// 다른 코드들
// 정렬된 배열을 String으로 타입 컨버팅을 먼저 함
// sort 이후 if가 아닌 filter를 통해 0을 캐치한 후 joiend를 이용함: string 배열을 합치는 함수
// .orderedAscending 옵션을 이용해 sort

