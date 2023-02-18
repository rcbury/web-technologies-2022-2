class PizzaType 
{
    constructor(name, price, calories) 
    {
        this.name = name;
        this.price = price;
        this.calories = calories;        
    }    
}

class PizzaSize 
{
    constructor(name, price, calories) 
    {
        this.name = name;
        this.price = price;
        this.calories = calories;
    }
}

class Topping 
{
    constructor(name, price, calories) 
    {
        this.name = name;
        this.price = price;
        this.calories = calories;
    }
}

class Pizza 
{
    pizzaSize = null;
    pizzaType = null;
    price = 0;
    calories = 0;
    toppings = [];

    constructor(pizzaType, pizzaSize) 
    {
        this.pizzaType = pizzaType;
        this.pizzaSize = pizzaSize;
        this.#addCaloriesAndPrice(pizzaType);
        this.#addCaloriesAndPrice(pizzaSize);
    }

    #addCaloriesAndPrice(item) 
    {
        this.price += item.price;
        this.calories += item.calories;
    }

    #removeCaloriesAndPrice(item) 
    {
        this.price -= item.price;
        this.calories -= item.calories;
    }

    addTopping(topping) 
    {
        this.toppings.push(topping);
        this.#addCaloriesAndPrice(topping);
    }

    removeTopping(topping) 
    {
        this.toppings = this.toppings.filter((item) => item['name'] != topping['name']);
        this.#removeCaloriesAndPrice(topping);
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
        return this.price;
    }

    calculateCalories() 
    {
        return this.calories;
    }
}

const margaretType = new PizzaType("Маргарита", 500, 300);
const pepperoniType = new PizzaType("Пепперони", 800, 400);
const bavarianType = new PizzaType("Баварская", 700, 450);

const bigSize = new PizzaSize("Большая", 200, 200);
const smallSize = new PizzaSize("Маленькая", 100, 100);

const mozarellaS = new Topping("Сливочная моцарелла (мал.)", 50, 0);
const mozarellaL = new Topping("Сливочная моцарелла (бол.)", 100, 0);

const cheeseBoardS = new Topping("Сырный борт (мал.)", 150, 50);
const cheeseBoardL = new Topping("Сырный борт (бол.)", 300, 50);

const cheddarParmejanoS = new Topping("Чеддер и пармезан (мал.)", 150, 50);
const cheddarParmejanoL = new Topping("Чеддер и пармезан (бол.)", 300, 50);

const myPizza = new Pizza(bavarianType, bigSize);

myPizza.addTopping(mozarellaL);

myPizza.addTopping(cheeseBoardL);
myPizza.removeTopping(cheeseBoardL);

myPizza.addTopping(cheddarParmejanoL);

console.log(`Price: ${myPizza.calculatePrice()}`);
console.log(`Cal-s: ${myPizza.calculateCalories()}`);
console.log(`Size: ${myPizza.getSize()}`);
console.log(`Stuffing: ${myPizza.getStuffing()}`);
console.log(`Toppings: ${myPizza.getToppings()}`);