
console.log(recipes);


displayRecipesCard('');



function displayRecipesCard(searchValue) {
    
    // Filter the recipes based on the search value
    let result;

    resultName = recipes.filter((x) => x.name.toLowerCase().normalize("NFD").includes(searchValue.toLowerCase().normalize("NFD")));
    resultAppliance = recipes.filter(x => x.appliance.toLowerCase().normalize("NFD").includes(searchValue.toLowerCase().normalize("NFD")));
    resultIngredient = recipes.filter((x) => x.ingredients.map(y => y.ingredient.toLowerCase().normalize("NFD")).includes(searchValue.toLowerCase().normalize("NFD")));
    resultUstensils = recipes.filter(x => x.ustensils.map(y => y.toLowerCase().normalize("NFD")).includes(searchValue.toLowerCase().normalize("NFD")));    
    resultDescription =  recipes.filter((x) => x.description.toLowerCase().normalize("NFD").includes(searchValue.toLowerCase().normalize("NFD"))); // optimizing the search value by reducing the number of requests

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



// search by ingredients list
document.getElementById('search-drop_ing').addEventListener('keyup', function (e) {
    sortByIngredients();
})
document.getElementById('search-drop_ing').addEventListener('change', function (e) {
    sortByIngredients();
})

// search by appliance's list
document.getElementById('search-drop_app').addEventListener('keyup', function (e) {
    sortByAppliance();
})
document.getElementById('search-drop_app').addEventListener('change', function (e) {
    sortByAppliance();
})

// search by ustensils list
document.getElementById('search-drop_ust').addEventListener('keyup', function (e) {
    sortByUstensiles();
})
document.getElementById('search-drop_ust').addEventListener('change', function (e) {
    sortByUstensiles();
})


function sortByIngredients() {
    let resultIngredients;

    // display list of ingredients in devtool
    // flatMap deletes nested arrays and returns an array
    resultIngredients = recipes.flatMap(x => x.ingredients.map(x => x.ingredient.toLowerCase().normalize("NFD"))).reduce(
        // delete redundancies with reduce method parmeter (prv, cur) 
        // prv as an object value and cur as current value
        function (prv, cur) { 
            // console.log(prv,cur);
            let key = cur; // init key value

            if (!prv.key[key]) { // if key{} and key[] does not exist
                prv.key[key] = true; // create key
                prv.res.push(cur); // push (cur) to array (res)
            }
            return prv; // return prv
        }, { key: {}, res: [] }).res.sort(); // select array (res) and sort
    
        const searchValueIngredients = document.getElementById('search-drop_ing').value;
        resultIngredients = resultIngredients.filter((x) => x.toLowerCase().normalize("NFD").includes(searchValueIngredients.toLowerCase().normalize("NFD")));
        
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
})


function sortByAppliance() {
    let resultAppliance;

    resultAppliance = recipes.map((x) => x.appliance.toLowerCase()).reduce(
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
    resultAppliance = resultAppliance.filter((x) => x.toLowerCase().normalize("NFD").includes(searchValueAppliance.toLowerCase().normalize("NFD")));


    document.getElementById('drop-appareil_open').innerHTML = resultAppliance.map(
        (x) => `
                    <a href="#" class="linkDesc" id="${x}" data-name="${x}">
                            ${x}
                    </a>
                `
    ).join('');
};

document.getElementById('drop-appareil_open').addEventListener('click', function (e) {
    // console.log(`clicked on : "${e.target.dataset.name}"`);
    displayRecipesCard(e.target.dataset.name);
})

function sortByUstensiles() {
    let resultUstensiles;

    resultUstensiles =
        recipes.filter
            (x => x.ustensils).flatMap( // to flat the result to a single array
            (x) => x.ustensils.map(
                (x) => x.toLowerCase().normalize("NFD"))).reduce(
                    function (prv, cur) {
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
    resultUstensiles = resultUstensiles.filter((x) => x.toLowerCase().normalize("NFD").includes(searchValueUstensiles.toLowerCase().normalize("NFD")));


    document.getElementById('drop-ustensiles_open').innerHTML = resultUstensiles.map(
        (x) => `
                    <a href="#" class="linkUste" id="${x}" data-name="${x}">
                            ${x}
                    </a>
                `
    ).join('');
};

document.getElementById('drop-ustensiles_open').addEventListener('click', function (e) {
    console.log(`clicked on : "${e.target.dataset.name}"`);
    displayRecipesCard(e.target.dataset.name);
})


