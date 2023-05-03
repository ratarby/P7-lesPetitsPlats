

class List {
    constructor() {
        const recipes = new Recipes();
        this.all = [];
        this.ingredients = [];
        this.ingredientSelected = [];
        this.ustensils = [];
        this.ustensilSelected = [];
        this.appliances = [];
        this.applianceSelected = [];
        this.alltagsSelected = [];
        this.all.push(recipes.recipes);
        // this.ingredients.push(Ingredients);
        // this.ingredientSelected.push(Ingredients);
        // this.ustensils.push(Ustensils);
        // this.ustensilSelected.push(Ustensils);
        // this.appliances.push(Appliances);
        // this.applianceSelected.push(Appliances);
        // this.alltagsSelected.push(Tags);
    }
    
    displayUserCard() {
        document.getElementById('recipes').innerHTML = this.all
            // .filter((x) => x.name.toLowerCase().includes('a'))
            .sort((a, b) => b.name - a.name)
            .map(
                (x) => `<article class="article" id=${x.id} tabindex="0">

                    <div class="photo"><img src="/assets/img/logo.svg"/></div>
                    <div class="article-all">
                    <div class="title">
                        <div class="title-txt">${x.name}</div>
                        <div class="title-time"><i class="far fa-clock"></i> ${x.time}</div>
                    </div>
                        <div class="details">
                        <div class="details-ingr">${x.ingredient}</div>
                        <div class="details-txt">${x.description}</div>
                    </div>
                    </div>
                </article>`
    )
            .join("");
    }
}   




