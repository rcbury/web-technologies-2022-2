<?php

function printNumbers() 
{
	$i = 0;
	do {
		$suffix = "- это ноль.";
		if ($i != 0) 
		{
			$suffix = $i % 2 == 0 ? "- чётное число" : "- нечётное число";
		}
    	echo "<div>$i $suffix</div>";
		$i++;
	} while ($i <= 10);
}

printNumbers();