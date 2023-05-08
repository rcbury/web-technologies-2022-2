<?php
function power($val, $pow)
{
	switch (true) 
	{
		case $pow == 1: return $val;
		case $pow > 1: return $val * power($val, $pow - 1);
		case $pow == -1: return 1 / $val;
		case $pow < -1: return 1 / $val * power($val, $pow + 1);
		case $pow == 0: return 1;
	}
}

echo power(12, 3);