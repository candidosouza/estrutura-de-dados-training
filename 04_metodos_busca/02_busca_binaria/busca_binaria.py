#!/usr/bin/python3
# -*- coding: utf-8 -*-

def busca_binaria(list, search):
    inicio = 0
    fim = len(list) - 1
    centro = 0

    while inicio <= fim:
        centro = inicio + (fim - inicio) / 2
        if search == list[centro]:
            return centro
        elif search > list[centro]:
            inicio = centro + 1
        else:
            fim = centro - 1
    return -1



list = [3, 4, 11, 12, 21, 34, 65, 77, 78, 98]
print(busca_binaria(list, 77))