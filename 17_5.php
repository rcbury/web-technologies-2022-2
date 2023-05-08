<?php
$currentYear = (int)date("y");
echo $currentYear;
?>

<!DOCTYPE html>
<html lang="ru">

<head>
	<title></title>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link href="css/style.css" rel="stylesheet">
</head>

<body>
	<span>
		<?php echo $currentYear; ?>
		<?= $currentYear ?>
	</span>
</body>

</html>