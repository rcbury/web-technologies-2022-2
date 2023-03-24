import Pizza from './Pizza.js';
import PizzaType from './PizzaType.js';

export default class BavarianPizza extends Pizza {
    image = "";
    constructor(pizzaSize) {
        const pizzaType = new PizzaType("Баварская", 700, 450);
        super(pizzaType, pizzaSize);
        this.image = "https://dodopizza-a.akamaihd.net/static/Img/Products/18dbb12240b041a191c9dc73c9c1f4ef_292x292.jpeg";
    }
}
