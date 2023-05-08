<?php
	function getMenu($menuArray) 
	{
		$res = "";
		foreach ($menuArray as $item) 
		{
			$content = is_array($item) ? "<ul>".getMenu($item)."</ul>" : $item;
			$res = $res."<li>$content</li>";
		}
		return $res;
	}
?>

<!DOCTYPE html>
<html lang="ru">

<head>
	<title></title>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
</head>

<body>
	<div>
		<ul>
			<?php
				$array = array(
					"Тюменская область", array("Тюмень", "Ялуторовск"),
					"Московская область", array("Москва", "Зеленоград")
				);
				$menu = getMenu($array);
				echo $menu; 
			?>
		</ul>
	</div>
</body>

</html>