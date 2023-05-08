<?php
$targetDirL = "./img/large/";
$targetDirS = "./img/small/";
$targetFileL = $targetDirL . basename($_FILES["fileToUpload"]["name"]);
$targetFileS = $targetDirS . basename($_FILES["fileToUpload"]["name"]);
$uploadOk = 1;
$imageFileType = strtolower(pathinfo($targetFileL,PATHINFO_EXTENSION));
if(isset($_POST["submit"])) {
  	$check = getimagesize($_FILES["fileToUpload"]["tmp_name"]);
  	$uploadOk =  
  		($check !== false) 
  		&& ($_FILES["fileToUpload"]["size"] <= 5000000) 
  		&& ($imageFileType == "jpeg" || $imageFileType == "png" || $imageFileType == "jpg");
}
if ($uploadOk == 0) {
	echo "Файл не был загружен.";
  } else {
	if (move_uploaded_file($_FILES["fileToUpload"]["tmp_name"], $targetFileL)) {
	  	echo "Файл ". htmlspecialchars( basename( $_FILES["fileToUpload"]["name"])). " был загружен.";
	  	switch ($imageFileType) 
		{
			case 'jpeg' || 'jpg': 
				$image = imagecreatefromjpeg($targetFileL);  
				$img = imagescale( $image, 400, 400 );
				imagejpeg($img, $targetFileS);
				break;
			case 'png': 
				$image = imagecreatefrompng($targetFileL);  
				$img = imagescale( $image, 400, 400 );
				imagepng($img, $targetFileS);
				break;
		}
	} else {
	  echo "Произошла ошибка загрузки файла.";
	}
  }
?>