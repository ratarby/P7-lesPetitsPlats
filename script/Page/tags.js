

displayIngredientsTags();


// console.log(tagsIngredients);
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
    // console.log(tagsListIngr);
    newTagIngr.appendChild(removeIcon);
    tagsListIngr.appendChild(newTagIngr);

}

function displayIngredientsTags() {
    const tagsIngredients = recipes.flatMap((x) => x.ingredients.map(y => y.ingredient.toLowerCase().normalize("NFD")));
    // console.log(tagsIngredients);
    document.getElementById('drop-ingredients_open').addEventListener('click', (e) => handleClickIngr(e, tagsIngredients));
}

displayAppliancesTags();



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
    // console.log(tagsListAppl);
    newTagAppl.appendChild(removeIcon);
    tagsListAppl.appendChild(newTagAppl);

}


function displayAppliancesTags() {
    const tagsAppliances = recipes.flatMap((x) => x.appliance.toLowerCase().normalize("NFD"));
    // console.log(tagsAppliances);
    document.getElementById('drop-appareil_open').addEventListener('click', (e) => handleClickAppl(e, tagsAppliances));
}

displayUstensilesTags();



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
    // console.log(tagsListUst);
    newTagUst.appendChild(removeIcon);
    tagsListUst.appendChild(newTagUst);
}

function displayUstensilesTags() {
    const tagsUstensiles = recipes.filter(
        (x) => x.ustensils).flatMap( 
            (x) => x.ustensils.map(
                (x) => x.toLowerCase().normalize("NFD")));
    console.log(tagsUstensiles);
    document.getElementById('drop-ustensiles_open').addEventListener('click', (e) => handleClickUst(e, tagsUstensiles));
}









