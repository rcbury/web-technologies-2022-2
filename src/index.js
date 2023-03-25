import EmptyPizza from './models/EmptyPizza.js';
import AddToCartButton from "./components/AddToCartButton.js";
import Pizzas from "./components/Pizzas.js";
import PizzaSize from "./models/PizzaSize.js";
import Toppings from "./components/Toppings.js";
import SizeButtonsGroup from "./components/SizeButtonsGroup.js";
import PepperoniPizza from './models/PepperoniPizza.js';
import MargaretPizza from './models/MargaretPizza.js';
import BavarianPizza from './models/BavarianPizza.js';
import CheesyBoard from './models/CheesyBoard.js';
import CheddarParmejano from './models/CheddarParmejano.js';
import CreamyMozarella from './models/CreamyMozarella.js';

class PizzaSelectMenu {
    constructor() {
        this.size = new PizzaSize("Маленькая", 100, 100);
        this.pizza = new EmptyPizza();

        this.cartButton = new AddToCartButton(document.getElementById("addToCartButton"));
        this.pizzas = new Pizzas(document.getElementsByClassName("pizza-types")[0],
            [new PepperoniPizza(this.size), new MargaretPizza(this.size), new BavarianPizza(this.size)],
            (() => {
                this.pizza = this.pizzas.selectedItem;
                this.pizza.toppings.forEach((topping) => 
                {
                    this.pizza.removeTopping(topping);
                })
                const toppingsElement = document.getElementsByClassName("toppings")[0];
                toppingsElement.childNodes.forEach((item) => 
                {
                    item.classList.remove('active');
                });
                this.cartButton.render(this.pizza.calculatePrice(), this.pizza.calculateCalories());
            }).bind(this));
            console.log(this.pizzas.pizzas);
        this.toppings = new Toppings(document.getElementsByClassName("toppings")[0],
            [new CheesyBoard(), new CreamyMozarella(), new CheddarParmejano()],
            (() => {
                this.topping = this.toppings.selectedTopping;
                this.cartButton.render(this.pizza.calculatePrice(), this.pizza.calculateCalories());
            }).bind(this), (topping) => this.pizza.removeTopping(topping), (topping) => this.pizza.addTopping(topping));

        this.sizeButtonsGroup = new SizeButtonsGroup(document.getElementsByClassName("sizes")[0],
            (() => {
                this.size = new PizzaSize("Маленькая", 100, 100);
                this.pizza.pizzaSize = this.size;
                this.pizza.toppings = [];
                this.toppings.render(this.size);
                this.cartButton.render(this.pizza.calculatePrice(), this.pizza.calculateCalories());
            }).bind(this),
            (function () {
                this.size = new PizzaSize("Большая", 200, 200);
                this.pizza.pizzaSize = this.size;
                this.pizza.toppings = [];
                this.toppings.render(this.size);
                this.cartButton.render(this.pizza.calculatePrice(), this.pizza.calculateCalories());
            }).bind(this));
    }

    render() {
        this.cartButton.render(this.pizza.calculatePrice(), this.pizza.calculateCalories());
        this.pizzas.render();
        this.toppings.render(this.size);
        this.sizeButtonsGroup.render();
    }
}

const pizzaSelectMenu = new PizzaSelectMenu();
pizzaSelectMenu.render();