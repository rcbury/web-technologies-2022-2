import Topping from './Topping.js';

export default class CheesyBoard extends Topping {
    image = "";
    constructor() {
        super("Сырный бортик", 150, 50, 300, 50);
        this.image = "https://dodopizza-a.akamaihd.net/static/Img/Ingredients/bd896a42a5b44169ae9dfdc2573c34f2.png";
    }
}