<?php

function mathOperation($arg1, $arg2, $operation) 
{
	switch ($operation) 
	{
		case 'add':
			return $arg1 + $arg2;
		case 'multi':
			return $arg1 * $arg2;
		case 'diff':
			return $arg1 - $arg2;
		case 'div':
			return $arg1 / $arg2;
	}
}

echo mathOperation(5,5,'add') . "\n";