import { Ingredients } from "./../class/ingredients.js";
import { Ustensils } from "./../class/ustensils.js";
import { Appliances } from "./../class/appliances.js";
import { Tags } from "./../class/tags.js";
import { Recipes } from "./../class/recipes.js";

export class List {
    constructor() {
        this.all = [];
        this.ingredients = [];
        this.ingredientSelected = [];
        this.ustensils = [];
        this.ustensilSelected = [];
        this.appliances = [];
        this.applianceSelected = [];
        this.alltagsSelected = [];
        this.all.push(Recipes);
        this.ingredients.push(Ingredients);
        this.ustensils.push(Ustensils);
        this.appliances.push(Appliances);
        this.alltagsSelected.push(Tags);
    }
    
    displayUserCard() {
        List.innerHTML = this.all
            .filter(() => this.all
            .toLowerCase()
            .includes('a'))
            .sort((a, b) => b.this.id - a.this.id)
            .map(
                (this.all) `
                <article class="article" id=${this.id} tabindex="0">
                    <div class="photo"><img src="/assets/img/logo.svg"/></div>
                    <div class="article-all">
                    <div class="title">
                        <div class="title-txt">${this.name}</div>
                        <div class="title-time"><i class="far fa-clock"></i> ${this.time}</div>
                    </div>
                        <div class="details">
                        <div class="details-ing">${this.ingredient}</div>
                        <div class="details-txt">${this.description}</div>
                    </div>
                    </div>
                </article>`
    )
            .join("");
    }
}   





