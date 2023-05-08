<?php
	function getGallery($directory) 
	{
		$res = "";
		$files = array_slice(scandir($directory),2);
		foreach ($files as $file) 
		{
			echo 
			"<div>
				<a href='$directory/$file'>
					<img style='width:300px' src='$directory/$file' />
				</a>
			</div>";
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
		<form action="upload.php" method="post" enctype="multipart/form-data">
  		Выберите картинку для загрузки:
  		<input type="file" name="fileToUpload" id="fileToUpload">
  		<input type="submit" value="Отправить" name="submit">
		</form>
	</div>
	<div style="display:flex; column-gap:20px; flex-wrap: wrap">
		<?php
			$directory = "./img/small";
			$gallery = getGallery($directory);
			echo $gallery; 
		?>
	</div>
</body>

</html>