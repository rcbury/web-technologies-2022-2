import Pizza from './Pizza.js';
import PizzaType from './PizzaType.js';

export default class PepperoniPizza extends Pizza {
    image = "";
    constructor(pizzaSize) {
        const pizzaType = new PizzaType("Пепперони", 800, 400);
        super(pizzaType, pizzaSize);
        this.image = "https://dodopizza-a.akamaihd.net/static/Img/Products/fb9cc5b8ff2e47bdbcbdcb5930cddf06_292x292.webp";
    }
}
