import Pizza from './Pizza.js';
import PizzaType from './PizzaType.js';

export default class MargaretPizza extends Pizza {
    image = "";
    constructor(pizzaSize) {
        const pizzaType = new PizzaType("Маргарита", 500, 300);
        super(pizzaType, pizzaSize);
        this.image = "https://dodopizza-a.akamaihd.net/static/Img/Products/748949429e25404ea10aab002c910d84_292x292.jpeg";
    }
}
