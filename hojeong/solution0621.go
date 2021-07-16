/*

아래와 같이 5와 사칙연산만으로 12를 표현할 수 있습니다.

12 = 5 + 5 + (5 / 5) + (5 / 5)
12 = 55 / 5 + 5 / 5
12 = (55 + 5) / 5

5를 사용한 횟수는 각각 6,5,4 입니다. 그리고 이중 가장 작은 경우는 4입니다.
이처럼 숫자 N과 number가 주어질 때, N과 사칙연산만 사용해서 표현 할 수 있는 방법 중 N 사용횟수의 최솟값을 return 하도록 solution 함수를 작성하세요.

제한사항
N은 1 이상 9 이하입니다.
number는 1 이상 32,000 이하입니다.
수식에는 괄호와 사칙연산만 가능하며 나누기 연산에서 나머지는 무시합니다.
최솟값이 8보다 크면 -1을 return 합니다.

*/

package main

import (
	"fmt"
	"strconv"
	"strings"
)

func exec0621() {
	fmt.Print(solution0621(5, 12)) // 4
}

// go는 Set 자료구조가 없어서 키-벨류 int:struct로 된 맵으로 Set 구현 (bool로 할 수도 있으나 빈 구조체는 공간을 차지하지 않으므로 더 좋음)
type set struct{}

func add(s map[int]set, v int) map[int]set {
	s[v] = set{}
	return s
}

func solution0621(N int, number int) int {
	// 8단계 이상은 -1 리턴이니 8까지만.
	arrays := make([]map[int]set, 8)

	/*
		5
		55 5[사칙연산]5
		555 55[사칙연산]5 5[사칙연산]5[사칙연산]5 5[사칙연산]55
		5555 555[사칙연산]5 55[사칙연산]55 55[사칙연산]5[사칙연산]5 5[사칙연산]5[사칙연산]5[사칙연산]5 5[사칙연산]555
		55555 5555[사칙연산]5 555[사칙연산]55 555[사칙연산]5[사칙연산]5 55[사칙연산]55[사칙연산]5 55[사칙연산]5[사칙연산]5[사칙연산]5 5[사칙연산]5[사칙연산]5[사칙연산]5[사칙연산]5 5[사칙연산]5[사칙연산]5[사칙연산]55 5[사칙연산]5[사칙연산]555 5[사칙연산]5555
		...
		5..n개 + 이전놈[사칙연산]첫째놈 + ... 아 설명 못하겠는데 아무튼 이전놈들끼리 X자로 교차한다고 ㅋㅋㅋㅋㅋ
	*/

	for i := range arrays {
		// 가장 쉬운 것. N 반복 (N, NN, NNN, ...)
		num, _ := strconv.Atoi(strings.Repeat(strconv.Itoa(N), (i + 1)))
		arrays[i] = make(map[int]set)
		add(arrays[i], num)

		// 사칙연산 시작
		for j := 0; j < i; j++ {
			for arg1, _ := range arrays[j] {
				for arg2, _ := range arrays[i-j-1] {
					arrays[i] = add(arrays[i], (arg1 + arg2))
					arrays[i] = add(arrays[i], (arg1 - arg2))
					arrays[i] = add(arrays[i], (arg1 * arg2))
					if arg2 != 0 {
						arrays[i] = add(arrays[i], (arg1 / arg2))
					}
				}
			}
		}
		_, exists := arrays[i][number]
		if exists {
			return i + 1
		}
	}

	return -1
}
