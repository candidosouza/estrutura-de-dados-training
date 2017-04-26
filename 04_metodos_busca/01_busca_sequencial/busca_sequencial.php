<?php

function busca_sequencia(array $list,  int $search) {

    if (count($list) < $search) {
        return false;
    } else {
        for ($i = 0; $i <= count($list); $i++) {
            if ($list[$i] == $search)
                return $i;
        }
    }
}

$list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

$result = busca_sequencia($list, 7);

var_dump($result);
