#!/usr/bin/python3
# -*- coding: utf-8 -*-

def potencia(n):
	if n == 0:
		return 1
	return 2 * potencia(n - 1)


print(potencia(2))