


    displayIngredientsTags();
    displayAppliancesTags();
    displayUstensilesTags();
    
function handleClickIngr(e, tagsIngredients) {
    // Add clicked ingredient to tagsIngredients' array
    tagsIngredients.push(displayRecipesCard(e.target.dataset.name));
console.log(tagsIngredients);
    // Create new tag element.
    const newTagIngr = document.createElement('div');
    newTagIngr.setAttribute('class', 'tagIngr');
    newTagIngr.textContent += e.target.dataset.name;

    // Create remove icon element.
    const removeIcon = document.createElement('i');
    removeIcon.setAttribute('class', 'far fa-times-circle')
    removeIcon.setAttribute('data-name', e.target.dataset.name);

    // Append new tag and remove icon elements to the list of tags.
    const tagsListIngr = document.getElementById('tagsIngr');
    newTagIngr.appendChild(removeIcon);
    tagsListIngr.appendChild(newTagIngr);
    
    // Add a listener to the remove icon element.
    removeIcon.addEventListener('click', function() {
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
        // Add clicked ingredient to the list of selected appliances.
        // tagsAppliances.push("appliance" + e.target.dataset.name);
        console.log(`appliance : ${tagsAppliances.push(e.target.dataset.name)}`);
    
        // Create new tag element.
        // -------------------------------------------------------- div
        const newTagAppl = document.createElement('div');
        newTagAppl.setAttribute('class', 'tagAppl');
        newTagAppl.textContent += e.target.dataset.name;
    
        // Create remove icon element.
        // -------------------------------------------------------- i
        const removeIcon = document.createElement('i');
        removeIcon.setAttribute('class', 'far fa-times-circle');
        removeIcon.setAttribute('data-name', e.target.dataset.name);
    
        // Append new tag and remove icon elements to the list of tags.
        // -------------------------------------------------------- div
        const tagsListAppl = document.getElementById('tagsAppl');
        // console.log(tagsListAppl);
        newTagAppl.appendChild(removeIcon);
        tagsListAppl.appendChild(newTagAppl);
        
        removeIcon.addEventListener('click', function() {
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
        // Add clicked ingredient to the list of selected appliances.
        tagsUstensiles.push(e.target.dataset.name);
        // console.log(`ustensile : ${tagsUstensiles.push("ustensiles" + e.target.dataset.name)}`);
        // Create new tag element.
        // -------------------------------------------------------- div
        const newTagUst = document.createElement('div');
        newTagUst.setAttribute('class', 'tagUst');
        newTagUst.textContent += e.target.dataset.name;
    
        // Create remove icon element.
        // -------------------------------------------------------- i
        const removeIcon = document.createElement('i');
        removeIcon.setAttribute('class', 'far fa-times-circle');
        removeIcon.setAttribute('data-name', e.target.dataset.name);
    
        // Append new tag and remove icon elements to the list of tags.
        // -------------------------------------------------------- div
        const tagsListUst = document.getElementById('tagsUst');
        // console.log(tagsListUst);
        newTagUst.appendChild(removeIcon);
        tagsListUst.appendChild(newTagUst);
        removeIcon.addEventListener('click', function() {
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
    







