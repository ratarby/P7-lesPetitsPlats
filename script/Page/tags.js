
console.log(recipes);

// push ingredients, appliance and ustensils in tags array
let tags = [];
// console.log(tags);

createArrayTags();


// declare quote's array and initialize it with stringified tags
let quote = joinArrays();

// Create tag's array from stringified tags using split method
let tag = quote.split(',');
console.log(tag); 

// stringify tags to create a new array tag
function joinArrays() {
    for (let i = 0; i < tags.length; i++) {
        if (Array.isArray(tags[i])) {
            tags[i] = tags[i].join(``);
        }
    }
    
    const flattenedArray = [...tags];
    const splitedArray = flattenedArray.flat(x => x.split(` `));
    const splitedArray2 = [...new Set(splitedArray)];
    return splitedArray2.join(` `);
}
joinArrays();
console.log(joinArrays());

function displayTag() {
    document.getElementById('drop-ingredients_open').innerHTML = tag.map(
        (x) => `
                <a href="#" class="linkIngr" id="${x}" data-name="${x}">
                        ${x}
                </a>
            `
    ).join('');
}


displayIngredientsTags();
displayAppliancesTags();
displayUstensilesTags();

// create array of tags by destructuring recipes to get default values I need
// I also removed ingredients, appliance and ustensils 'redundacies using reduce method which call a callback function (prv, cur) and returns an array and transform: prv as an accumulator (initial value) and cur as current value. 
// I transformed the strings to lower case and   push them in tags array
function createArrayTags() {
    // grab ingredients, appliance and ustensils by destructuring recipes to get default values
    const { ingredients = [], appliance: appliance = [], ustensils = [] } = recipes;

    tags.push(ingredients, appliance, ustensils);


    // push ingredients, appliance and ustensils in tags array
    ingredients.push(...ingredients);
    console.log("ingredients", ingredients);
    appliance.push(...appliance);
    console.log("appliance", appliance);
    ustensils.push(...ustensils);
    console.log("ustensils", ustensils);


    ingredients.push(recipes.flatMap(x => x.ingredients.map(x => x.ingredient.toLowerCase().normalize("NFD"))).reduce(
        // delete redundancies using reduce method which call a callback function and returns an array (prv, cur) 
        // prv as an accumulator (initial value) and cur as current value
        (prv, cur) => {
            // console.log(prv,cur);
            let key = cur; // init key value

            if (!prv.key[key]) { // if key{} and key[] do not exist
                prv.key[key] = true; // create key
                prv.res.push(key); // push (cur) to array (prv.res)
            }
            return prv; // return prv
        }, { key: {}, res: [] }).res.sort());
    // console.log(ingredients);

    appliance.push(recipes.flatMap(x => x.appliance.toLowerCase().normalize("NFD")).reduce(
        // delete redundancies using reduce method which call a callback function and returns an array (prv, cur) 
        // prv as an accumulator (initial value) and cur as current value
        (prv, cur) => {
            // console.log(prv,cur);
            let key = cur; // init key value

            if (!prv.key[key]) { // if key{} and key[] do not exist
                prv.key[key] = true; // create key
                prv.res.push(key); // push (cur) to array (prv.res)
            }
            return prv; // return prv
        }, { key: {}, res: [] }).res.sort()); // select array (res) and sort);


    ustensils.push(recipes.filter(
        (x) => x.ustensils).flatMap(
            (x) => x.ustensils.map(
                (x) => x.toLowerCase().normalize("NFD"))).reduce(
                    // delete redundancies using reduce method which call a callback function and returns an array (prv, cur) 
                    // prv as an accumulator (initial value) and cur as current value
                    (prv, cur) => {
                        // console.log(prv,cur);
                        let key = cur; // init key value

                        if (!prv.key[key]) { // if key{} and key[] do not exist
                            prv.key[key] = true; // create key
                            prv.res.push(key); // push (cur) to array (prv.res)
                        }
                        return prv; // return prv
                    }, { key: {}, res: [] }).res.sort());
}

function addTagElement(e) {
    // Check if the clicked element has a 'data-name' attribute

    // Create new tag element
    const tag = document.createElement('div');
    tag.setAttribute('class', 'tags');
    tag.setAttribute('data-name', e.target.dataset.name);
    tag.textContent += e.target.dataset.name;

    // Create tagList element
    const tagsList = document.getElementById('tags');
    tagsList.appendChild(tag);

    // Create remove icon element
    const removeIcon = document.createElement('i');
    removeIcon.setAttribute('class', 'far fa-times-circle')
    removeIcon.setAttribute('data-name', e.target.dataset.name);

    // Append new tag and remove icon elements to the list of tags
    removeIcon.addEventListener('click', function () {
        // Remove the clicked tag from the tag set and remove the tag element from the list of tags
        tag.delete(e.target.dataset.name);
        tag.remove();
        // Update the recipe cards and reload the page
        displayRecipesCard(e.target.dataset.name);
    });

    newTag.appendChild(removeIcon); // Add the remove icon to the new tag element
}

displayTag();
console.log(displayTag());


function handleClickIngr(e, tagsIngredients) {
    // push displayIngredientTags in tags array
    tags.push(...new Set([...tagsIngredients]));
    console.log(tags);
    // Add clicked ingredient to tagsIngredients' array
    tagsIngredients.push(displayRecipesCard(e.target.dataset.name));
    // Create new tag element.
    const newTagIngr = document.createElement('div');
    newTagIngr.setAttribute('class', 'tags tagIngr');
    newTagIngr.setAttribute('data-name', e.target.dataset.name);
    newTagIngr.textContent += e.target.dataset.name;

    // Create remove icon element.
    const removeIcon = document.createElement('i');
    removeIcon.setAttribute('class', 'far fa-times-circle')
    removeIcon.setAttribute('data-name', e.target.dataset.name);

    // Append new tag and remove icon elements to the list of tags.
    const tagsListIngr = document.getElementById('tags');
    newTagIngr.appendChild(removeIcon);
    tagsListIngr.appendChild(newTagIngr);

    // Add a listener to the remove icon element.
    removeIcon.addEventListener('click', function () {
        tagsIngredients.splice(tagsIngredients.indexOf(e.target.dataset.name), 1);
        newTagIngr.remove();
        displayRecipesCard(e.target.dataset.name)

    });
}

function displayIngredientsTags() {
    // init tagsIngredients array
    const tagsIngredients = recipes.flatMap((x) => x.ingredients.map(y => y.ingredient.toLowerCase().normalize("NFD")));
    // console.log(tagsIngredients);

    //  add event listener to display tags
    document.getElementById('drop-ingredients_open').addEventListener('click', (e) => handleClickIngr(e, tagsIngredients));
}

function handleClickAppl(e, tagsAppliances) {
    // push displayIngredientTags in tags array
    tags.push(...new Set([...tagsAppliances]));
    console.log(tags);
    // Add clicked ingredient to the list of selected appliances.
    // tagsAppliances.push("appliance" + e.target.dataset.name);
    // console.log(`appliance : ${tagsAppliances.push(displayRecipesCard(e.target.dataset.name))}`);

    // Create new tag element.
    // -------------------------------------------------------- div
    const newTagAppl = document.createElement('div');
    newTagAppl.setAttribute('class', 'tags tagAppl');
    newTagAppl.setAttribute('data-name', e.target.dataset.name);
    newTagAppl.textContent += e.target.dataset.name;

    // Create remove icon element.
    // -------------------------------------------------------- i
    const removeIcon = document.createElement('i');
    removeIcon.setAttribute('class', 'far fa-times-circle');
    removeIcon.setAttribute('data-name', e.target.dataset.name);

    // Append new tag and remove icon elements to the list of tags.
    // -------------------------------------------------------- div
    const tagsListAppl = document.getElementById('tags');
    // console.log(tagsListAppl);
    newTagAppl.appendChild(removeIcon);
    tagsListAppl.appendChild(newTagAppl);

    removeIcon.addEventListener('click', function () {
        tagsAppliances.splice(tagsAppliances.indexOf(e.target.dataset.name), 1);
        newTagAppl.remove();
        displayRecipesCard(e.target.dataset.name)
    })
}


function displayAppliancesTags() {
    // init tagsAppliances array
    const tagsAppliances = recipes.flatMap((x) => x.appliance.toLowerCase().normalize("NFD"));
    // console.log(tagsAppliances);

    // add event listener to display tags
    document.getElementById('drop-appareil_open').addEventListener('click', (e) => handleClickAppl(e, tagsAppliances));
}



function handleClickUst(e, tagsUstensiles) {
    // push displayUstensilesTags in tags array
    tags.push(...new Set([...tagsUstensiles]));
    console.log(tags);
    // Add clicked ingredient to the list of selected appliances.
    tagsUstensiles.push(e.target.dataset.name);
    // console.log(`ustensile : ${tagsUstensiles.push("ustensiles" + e.target.dataset.name)}`);
    // Create new tag element.
    // -------------------------------------------------------- div
    const newTagUst = document.createElement('div');
    newTagUst.setAttribute('class', 'tags tagUst');
    newTagUst.setAttribute('data-name', e.target.dataset.name);
    newTagUst.textContent += e.target.dataset.name;

    // Create remove icon element.
    // -------------------------------------------------------- i
    const removeIcon = document.createElement('i');
    removeIcon.setAttribute('class', 'far fa-times-circle');
    removeIcon.setAttribute('data-name', e.target.dataset.name);

    // Append new tag and remove icon elements to the list of tags.
    // -------------------------------------------------------- div
    const tagsListUst = document.getElementById('tags');
    // console.log(tagsListUst);
    newTagUst.appendChild(removeIcon);
    tagsListUst.appendChild(newTagUst);

    removeIcon.addEventListener('click', function () {
        tagsUstensiles.splice(tagsUstensiles.indexOf(e.target.dataset.name), 1);
        newTagUst.remove();
        displayRecipesCard(e.target.dataset.name)
    })

}

function displayUstensilesTags() {
    // init tagsUstensiles array
    const tagsUstensiles = recipes.filter(
        (x) => x.ustensils).flatMap(
            (x) => x.ustensils.map(
                (x) => x.toLowerCase().normalize("NFD")));
    // console.log(tagsUstensiles);

    //  add event listener to display tags 
    document.getElementById('drop-ustensiles_open').addEventListener('click', (e) => handleClickUst(e, tagsUstensiles));
}