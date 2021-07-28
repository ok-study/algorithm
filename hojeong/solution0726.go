package main

import (
	"fmt"
	"strings"
)

func exec0726() {
	fmt.Println(solution0726("4177252841", 4)) // 775841
	fmt.Println(solution0726("999991", 3))     // 999
	fmt.Println(solution0726("111119", 3))     // 119
	fmt.Println(solution0726("1924", 2))       // 94
}

type Stack []string

func (s *Stack) IsEmpty() bool {
	return len(*s) == 0
}

func (s *Stack) Push(str string) {
	*s = append(*s, str)
}

func (s *Stack) Pop() (string, bool) {
	if s.IsEmpty() {
		return "", false
	} else {
		index := len(*s) - 1
		element := (*s)[index]
		*s = (*s)[:index]
		return element, true
	}
}

func solution0726(number string, k int) string {
	length := len(number) - k
	var stack Stack
	for _, char := range number {
		for len(stack) > 0 && stack[len(stack)-1] < string(char) && k > 0 {
			k -= 1
			stack.Pop()
		}
		stack.Push(string(char))
	}
	return strings.Join(stack, "")[:length]
}
