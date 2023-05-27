<?php

include "./db.php";

function getPlainTree()
{
	$plainTree = getAssocResult("SELECT * FROM directory");

	return $plainTree;
}

function renderTree($plainTree, $parentId)
{
	foreach ($plainTree as $currentNode) {
		if ($currentNode["parent_id"] == $parentId) {
			$childrenCount = getChildrenCount($plainTree, $currentNode['id']);
			echo '<div class="list-item list-item_open" data-parent>';
			echo '<div class="list-item__inner">';
			if ($childrenCount != 0) 
			{
				echo '<img class="list-item__arrow" src="img/chevron-down.png" alt="chevron-down" data-open>';
			} else 
			{
				echo '<div style="height: 16px; width: 16px;"> </div>';
			}
			echo '<img class="list-item__folder" src="img/folder.png" alt="folder">';
			echo '<div>' . $currentNode["directory_name"] . '</div>';
			echo '</div>';
			if ($childrenCount != 0) 
			{
				echo '<div class="list-item__items">';
				renderTree($plainTree, $currentNode["id"]);
				echo '</div>';
			}
			echo '</div>';
		}
	}
}

function getChildrenCount($plainTree, $parentId) 
{
	$count = 0;
	foreach ($plainTree as $currentNode) {
		if ($currentNode["parent_id"] == $parentId) {
			$count = $count + 1;
		}
	}
	return $count;
}

?>

<html lang="ru">

<head>
	<meta charset="UTF-8">
	<title>Дерево директорий</title>
	<link rel="stylesheet" href="style.css">
</head>

<body>
	<div class="list-items" id="list-items">
		<?=renderTree(getPlainTree(), null)?>
	</div>
	<script type="module" src="script.js"></script>
</body>

</html>
