export default class Topping 
{
    constructor(name, priceS, caloriesS, priceL, caloriesL) 
    {
        this.name = name;
        this.priceS = priceS;
        this.caloriesS = caloriesS;
        this.priceL = priceL;
        this.caloriesL = caloriesL;
        this.isActive = false;
    }

    getPrice = (size) => 
    {
        if (size.name === "Большая") 
        {
            return this.priceL;            
        } else if (size.name === "Маленькая") 
        {
            return this.priceS;
        }
    }

    getCalories = (size) => 
    {
        if (size.name === "Большая") 
        {
            return this.caloriesL;            
        } else if (size.name === "Маленькая") 
        {
            return this.caloriesS;
        }
    }
}