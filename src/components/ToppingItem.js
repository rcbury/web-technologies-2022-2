export default class ToppingItem {
    constructor(toppingsElement, topping, selectHandler, removeTopping, addTopping) {
        this.topping = topping;
        this.toppingsElement = toppingsElement;
        this.selectHandler = selectHandler;
        this.removeTopping = removeTopping;
        this.addTopping = addTopping;
    }

    render(size) {
        const toppingItem = document.createElement("a");
        const toppings = this.toppingsElement;
        const topping = this.topping;
        const handler = this.selectHandler;
        toppingItem.classList.add("topping");
        toppingItem.onclick = () => {
            toppings.selectedTopping = topping;
            toppingItem.classList.toggle('active');
            if (toppingItem.classList.contains('active')) 
            {
                this.addTopping(topping);
            } else 
            {
                this.removeTopping(topping);
            }
            handler();
        };
        toppingItem.innerHTML = `
            <img src=${this.topping.image} alt="topping"/>
            <p>${this.topping.name}</p>
            <span class="price">${this.topping.getPrice(size)} ₽</span>`;
        return toppingItem;
    }
}