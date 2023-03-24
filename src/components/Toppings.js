import ToppingItem from "./ToppingItem.js";

export default class Toppings {
    constructor(toppingsElement, toppings, selectHandler, removeTopping, addTopping) {
        this.toppingsElement = toppingsElement;
        this.toppings = toppings;
        this.selectedTopping = toppings[0];
        this.selectHandler = selectHandler;
        this.removeTopping = removeTopping;
        this.addTopping = addTopping;
    }

    render(size) {
        this.toppingsElement.textContent = '';
        this.toppings.map((topping) => 
        {
            const toppingElement = new ToppingItem(this, topping, this.selectHandler, this.removeTopping, this.addTopping);
            this.toppingsElement.appendChild(toppingElement.render(size));
        })
        return this.toppings;
    }
}