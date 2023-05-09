

class List {
    constructor() {
        const recipes = new Recipes();
        const ingredients = new Ingredients();
        const appliances = new Appliances();
        const ustensils = new Ustensils();

        this.all = [];
        this.ingredients = [];
        this.ingredientSelected = [];
        this.ustensils = [];
        this.ustensilSelected = [];
        this.appliances = [];
        this.applianceSelected = [];
        this.alltagsSelected = [];

        this.all.push(recipes);
        this.all.push(ingredients);
        this.all.push(appliances);
        this.all.push(ustensils);

        // this.ingredients.push(ingredients.dataIngredients);
        // this.ingredientSelected.push(Ingredients.data);
        // this.ustensils.push(Ustensils);
        // this.ustensilSelected.push(Ustensils);
        // this.appliances.push(Appliances);
        // this.applianceSelected.push(Appliances);
        // this.alltagsSelected.push(Tags);
    }
    
    /**
     * Displays user card based on filtered recipes, ingredients, appliances and ustensils
     */
    displayRecipesCard() {
        // Check if there are no filters selected
        document.getElementById('recipes').innerHTML = this.all[0]
            // Filter recipes based on 'a' character
            .filter(() =>this.all[0].toLowerCase().includes('a'))
            // Sort recipes in descending order based on name
            .sort((a, b) => this.name - this.name)
            .map(
                // Create HTML for each recipe
                (x) => `<article class="article" id=${x.id} tabindex="0">

                    <div class="photo"><img src="/assets/img/logo.svg"/></div>
                    <div class="article-all">
                    <div class="title">
                        <div class="title-txt">${x.name}</div>
                        <div class="title-time"><i class="far fa-clock"></i> ${x.time}</div>
                    </div>
                        <div class="details">
                        <div class="details-ingr">
                            ${x.ingredients[0].ingredient} ${x.ingredients[0].quantity} ${x.ingredients[0].unit}
                            </div>
                        <div class="details-txt">${x.description}</div>
                    </div>
                    </div>
                </article>`
            )
            .join("");
    }
}




