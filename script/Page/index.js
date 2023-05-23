
console.log(recipes);


displayRecipesCard('');



function displayRecipesCard(searchValue) {
    
    // Filter the recipes based on the search value
    let result;


    result = recipes.filter((x) => x.name.includes(searchValue)) ||
            recipes.filter(x => x.appliance.includes(searchValue)) ||
            recipes.filter((x) => x.ingredients.toLocaleString().includes(searchValue)) ||
            recipes.filter((x) => x.ustensils).includes(searchValue) ||
            recipes.filter((x) => x.description).includes(searchValue);
    console.log(result);

    
    // Display the filtered recipes as recipes in the 'recipes' element
    document.getElementById('recipes').innerHTML = result.map(
        (x) => `
        <article class="article" id="${x.id}" tabindex="0">
                <div class="photo"><img src="assets/img/logo.svg"/></div>
                <div class="article-all">
                    <div class="title">
                        <div class="title-txt">${x.name}</div>
                        <div class="title-time"><i class="far fa-clock"></i> ${x.time}</div>
                    </div>
                    
                <div class="details">
                    <div class="details-ingr">
                    ${x.ingredients.map((y) => `
                    <span>${y.ingredient ? y.ingredient : ""}    
                        ${y.quantity ? " : " + y.quantity : ""} 
                        ${y.unit ? y.unit : ""} 
                    </span>` ).join('')}
                    </div>
                <div class="details-txt">
                    ${x.description}
                </div>
            </div>
            </div>
    </article>`
    ).join('');

    // Display an error message if no recipes were found
    if (document.getElementsByClassName('article').length > 0) {
        document.getElementById('errorFilter').style.display = "none";
    } else {
        document.getElementById('errorFilter').style.display = "block";
    }
}


document.getElementById('search').addEventListener('click', function () {
    const searchValue = document.getElementById("search-all-recipes").value;// valeur de la barre de recherche
    if (searchValue.length >= 3) {
        displayRecipesCard(searchValue.toLowerCase().normalize("NFD"));
    }
    console.log("search : " + searchValue); // tableau de recettes vide que l'utilisateur rempliera la valeur de la barre de recherche
});


// sort and display recipes by ingredients, appliance and ustensils 
sortByIngredients(); // ok
sortByAppliance(); // ok
sortByUstensiles(); // ok

// display recipes which are selected by ingredients and appliance and ustensils and
// display  ingredients, appliance and ustensils  tags
// displayIngredientTag();


function sortByIngredients() {
    let resultIngredients;

    // display list of ingredients in devtool
    // flatMap deletes nested arrays and returns an array
    resultIngredients = recipes.flatMap(x => x.ingredients.map(x => x.ingredient.toLowerCase().normalize("NFD"))).reduce(
        function (prv, cur) {// delete redundancies

            let key = cur; // init key value

            if (!prv.key[key]) { // if key does not exist
                prv.key[key] = true; // create key
                prv.res.push(cur); // push (cur) to array (res)
            }
            return prv; // return prv
        }, { key: {}, res: [] }).res.sort(); // select array (res) and sort
    // console.log(resultIngredients);
    // display list of ingredients on screen
    document.getElementById('drop-ingredients_open').innerHTML = resultIngredients.map(
        (x) => `
                    <a href="#" class="linkIngr" id="${x}" data-name="${x}">
                            ${x}
                    </a>
                `
    ).join('');

};



function sortByAppliance() {
    let resultAppliance;

    resultAppliance = recipes.map((x) => x.appliance.toLowerCase()).reduce(function (prv, cur) {
        // delete redundancies
        let key = cur;

        if (!prv.key[key]) {
            prv.key[key] = true;
            prv.res.push(cur);
        }
        return prv;
    }, { key: {}, res: [] }).res.sort();
    // console.log(resultAppliance);

    document.getElementById('drop-appareil_open').innerHTML = resultAppliance.map(
        (x) => `
                    <a href="#" class="linkDesc" id="${x}" data-name="${x}">
                            ${x}
                    </a>
                `
    ).join('');



};



function sortByUstensiles() {
    let resultUstensiles;

    resultUstensiles =
        recipes.filter
            (x => x.ustensils).flatMap // to flat the result to a single array
            (x => x.ustensils.map
                (x => x.toLowerCase().normalize("NFD"))).reduce(function (prv, cur) {

                    let key = cur;

                    if (!prv.key[key]) {
                        prv.key[key] = true;
                        prv.res.push(cur);
                    }
                    return prv;
                }, { key: {}, res: [] }).res;
    resultUstensiles.sort();
    // console.log(resultUstensiles);
    document.getElementById('drop-ustensiles_open').innerHTML = resultUstensiles.map(
        (x) => `
                    <a href="#" class="linkUste" id="${x}" data-name="${x}">
                            ${x}
                    </a>
                `
    ).join('');

};


