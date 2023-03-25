export default class AddToCartButton {
    constructor(element) {
        this.element = element;
    }

    render(pizzaPrice, pizzaCalories) {
        this.element.textContent = `Добавить в корзину за ${pizzaPrice}₽ (${pizzaCalories}кКалл)`;
        return this.element;
    }
}