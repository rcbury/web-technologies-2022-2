import Topping from './Topping.js';

export default class CheddarParmejano extends Topping {
    image = "";
    constructor() {
        super("Чеддер и пармезан", 150, 50, 300, 50);
        this.image = "https://dodopizza-a.akamaihd.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA69C1FE796";
    }
}