export default class PizzaItem {
    constructor(pizzaTypesElement, pizza, selectHandler) {
        this.pizza = pizza;
        this.pizzaTypesElement = pizzaTypesElement;
        this.selectHandler = selectHandler;
    }

    render() {
        const pizzaItem = document.createElement("a");
        const types = this.pizzaTypesElement;
        const pizza = this.pizza;
        const selectHandler = this.selectHandler;
        pizzaItem.classList.add("pizza-item");
        pizzaItem.onclick = () => {
            types.selectedItem = pizza;
            this.pizzaTypesElement.pizzasElement.childNodes.forEach(pizzaItem => {
                pizzaItem.classList.remove('active');
            });
            pizzaItem.classList.add('active');
            selectHandler();
        };
        pizzaItem.innerHTML = `
            <div>
                <img src=${this.pizza.image} alt="pizza-item-img"/>
                <p>${this.pizza.pizzaType.name}</p>
            </div>`;
        return pizzaItem;
    }
}