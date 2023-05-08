<?php

$a = -15;
$b = -60;

if ($a >= 0 and $b >= 0) {
	echo $a - $b;
} elseif ($a < 0 and $b < 0) {
	echo $a * $b;
} else {
	echo $a + $b;
}