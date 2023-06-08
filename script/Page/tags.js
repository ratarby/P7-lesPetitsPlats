
let tags = [];


const handleClickTag = tags => {
    tags= recipes.flatMap((x) => x.ingredients.map(y => y.ingredient.toLowerCase().normalize("NFD")));
    tags= recipes.flatMap((x) => x.appliance.toLowerCase().normalize("NFD"));
    tags= recipes.filter((x) => x.ustensils).flatMap((x) => x.ustensils.map((x) => x.toLowerCase().normalize("NFD")))
    
    tags.forEach(function (e) {
        tags.push(e.target.dataset.name);
        console.log(tags.push(e.target.dataset.name));
        // Create new tag element.
        const newTag = document.createElement('div');
        newTag.className = 'tag';
        newTag.textContent = e.target.dataset.name;
    
        // Create remove icon element.
        const removeIcon = document.createElement('i');
        removeIcon.className = 'far fa-times-circle';
        removeIcon.dataset.name = e.target.dataset.name;
    
        // Append new tag and remove icon elements to the list of tags.
        const tagsList = document.getElementById('tags');
        newTag.appendChild(removeIcon);
        tagsList.appendChild(newTag);
    
        // Update the recipe cards.
    
        displayRecipesCard(tags);
        console.log(displayRecipesCard(tags));
        });
    };



function displayTags() {
    document.getElementById('drop').addEventListener('click', (e) => handleClickTag(e, tags));
}



displayIngredientsTags();

let tagsIngredients = [];

function handleClickIngr(e, tagsIngredients) {
    // Add clicked ingredient to tagsIngredients' array
    tagsIngredients.push(sortByIngredients(e.target.dataset.name));
    console.log(`ingredient : ${tagsIngredients.push(e.target.dataset.name)} `);
    // Create new tag element.
    const newTagIngr = document.createElement('div');
    newTagIngr.setAttribute('class', 'tagIngr');
    newTagIngr.textContent += e.target.dataset.name;

    // Create remove icon element.
    const removeIcon = document.createElement('i');
    removeIcon.setAttribute('class', 'far fa-times-circle');
    removeIcon.setAttribute('data-name', e.target.dataset.name);

    // Append new tag and remove icon elements to the list of tags.
    const tagsListIngr = document.getElementById('tagsIngr');
    newTagIngr.appendChild(removeIcon);
    tagsListIngr.appendChild(newTagIngr);

    // Update the recipe cards
    displayRecipesCard(tagsIngredients);
}

function displayIngredientsTags() {
    const tagsIngredients = recipes.flatMap((x) => x.ingredients.map(y => y.ingredient.toLowerCase().normalize("NFD")));
    document.getElementById('drop-ingredients_open').addEventListener('click', (e) => handleClickIngr(e, tagsIngredients));
}

displayAppliancesTags();

let tagsAppliances = [];


function handleClickAppl(e, tagsAppliances) {
    // Add clicked ingredient to the list of selected appliances.
    tagsAppliances.push("appliance" + e.target.dataset.name);
    console.log(`appliance : ${tagsAppliances.push(e.target.dataset.name)}`);

    // Create new tag element.
    const newTagAppl = document.createElement('div');
    newTagAppl.setAttribute('class', 'tagAppl');
    newTagAppl.textContent += e.target.dataset.name;

    // Create remove icon element.
    const removeIcon = document.createElement('i');
    removeIcon.setAttribute('class', 'far fa-times-circle');
    removeIcon.setAttribute('data-name', e.target.dataset.name);

    // Append new tag and remove icon elements to the list of tags.
    const tagsListAppl = document.getElementById('tagsAppl');
    newTagAppl.appendChild(removeIcon);
    tagsListAppl.appendChild(newTagAppl);

    // Update the recipe cards.
    displayRecipesCard(tagsAppliances);
}


function displayAppliancesTags() {
    const tagsAppliances = recipes.flatMap((x) => x.appliance.toLowerCase().normalize("NFD"));
    document.getElementById('drop-appareil_open').addEventListener('click', (e) => handleClickAppl(e, tagsAppliances));
}

displayUstensilesTags();

let tagsUstensiles = [];


function handleClickUst(e, tagsUstensiles) {
    // Add clicked ingredient to the list of selected appliances.
    tagsUstensiles.push(e.target.dataset.name);
    // console.log(`ustensile : ${tagsUstensiles.push("ustensiles" + e.target.dataset.name)}`);
    // Create new tag element.
    const newTagUst = document.createElement('div');
    newTagUst.setAttribute('class', 'tagUst');
    newTagUst.textContent += e.target.dataset.name;

    // Create remove icon element.
    const removeIcon = document.createElement('i');
    removeIcon.setAttribute('class', 'far fa-times-circle');
    removeIcon.setAttribute('data-name', e.target.dataset.name);

    // Append new tag and remove icon elements to the list of tags.
    const tagsListUst = document.getElementById('tagsUst');
    newTagUst.appendChild(removeIcon);
    tagsListUst.appendChild(newTagUst);

    // Update the recipe cards.
    displayRecipesCard(tagsUstensiles);
}

function displayUstensilesTags() {
    const tagsUstensiles = recipes.filter(
        (x) => x.ustensils).flatMap( 
            (x) => x.ustensils.map(
                (x) => x.toLowerCase().normalize("NFD")));
    document.getElementById('drop-ustensiles_open').addEventListener('click', (e) => handleClickUst(e, tagsUstensiles));
}









