<?php

function getCurrentTimeString() 
{
    $currentHour = (int)date("h");
    $currentMinute = (int)date("m");
    $currentHourSuffix = getHourSuffix($currentHour);
    $currentMinuteSuffix = getMinuteSuffix($currentMinute);
    return "$currentHour $currentHourSuffix $currentMinute $currentMinuteSuffix";
}

function getHourSuffix($hour) 
{
    $lastHourDigit = $hour % 10;
    if ($hour >= 5 and $hour <= 20) 
    {
        return "часов";        
    } elseif ($lastHourDigit == 1) {
        return 'час';
    } elseif ($lastHourDigit == 2 or $lastHourDigit == 3 or $lastHourDigit == 4) {
        return 'часа';
    }
}

function getMinuteSuffix($minute) 
{
    $lastMinuteDigit = $minute % 10;
    if ($minute >= 5 and $minute <= 20) 
    {
        return "минут";        
    } elseif ($lastMinuteDigit == 1) {
        return 'минута';
    } elseif ($lastMinuteDigit == 2 or $lastMinuteDigit == 3 or $lastMinuteDigit == 4) {
        return 'минуты';
    }
}

$currentTimeString = getCurrentTimeString();

$h1 = 
"<h1>
Я заголовок.
Текущее время: $currentTimeString
</h1>";

$currentYear = (int)date("y");

$title =
"<title>
Текущий год $currentYear
</title>";

$page = 
"
<!DOCTYPE html>
<html lang='ru'>
	<head>
		$title
		<meta charset='UTF-8'>
		<meta name='viewport' content='width=device-width, initial-scale=1'>
	</head>
	<body>
        $h1
	</body>
</html>";

echo $page;