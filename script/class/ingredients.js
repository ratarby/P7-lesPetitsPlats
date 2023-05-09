
class Ingredients {
    constructor() {
        // grab ingredients from /data/recipes.js
        const dataIngr = recipes;
        // console.log(dataIngr);
        this.dataIngredients = dataIngr;
        this.ingredients = dataIngr;
        this.ingredient = dataIngr;
        this.quantity = dataIngr;
        // console.log(this.quantity);
        this.unit = dataIngr.unit;

        // grab  ingredients from /data/recipes.js
        for (let i = 0; i < dataIngr[i].length; i++) {
            // console.log(dataIngr[i].ingredient);

            //if all ingredients 
            if (dataIngr[i].ingredients == "undefined" ) dataIngr[i].ingredients == "";
            console.log(dataIngr[i].ingredients);
                
            // if all ingredients are undefined replace with " "
            if (dataIngr[i].ingredients[i] == "undefined") dataIngr[i].ingredients == " ";
            // console.log(dataIngr[i].ingredients);
            
            // if an ingredient is undefined replace with " "
            if (dataIngr[i].ingredients[i].ingredient == "undefined") dataIngr[i].ingredients[i].ingredient == " ";
                // console.log(dataIngr[i].ingredients[i].ingredient);
            
            // if quantity is undefined replace with " "
            if (dataIngr[i].ingredients[i].quantity == "undefined") dataIngr[i].ingredients[i].quantity == " ";
            // console.log(recipes[i].ingredients[i].quantity);
            // if unit is undefined replace with " "
            if (dataIngr[i].ingredients[i].unit[i] == "undefined") dataIngr[i].ingredients[i].unit[i] == " ";
            // console.log(dataIngr[i].ingredients[i].unit);
        }
    }


    
}
