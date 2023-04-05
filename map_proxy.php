<?php
header("Content-Type: text/html; charset=UTF-8")

require_once "naverSearchApi.php";

$place = new Place();

echo $place->getPlaceSearch($_GET['query']);
?>