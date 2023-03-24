export default class AddToCartButton {
    constructor(element) {
        this.element = element;
    }

    render(pizza) {
        this.element.textContent = `Добавить в корзину за ${pizza.calculatePrice()} ₽ (${pizza.calculateCalories()} кКалл)`;
        return this.element;
    }
}