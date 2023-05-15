
console.log(recipes);


displayRecipesCard();


function displayRecipesCard(searchValue) {
    let result;

    result = recipes.filter((x) => x.name.toLowerCase().normalize("NFD").includes(searchValue)) ||
        recipes.filter((x) => x.ingredients.toLowerCase().normalize("NFD").includes(searchValue)) ||
        recipes.filter((x) => x.description.toLowerCase().normalize("NFD").includes(searchValue)) || 
        recipes.filter((x) => x.appliance.toLowerCase().normalize("NFD").includes(searchValue)) || 
        recipes.filter((x) => x.quantity.toLowerCase().normalize("NFD").includes(searchValue)) || 
        recipes.filter((x) => x.unit.toLowerCase().normalize("NFD").includes(searchValue));
        // console.log(result);


            document.getElementById('recipes').innerHTML = result.map(
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
                                    ${x.ingredients.map((y) => `
                                    <span>${y.ingredient ? y.ingredient : ""}  :  
                                        ${y.quantity ? y.quantity : ""} 
                                        ${y.unit ? y.unit : ""} 
                                    </span>` ).join('')}
                                    </div>
                                <div class="details-txt">${x.description}</div>
                            </div>
                            </div>
                    </article>`
                ).join('')
            
                
}
            
document.getElementById('search').addEventListener('click', function(e) {
e.preventDefault();
const searchValue = document.getElementById("search-all-recipes").value;// valeur de la barre de recherche
displayRecipesCard(searchValue.toLowerCase().normalize("NFD"));

console.log("search : " + searchValue); // tableau de recettes vide que l'utilisateur rempliera la valeur de la barre de recherche
});


sortByIngredients(); // ok
sortByAppliance(); // ok
sortByUstensiles(); // ok



function sortByIngredients() {
    let resultIngredients;

    // display list of ingredients in devtool
    // flatMap deletes nested arrays and returns an array
    resultIngredients = recipes.flatMap(x =>  x.ingredients.map(x => x.ingredient.toLowerCase().normalize("NFD"))).reduce(
        function(prv, cur) {// delete redundancies

            let key = cur; // init key value
        
            if(!prv.key[key]) { // if key does not exist
                prv.key[key] = true; // create key
                prv.res.push(cur); // push (cur) to array (res)
            }
            return prv; // return prv
        }, {key: {}, res: []}).res.sort(); // select array (res) and sort

    // display list of ingredients on screen
    document.querySelector('.drop-all__Open').innerHTML = recipes.flatMap(x =>  x.ingredients.map(x => x.ingredient.toLowerCase().normalize("NFD"))).filter(
        (x) => `
                <a>${x.ingredients}</a>`).reduce(function(prv, cur) {
                    // delete redundancies
                    let key = cur; 
                
                if(!prv.key[key]) {
                    prv.key[key] = true;
                    prv.res.push(cur);
                }
                return prv;
                }, {key: {}, res: []}).res.sort().join('');                    
    
    };


function sortByAppliance() {
    let resultAppliance;

    resultAppliance = recipes.map((x) => x.appliance.toLowerCase());
    resultAppliance.sort();
    resultAppliance = resultAppliance.reduce(function(prv, cur) {
        // delete redundancies
        let key = cur; 
    
    if(!prv.key[key]) {
        prv.key[key] = true;
        prv.res.push(cur);
    }
    return prv;
    }, {key: {}, res: []}).res;
    // console.log(resultAppliance);
}

function sortByUstensiles() {
    let resultUstensiles;

    resultUstensiles = 
    recipes.filter
    (x => x.ustensils).flatMap // to flat the result to a single array
        (x => x.ustensils.map
            (x => x.toLowerCase().normalize("NFD"))).reduce(function(prv, cur) {
                
                let key = cur;
                
                if(!prv.key[key]) {
                    prv.key[key] = true;
                    prv.res.push(cur);
                }
                return prv;
                }, {key: {}, res: []}).res;
    resultUstensiles.sort();         
    // console.log(resultUstensiles);
}


