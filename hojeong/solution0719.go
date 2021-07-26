package main

import (
	"fmt"
	"math/big"
	"strconv"
)

func exec0719() {
	numbers := "17" // 3
	fmt.Println(solution0719(numbers))
}

type set struct{}

func add(s map[int]set, v int) map[int]set {
	s[v] = set{}
	return s
}

var (
	// numbers는 len 7 이하
	checked      = make([]bool, 7)
	primeNumbers = make(map[int]set)
)

func solution0719(numbers string) (answer int) {
	// temp := ""
	// for i := 1; i <= len(numbers); i++ {
	// 	dfs(numbers, temp, i)
	// }

	for combination := range dfsWithChannel(numbers, len(numbers)) {
		value, _ := strconv.Atoi(combination)
		_, exists := primeNumbers[value]
		if !exists {
			add(primeNumbers, value)
		}
	}

	for number := range primeNumbers {
		if big.NewInt(int64(number)).ProbablyPrime(0) {
			answer++
		}
	}

	return
}

// ver1. 그냥 dfs
func dfs(numbers, combo string, length int) {
	if len(combo) == length {
		value, _ := strconv.Atoi(combo)
		_, exists := primeNumbers[value]
		if !exists {
			add(primeNumbers, value)
			return
		}
	}

	for i := 0; i < len(numbers); i++ {
		if checked[i] {
			continue
		}
		combo += string(numbers[i])
		checked[i] = true
		dfs(numbers, combo, length)
		checked[i] = false
		combo = combo[0 : len(combo)-1]
	}
}

// ver2. go channel을 이용한 dfs
func dfsWithChannel(numbers string, length int) <-chan string {
	c := make(chan string)

	go func(c chan string) {
		defer close(c)
		addLetter(c, numbers, "", length)
	}(c)

	return c
}

func addLetter(c chan string, numbers string, combo string, length int) {
	if len(combo) == length {
		return
	}

	var newCombo string
	for i, ch := range numbers {
		if checked[i] {
			continue
		}
		newCombo = combo + string(ch)
		checked[i] = true
		c <- newCombo
		addLetter(c, numbers, newCombo, length)
		checked[i] = false
	}
}
