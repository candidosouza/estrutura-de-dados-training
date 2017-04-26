package main

import "fmt"

func main() {
	list := []int{3, 4, 11, 12, 21, 34, 65, 77, 78, 98}

	fmt.Println(busca_binaria(list, 77))
}

func busca_binaria(list []int, search int) int {
	inicio := 0
	fim := len(list) - 1
	centro := 0

	for inicio <= fim {
		centro = inicio + (fim-inicio)/2

		if search == list[centro] {
			return centro
		} else if search > list[centro] {
			inicio = centro + 1
		} else {
			fim = centro - 1
		}
	}

	return -1
}
