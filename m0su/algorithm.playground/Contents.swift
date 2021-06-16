var array = [3, 30, 34, 5, 9]

var list: [String] = []

import Foundation

func solution(_ numbers: [Int]) -> String {
  permutate(0, array: numbers)
  print("list: \(list)")
  let max = list.max() ?? ""
  
  return max
}

func permutate(_ index: Int, array: [Int]) {
  if index == array.count {
    list.append(array.map { "\($0)" }.joined())
    return
  }
  
  var array = array
  
  for i in index..<array.count {
    array.swapAt(index, i)
    permutate(index + 1, array: array)
    array.swapAt(index, i)
  }
}
let item = solution(array)

print("answer: \(item)")

