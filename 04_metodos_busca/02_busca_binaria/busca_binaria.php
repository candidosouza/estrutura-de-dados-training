<?php

function busca_binaria(array $list,  int $search) : int {
    $inicio = 0;
    $fim = count($list) - 1;
    $centro = 0;

    while ($inicio <= $fim) {
        $centro = $inicio + ($fim - $inicio) / 2;

        if ($search == $list[$centro]) {
            return $centro;
        } else if ($search > $list[$centro]) {
            $inicio = $centro + 1;
        } else {
            $fim = $centro - 1;
        }
    }
    return -1;
}

$list = [3, 4, 11, 12, 21, 34, 65, 77, 78, 98];

$result = busca_binaria($list, 77);

var_dump($result);
