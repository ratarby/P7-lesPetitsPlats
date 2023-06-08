// refresh page
window.addEventListener('keydown', function (e) {
    // console.log(e.key);
    if (e.key === 'Escape') { // press Escape to reload page
        window.location.reload();
    }
})

console.log(recipes);

// display recipes
displayRecipesCard('');

// display ingredients' list, appliances' list, ustensils' list and tags
// displayIngredientsTags();
// displayAppliancesTags();
// displayUstansilsTags();

mainSearchBar(); // ok

// sort by ingredients, appliance, ustensils
sortByIngredients(); // ok
sortByAppliance(); // ok
sortByUstensiles(); // ok

// search by ingredients' list, appliances' list, ustensils' list
searchByIngredientsList(); // ok
searchByAppliancesList(); // ok
searchByUstensilsList(); // ok


// display recipes
function displayRecipesCard(searchValue) {
    // Filter the recipes based on the search value
    let result;

        resultName = recipes.filter((x) => x.name.toLowerCase().normalize("NFD").includes(searchValue.toLowerCase().normalize("NFD")));
        resultAppliance = recipes.filter(x => x.appliance.toLowerCase().normalize("NFD").includes(searchValue.toLowerCase().normalize("NFD")));
        resultIngredient = recipes.filter((x) => x.ingredients.map(y => y.ingredient.toLowerCase().normalize("NFD")).includes(searchValue.toLowerCase().normalize("NFD")));
        resultUstensils = recipes.filter(x => x.ustensils.map(y => y.toLowerCase().normalize("NFD")).includes(searchValue.toLowerCase().normalize("NFD")));
        resultDescription = recipes.filter((x) => x.description.toLowerCase().normalize("NFD").includes(searchValue.toLowerCase().normalize("NFD"))); // optimizing the search value by reducing the number of requests
    
        result = resultName.concat(resultAppliance).concat(resultIngredient).concat(resultUstensils).concat(resultDescription);
    
    // console.log(result);

    // Display  recipes by names, appliance, ustensils
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

    /*-------------------------main search bar-----------------*/ 
    // search by click event

function mainSearchBar() {
    document.getElementById('search').addEventListener('click', function () {
        // main search value which  used when user input a value in the search bar (keyword, recipe,etc...)
        const searchValue = document.getElementById("search-all-recipes").value; // value of the search bar
        if (searchValue.length >= 3) {
            displayRecipesCard(searchValue.toLowerCase().normalize("NFD"));
        }
        console.log("search : " + searchValue);
    });

    // search by keyup event
    document.getElementById('search-all-recipes').addEventListener('keyup', function () {
        const searchValue = document.getElementById("search-all-recipes").value; // valeur de la barre de recherche
        if (searchValue.length >= 3) {
            displayRecipesCard(searchValue.toLowerCase().normalize("NFD"));
        }

        // search by change event
        console.log("search : " + searchValue); // tableau de recettes vide que l'utilisateur rempliera la valeur de la barre de recherche
    });
    document.getElementById('search-all-recipes').addEventListener('change', function () {
        const searchValue = document.getElementById("search-all-recipes").value; // valeur de la barre de recherche
        if (searchValue.length >= 3) {
            displayRecipesCard(searchValue.toLowerCase().normalize("NFD"));
        }
        console.log("search : " + searchValue);
    });
}

    /*-----------------------------------------------------*/

// search by ustensils' list
function searchByUstensilsList() {
    // keyup event
    document.getElementById('search-drop_ust').addEventListener('keyup', function () {
            sortByUstensiles();
    });
    // change event
    document.getElementById('search-drop_ust').addEventListener('change', function () {
            sortByUstensiles();
    });
}

// search by appliances' list
function searchByAppliancesList() {
    // keyup event
    document.getElementById('search-drop_app').addEventListener('keyup', function () {
            sortByAppliance();
    });
    // change event
    document.getElementById('search-drop_app').addEventListener('change', function () {
            sortByAppliance();
    });
}

// search by ingredients' list

function searchByIngredientsList() {
    // keyup event
    document.getElementById('search-drop_ing').addEventListener('keyup', function () {
        sortByIngredients();
        // console.log("search : " + document.getElementById("search-drop_ing").value);
    });
    document.getElementById('search-drop_ing').addEventListener('change', function () {
        sortByIngredients();
        // console.log("search : " + document.getElementById("search-drop_ing").value);
    });
}

// sort by ingredients
function sortByIngredients() {
    let resultIngredients;

    // display list of ingredients in devtool
    // flatMap deletes nested arrays and returns an array
    resultIngredients = recipes.flatMap(x => x.ingredients.map(x => x.ingredient.toLowerCase().normalize("NFD"))).reduce(
        // delete redundancies using reduce method which call a callback function and returns an array (prv, cur) 
        // prv as an accumulator (initial value) and cur as current value
        (prv, cur) => {
            // console.log(prv,cur);
            let key = cur; // init key value

            if (!prv.key[key]) { // if key{} and key[] do not exist
                prv.key[key] = true; // create key
                prv.res.push(cur); // push (cur) to array (prv.res)
            }
            return prv; // return prv
        }, { key: {}, res: [] }).res.sort(); // select array (res) and sort

    const searchValueIngredients = document.getElementById('search-drop_ing').value;
    if (searchValueIngredients.length >= 3) {
        resultIngredients = resultIngredients.filter((x) => x.toLowerCase().normalize("NFD").includes(searchValueIngredients.toLowerCase().normalize("NFD")));
    }
    // display list of ingredients on screen
    // console.log(resultIngredients);
    document.getElementById('drop-ingredients_open').innerHTML = resultIngredients.map(
        (x) => `
                    <a href="#" class="linkIngr" id="${x}" data-name="${x}">
                            ${x}
                    </a>
                `
    ).join('');
};

document.getElementById('drop-ingredients_open').addEventListener('click', function (e) {
// console.log(`clicked on : "${e.target.dataset.name}"`);
displayRecipesCard(e.target.dataset.name);
});


// display ingredients' list

// sort by appliance
function sortByAppliance() {
    let resultAppliance;

    resultAppliance = recipes.flatMap((x) => x.appliance.toLowerCase()).reduce(
        // delete redundancies
        function (prv, cur) {
            let key = cur;

            if (!prv.key[key]) {
                prv.key[key] = true;
                prv.res.push(cur);
            }
            return prv;
        }, { key: {}, res: [] }).res.sort();
    // console.log(resultAppliance);

    const searchValueAppliance = document.getElementById('search-drop_app').value;
    if (searchValueAppliance.length >= 3) {
        resultAppliance = resultAppliance.filter((x) => x.toLowerCase().normalize("NFD").includes(searchValueAppliance.toLowerCase().normalize("NFD")));
    }

    document.getElementById('drop-appareil_open').innerHTML = resultAppliance.map(
        (x) => `
                    <a href="#" class="linkDesc" id="${x}" data-name="${x}">
                            ${x}
                    </a>
                `
    ).join('');
};

// search by appliances' list

document.getElementById('drop-appareil_open').addEventListener('click', function (e) {
// console.log(`clicked on : "${e.target.dataset.name}"`);
displayRecipesCard(e.target.dataset.name);
})

function searchByAppliancesList() {
    document.getElementById('search-drop_app').addEventListener('keyup', function () {
        // console.log(`clicked on : "${e.target.dataset.name}"`);
        sortByAppliance();
    });
    document.getElementById('search-drop_app').addEventListener('change', function () {
        // console.log(`clicked on : "${e.target.dataset.name}"`);
        sortByAppliance();
    });
}


// sort by ustensiles
function sortByUstensiles() {
    let resultUstensiles;
// to flat the result to a single array
    resultUstensiles =
        recipes.filter(
            (x) => x.ustensils).flatMap( 
                (x) => x.ustensils.map(
                    (x) => x.toLowerCase().normalize("NFD"))).reduce(
                        (prv, cur) => {
                            // console.log(prv, cur);
                            let key = cur;
                            if (!prv.key[key]) {
                                prv.key[key] = true;
                                prv.res.push(cur);
                            }
                            return prv;
                        }, { key: {}, res: [] }).res.sort();
    // console.log(resultUstensiles);

    const searchValueUstensiles = document.getElementById('search-drop_ust').value;
    if (searchValueUstensiles.length >= 3) {
        resultUstensiles = resultUstensiles.filter((x) => x.toLowerCase().normalize("NFD").includes(searchValueUstensiles.toLowerCase().normalize("NFD")));
    }

    document.getElementById('drop-ustensiles_open').innerHTML = resultUstensiles.map(
        (x) => `
                    <a href="#" class="linkUste" id="${x}" data-name="${x}">
                            ${x}
                    </a>
                `
    ).join('');
};

document.getElementById('drop-ustensiles_open').addEventListener('click', function (e) {
// console.log(`clicked on : "${e.target.dataset.name}"`);
displayRecipesCard(e.target.dataset.name);
})

