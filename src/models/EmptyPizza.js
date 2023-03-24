import Pizza from './Pizza.js';
import PizzaType from './PizzaType.js';
import PizzaSize from './PizzaSize.js';

export default class MargaretPizza extends Pizza {
    image = "";
    constructor() {
        const pizzaType = new PizzaType("", 0, 0);
        super(pizzaType, new PizzaSize("", 0, 0));
        this.image = "https://dodopizza-a.akamaihd.net/static/Img/Products/748949429e25404ea10aab002c910d84_292x292.jpeg";
    }
}