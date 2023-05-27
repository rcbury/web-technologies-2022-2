<h2>Каталог</h2>

<div>
    <div>
        <h2><?=$good['name']?></h2>
        <img src="/img/<?=$good['image']?>" alt="<?=$good['image']?>">
        <br>
        <span>Цена: <?=$good['price']?></span>
        <span>Описание: <?=$good['description']?></span>
        <span>Отзывы:</span>
        <br>
        <?php foreach ($feedback as $feedbackItem): ?>
        <span>Отзыв: <?=$feedbackItem['text']?></span>
        <a href="/good/feedbackDelete?goodId=<?=$good['id']?>&feedbackId=<?=$feedbackItem['id']?>">Удалить</a>
        <br>
        <?php endforeach; ?>
        <button>Купить</button>
        <hr>
        <form action="/good/feedbackAdd?goodId=<?=$good['id']?>" method="post">
            Оставить отзыв: <br>
        <input type="text" name="text" placeholder="Ваш отзыв"><br>
        <input type="submit" value="Оставить">
        </form>
    </div>
</div>