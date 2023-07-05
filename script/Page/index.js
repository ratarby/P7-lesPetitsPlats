// refresh page
window.addEventListener('keydown', function (e) {
    // console.log(e.key);
    if (e.key === 'Escape') { // press Escape to reload page
        window.location.reload();
    }
})


// Create global variables to handle ingredients'tag, appliances'tag and ustensils'tag
let tagsIngredients = [];
let tagsAppliances = [];
let tagsUstensils = [];


// console.log(recipes);

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


/**
 * Display recipes card based on search value and tags.
 * @param {string} searchValue - The search value to filter recipes.
 */
function displayRecipesCard(searchValue) {
    // Filter the recipes based on the search value and tags
    let result = [];

    // Check if there are no tags selected
    const noTag = tagsIngredients.length === 0 && tagsAppliances.length === 0 && tagsUstensils.length === 0;

    // Filter recipes based on search value
    //  Add foreach loop in the if statement wich iterates over the filters' array 
    // and push the recipes to the result array
    if (searchValue.length > 0 || noTag) {
        result = [];
        const filters = [
            (x) => x.name.toLowerCase().normalize("NFD").includes(searchValue.toLowerCase().normalize("NFD")),
            x => x.appliance.toLowerCase().normalize("NFD").includes(searchValue.toLowerCase().normalize("NFD")),
            (x) => x.ingredients.map(y => y.ingredient.toLowerCase().normalize("NFD")).includes(searchValue.toLowerCase().normalize("NFD")),
            x => x.ustensils.map(y => y.toLowerCase().normalize("NFD")).includes(searchValue.toLowerCase().normalize("NFD")),
            (x) => x.description.toLowerCase().normalize("NFD").includes(searchValue.toLowerCase().normalize("NFD"))
        ];
    
        filters.forEach(filter => {
            result.push(...recipes.filter(filter));
        });
    }

    // Filter recipes based on ingredients, appliance, and ustensils tags
    // the first level of foreach loop iterates over the tags'ingredients, tags' appliance and tags'ustensils in a array
    // the second level of foreach  is used to iterate over each element in the current tags array 
    // within the second level of foreach loop, the result array is updated with the filtered result 
    // I use also the spread operator to concatenate the result array with the filtered recipes from recipes'array
    // Three conditions are used to filter (filter method ) the recipes wich is normalized and includes the searchValue 
    [tagsIngredients, tagsAppliances, tagsUstensils].forEach(tags => {
        tags.forEach(searchValue => {
            result = [
                ...result,
                ...recipes.filter((x) => x.ingredients.map(y => y.ingredient.toLowerCase().normalize("NFD")).includes(searchValue.toLowerCase().normalize("NFD"))),
                ...recipes.filter(x => x.appliance.toLowerCase().normalize("NFD").includes(searchValue.toLowerCase().normalize("NFD"))),
                ...recipes.filter(x => x.ustensils.map(y => y.toLowerCase().normalize("NFD")).includes(searchValue.toLowerCase().normalize("NFD")))
            ];
        });
    });

    // Display recipes by names, appliance, ustensils
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
    document.getElementById('errorFilter').style.display = document.getElementsByClassName('article').length > 0 ? "none" : "block";
}


/*-------------------------main search bar-----------------*/

// search by click , keyup and change event
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
        // delete redundancies using reduce method which call a callback function and returns a flaterned array (prv, cur) 
        // prv as an accumulator (initial value) and cur as current value
        (prv, cur) => {
            // console.log(prv,cur);
            let key = cur; // init key cur value

            if (!prv.key[key]) { // if rev.key[key] is false means value has not been encountred
                prv.key[key] = true; // if its true means value has been encountred
                prv.res.push(cur); // push (cur) to the result array (prv.res)
            }
            return prv; // the call back return the modified  prv obj
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
    
    // Display an error message if no recipe found in drop ingredients' list
    const searchDropIng = document.getElementById('search-drop_ing');
    const errorFilter = document.getElementById('errorFilter');
    const articles = document.getElementsByClassName('article');

    if (resultIngredients.length === 0) {

        errorFilter.style.display = searchDropIng.length > 0 ? "none" : "block";

        for (let i = 0; i < articles.length; i++) {
            articles[i].style.display = "none";
        }
    }
};

document.getElementById('drop-ingredients_open').addEventListener('click', function (e) {
    // console.log(`clicked on : "${e.target.dataset.name}"`);
});




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

    // Display an error message if no recipe found in drop appliance 's list
    // Grab dom 's elements first
    const searchDropApp = document.getElementById('search-drop_app');
    const errorFilter = document.getElementById('errorFilter');
    const articles = document.getElementsByClassName('article');
    
    // Do the if statement to display the error message
    // if resultApplaince's length is equal to 0
    // display the error message and hide the articles
    if (resultAppliance.length === 0) {
        errorFilter.style.display = searchDropApp.length > 0 ? "none" : "block";

        for (let i = 0; i < articles.length; i++) {
            articles[i].style.display = "none";
        }
    }
};

// search by appliances' list

document.getElementById('drop-appareil_open').addEventListener('click', function (e) {
    // console.log(`clicked on : "${e.target.dataset.name}"`);
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

    // Display an error message if no recipe found in drop ustensiles' list
    const searchDropUst = document.getElementById('search-drop_ust');
    const errorFilter = document.getElementById('errorFilter');
    const articles = document.getElementsByClassName('article');
    
    // Do the if statement to display the error message
    // if resultUstensiles's length is equal to 0
    // display the error message and hide the articles
    if (resultUstensiles.length === 0) {
        errorFilter.style.display = searchDropUst.length > 0 ? "none" : "block";

        for (let i = 0; i < articles.length; i++) {
            articles[i].style.display = "none";
        }
    }
};

document.getElementById('drop-ustensiles_open').addEventListener('click', function (e) {
    // console.log(`clicked on : "${e.target.dataset.name}"`);
});
