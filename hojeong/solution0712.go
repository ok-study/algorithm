package main

import (
	"fmt"
	"sort"
)

func exec0712() {
	n := 6
	times := []int{10, 7}
	fmt.Println(solution0712(n, times))
}

func solution0712(n int, times []int) int64 {
	// 오름차순 정리
	sort.Ints(times)

	// 최소값 - 1분
	left := 1
	// 최대값 - 제일 느린 심사관(배열의 마지막 원소)이 혼자 n명 다 할 때의 걸릴 시간
	right := times[len(times)-1] * n
	// 값 초기화
	var answer int64 = int64(right)

	// 최소값보다 최대값이 적을때까지 loop
	for left <= right {
		// 중간 값을 구해서
		mid := (left + right) / 2
		sum := 0
		// 각 심사관이 해당 시간동안 처리 가능한 인원수를 구하고
		for i := 0; i < len(times); i++ {
			sum += mid / times[i]
		}
		// 그 인원수가 주어진 인원수에 부합하는지 체크
		// 1. 인원수보다 적다 -> left의 포인트를 mid + 1로 옮기고 다시 loop
		if sum < n {
			left = mid + 1
			// 2. 인원수보다 많거나 같음 -> right 의 포인트를 mid - 1로 옮기고 loop & answer에 값 저장
		} else {
			right = mid - 1
			answer = int64(mid)
		}
	}
	return answer
}
