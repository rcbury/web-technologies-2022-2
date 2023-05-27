<?php

function getGood($id) {
    return getAssocResult("SELECT * FROM goods WHERE id = $id")[0];
}


function getGoodFeedback($id) {
    return getAssocResult("SELECT * FROM feedback WHERE fk_goods = $id");
}

function addGoodFeedback($id) {
    $sql = "INSERT INTO feedback (text, fk_goods) VALUES ('{$_POST['text']}',{$id})";

    executeSql($sql);
    header("Location: /good/?id=$id");
}

function deleteGoodFeedback($goodId, $feedbackId) {
    $sql = "DELETE FROM feedback WHERE id = $feedbackId";

    executeSql($sql);
    header("Location: /good/?id=$goodId");
}

function doGoodFeedbackAction($action, $params) {
    if ($action === "feedbackAdd") {
        addGoodFeedback($params['goodId']);
    }
    if ($action === "feedbackDelete") {
        deleteGoodFeedback($params['goodId'], $params['feedbackId']);
    }
}