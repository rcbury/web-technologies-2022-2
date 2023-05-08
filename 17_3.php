<?php

function add($a, $b)
{
	return $a + $b;
}

function multi($a, $b)
{
	return $a * $b;
}

function diff($a, $b)
{
	return $a - $b;
}

function div($a, $b)
{
	return $a / $b;
}

$a = add(5,6);
$b = multi(33,66);
$c = diff(66,33);
$d = div(100,1);

echo $a . "\n";
echo $b . "\n";
echo $c . "\n";
echo $d . "\n";