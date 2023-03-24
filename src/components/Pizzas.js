import PizzaItem from "./PizzaItem.js";

export default class Pizzas {
    constructor(pizzasElement, pizzas, selectHandler) {
        this.pizzasElement = pizzasElement;
        this.pizzas = pizzas;
        this.selectedItem = pizzas[0];
        this.selectHandler = selectHandler;
    }

    render() {
        this.pizzasElement.textContent = '';
        this.pizzas.map((pizza) => 
        {
            const pizzaItemElement = new PizzaItem(this, pizza, this.selectHandler);
            this.pizzasElement.appendChild(pizzaItemElement.render());
        })
        return this.pizzasElement;
    }
}