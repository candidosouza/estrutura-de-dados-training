#!/usr/bin/python3
# -*- coding: utf-8 -*-

def busca_sequencial(list, search):
    i = 0

    while i < len(list):
        if list[i] == search:
            return i
        i += 1
    return False


list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

print(busca_sequencial(list, 10))