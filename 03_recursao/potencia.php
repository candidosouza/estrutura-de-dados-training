<?php
function potencia(int $n) : int {
    if ($n == 0)
        return 1;
    return  2 * potencia($n - 1);
}

var_dump(potencia(7));
