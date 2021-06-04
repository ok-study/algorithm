package main

import (
	"fmt"
	"sort"
	"strconv"
	"strings"
)

func exec0513() {
	numbers := []int{3, 30, 34, 5, 9}
	fmt.Println(solution0513(numbers))
}

func solution0513(numbers []int) string {
	var strs []string
	for _, number := range numbers {
		strs = append(strs, strconv.Itoa(number))
	}

	sort.Slice(strs, func(i, j int) bool {
		return (strs[j] + strs[i]) < (strs[i] + strs[j])
	})

	result := strings.Join(strs[:], "")
	if strs[0] == "0" {
		result = "0"
	}

	return result
}
