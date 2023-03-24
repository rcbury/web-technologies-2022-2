export default class Pizza 
{
    pizzaSize = null;
    pizzaType = null;
    toppings = [];

    constructor(pizzaType, pizzaSize) 
    {
        this.pizzaType = pizzaType;
        this.pizzaSize = pizzaSize;
    }

    addTopping(topping) 
    {
        this.toppings.push(topping);
    }

    removeTopping(topping) 
    {
        this.toppings = this.toppings.filter((item) => item['name'] != topping['name']);
    }

    getToppings() 
    {
        return this.toppings.map((top) => top.name).join(', ');
    }

    getSize() 
    {
        return this.pizzaSize.name;        
    }

    getStuffing() 
    {
        return this.pizzaType.name;
    }

    calculatePrice() 
    {
        let price = 0;
        price = this.pizzaSize.price + this.pizzaType.price;
        this.toppings.forEach((topping) => 
        {
            price += topping.getPrice(this.pizzaSize);            
        });
        return price;
    }

    calculateCalories() 
    {
        let calories = 0;
        calories = this.pizzaSize.calories + this.pizzaType.calories;
        this.toppings.forEach((topping) => 
        {
            calories += topping.getCalories(this.pizzaSize);            
        });
        return calories;
    }
}