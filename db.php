<?php

define("DB_HOST", "localhost");
define("DB_PORT", "5432");
define("DB_NAME", "catalog");
define("DB_USER", "postgres");
define("DB_PASSWORD", "postgres");

function getDb() {
	$db = pg_connect("host=".DB_HOST." port=".DB_PORT." dbname=".DB_NAME." user=".DB_USER." password=".DB_PASSWORD);
	return $db;
}

function getAssocResult($sql) {
	$query = pg_query(getDb(), $sql);

	$array_result = pg_fetch_all($query);

	return $array_result;
}

function getOneResult($sql) {
	$query = pg_query(getDb(), $sql);
	$array_result = pg_fetch_row($query);
	return $array_result;
}

function executeSql($sql) {
    pg_query(getDb(), $sql);
}