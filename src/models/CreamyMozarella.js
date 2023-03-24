import Topping from './Topping.js';

export default class CreamyMozarella extends Topping {
    image = "";
    constructor() {
        super("Сливочная моцарелла", 50, 0, 100, 0);
        this.image = "https://dodopizza-a.akamaihd.net/static/Img/Ingredients/cdea869ef287426386ed634e6099a5ba.png";
    }
}