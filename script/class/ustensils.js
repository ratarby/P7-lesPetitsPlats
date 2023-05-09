class Ustensils {
    constructor() {
        const dataUstensils = recipes;
        // console.log(dataUstensils);
        this.dataUste = dataUstensils;
        // console.log(this.dataUste);

        for (let i = 0; i < dataUstensils.length; i++) {
            dataUstensils[i].ustensils = dataUstensils[i].ustensils;
            // console.log(dataUstensils[i].ustensils);
        }
    }
}
