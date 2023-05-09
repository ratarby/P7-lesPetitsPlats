class Recipes {
    constructor() {
        const data = recipes;
        this.id = data.map((x) => x.id);
        this.name = data.map((x) => x.name);
        this.servings = data.map((x) => x.serving);
        this.ingredients = data.map((x) => x.id);
        this.quantity = data.map((x) => x.quantity);
        this.unit = data.map((x) => x.unity);
        this.time = data.map((x) => x.time);
        this.description = data.map((x) => x.description);
        this.appliance = data.map((x) => x.appliance);
        this.ustensils = data.map((x) => x.ustensils);
        // this.tags = data.recipes;
    }
}


