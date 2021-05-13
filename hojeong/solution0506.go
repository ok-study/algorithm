package main

import (
	"fmt"
	"math"
)

func exec0506() {
	begin := "hit"
	target := "cog"
	words := []string{"hot", "dot", "dog", "lot", "log", "cog"}
	fmt.Println(solution0506(begin, target, words))
}

var answer = math.MaxInt64

func solution0506(begin string, target string, words []string) int {

	// dfs(make([]bool, len(words)), 0, begin, target, words)
	// if answer == math.MaxInt64 {
	// 	answer = 0
	// }
	answer = bfs(begin, target, words)
	return answer
}

func dfs(visited []bool, cnt int, current string, target string, words []string) {
	fmt.Printf("current : %s , target : %s, count : %d, answer : %d, isMatched : %v\n", current, target, cnt, answer, current == target)
	if current == target {
		answer = min(cnt, answer)
	}

	for i := 0; i < len(words); i++ {
		if !visited[i] && checkOnlyOneCharIsDiff(current, words[i]) {
			visited[i] = true
			dfs(visited, cnt+1, words[i], target, words)
			visited[i] = false
		}
	}
}

func checkOnlyOneCharIsDiff(current, target string) bool {
	cnt := 0
	for i := 0; i < len(target); i++ {
		if current[i] != target[i] {
			if cnt == 1 {
				return false
			}
			cnt++
		}
	}
	return cnt == 1
}

func min(a, b int) int {
	if a < b {
		return a
	}
	return b
}

type vertex struct {
	word  string
	level int
}

func bfs(begin string, target string, words []string) int {
	isIncluded := false
	for _, w := range words {
		if target == w {
			isIncluded = true
		}
	}
	if !isIncluded {
		return 0
	}
	q := []vertex{}
	visited := make([]bool, len(words))
	first := vertex{
		word:  begin,
		level: 1,
	}
	q = append(q, first)

	for len(q) > 0 {
		poll := q[0]
		q = q[1:]
		if checkOnlyOneCharIsDiff(poll.word, target) {
			return poll.level
		}
		for i, w := range words {
			if !visited[i] && checkOnlyOneCharIsDiff(poll.word, w) {
				v := vertex{
					word:  words[i],
					level: poll.level + 1,
				}
				q = append(q, v)
				visited[i] = true
			}
		}
	}

	return 0
}
