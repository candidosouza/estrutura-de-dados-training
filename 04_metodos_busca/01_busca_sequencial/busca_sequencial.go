package main

import "fmt"

func main() {
	list := []int{1, 2, 3, 4, 5, 6, 7, 8, 9, 10}

	fmt.Println(busca_sequencial(list, 7))
}

func busca_sequencial(list []int, search int) int {

	if len(list) < search {
		return -1
	} else {
		for i := 0; i <= len(list); i++ {
			if list[i] == search {
				return i
			}
		}
	}
	return -1
}
