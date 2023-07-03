// console.log(recipes);

let tags = [];

improveSnippet();

// Create impreve snippet   for best practice and readabilities 
function improveSnippet() {

    // createArrayTags();

    let quote = joinArrays();

    let tag = quote.split(',');

    function joinArrays() {
        const flattenedArray = [...tags].flatMap(x => Array.isArray(x) ? x.join('') : x);
        const splitedArray = flattenedArray.flatMap(x => x.split(' '));
        const splitedArray2 = [...new Set(splitedArray)];
        return splitedArray2.join(' ');
    }

    // function createArrayTags() {
    //     const { ingredients = [], appliance: appliance = [], ustensils = [] } = recipes;

    //     tags.push(ingredients, appliance, ustensils);

    //     ingredients.push(...ingredients);
    //     appliance.push(...appliance);
    //     ustensils.push(...ustensils);

    //     ingredients.push(recipes.flatMap(x => x.ingredients.map(x => x.ingredient.toLowerCase().normalize("NFD"))).reduce(
    //         (prv, cur) => {
    //             let key = cur;

    //             if (!prv.key[key]) {
    //                 prv.key[key] = true;
    //                 prv.res.push(key);
    //             }
    //             return prv;
    //         }, { key: {}, res: [] }).res.sort());

    //     appliance.push(recipes.flatMap(x => x.appliance.toLowerCase().normalize("NFD")).reduce(
    //         (prv, cur) => {
    //             let key = cur;

    //             if (!prv.key[key]) {
    //                 prv.key[key] = true;
    //                 prv.res.push(key);
    //             }
    //             return prv;
    //         }, { key: {}, res: [] }).res.sort());

    //     ustensils.push(recipes.filter(
    //         (x) => x.ustensils).flatMap(
    //             (x) => x.ustensils.map(
    //                 (x) => x.toLowerCase().normalize("NFD"))).reduce(
    //                     (prv, cur) => {
    //                         let key = cur;

    //                         if (!prv.key[key]) {
    //                             prv.key[key] = true;
    //                             prv.res.push(key);
    //                         }
    //                         return prv;
    //                     }, { key: {}, res: [] }).res.sort());
    // }

    // function addTagElement(e) {
    //     const tag = document.createElement('div');
    //     tag.setAttribute('class', 'tags');
    //     tag.setAttribute('data-name', e.target.dataset.name);
    //     tag.textContent += e.target.dataset.name;

    //     const tagsList = document.getElementById('tags');
    //     tagsList.appendChild(tag);

    //     const removeIcon = document.createElement('i');
    //     removeIcon.setAttribute('class', 'far fa-times-circle')
    //     removeIcon.setAttribute('data-name', e.target.dataset.name);

    //     removeIcon.addEventListener('click', function () {
    //         tag.delete(e.target.dataset.name);
    //         tag.remove();
    //         displayRecipesCard(e.target.dataset.name);
    //     });

    //     newTag.appendChild(removeIcon);
    // }

    function handleClickIngr(e) {
        tags.push(...new Set([...tagsIngredients]));
        tagsIngredients.push(e.target.dataset.name);

        const newTagIngr = document.createElement('div');
        newTagIngr.setAttribute('class', 'tags tagIngr');
        newTagIngr.setAttribute('data-name', e.target.dataset.name);
        newTagIngr.textContent += e.target.dataset.name;

        const removeIcon = document.createElement('i');
        removeIcon.setAttribute('class', 'far fa-times-circle')
        removeIcon.setAttribute('data-name', e.target.dataset.name);

        const tagsListIngr = document.getElementById('tags');
        newTagIngr.appendChild(removeIcon);
        tagsListIngr.appendChild(newTagIngr);

        displayRecipesCard('');

        removeIcon.addEventListener('click', function () {
            tagsIngredients.splice(tagsIngredients.indexOf(e.target.dataset.name), 1);
            newTagIngr.remove();
            displayRecipesCard(e.target.dataset.name)

        });
    }

    function displayIngredientsTags() {
        document.getElementById('drop-ingredients_open').addEventListener('click', (e) => handleClickIngr(e));
    }

    function handleClickAppl(e) {
        tags.push(...new Set([...tagsAppliances]));
        tagsAppliances.push(e.target.dataset.name);

        const newTagAppl = document.createElement('div');
        newTagAppl.setAttribute('class', 'tags tagAppl');
        newTagAppl.setAttribute('data-name', e.target.dataset.name);
        newTagAppl.textContent += e.target.dataset.name;

        const removeIcon = document.createElement('i');
        removeIcon.setAttribute('class', 'far fa-times-circle');
        removeIcon.setAttribute('data-name', e.target.dataset.name);

        const tagsListAppl = document.getElementById('tags');
        newTagAppl.appendChild(removeIcon);
        tagsListAppl.appendChild(newTagAppl);

        removeIcon.addEventListener('click', function () {
            tagsAppliances.splice(tagsAppliances.indexOf(e.target.dataset.name), 1);
            newTagAppl.remove();
            displayRecipesCard(e.target.dataset.name);
        })
    }

    function displayAppliancesTags() {
        document.getElementById('drop-appareil_open').addEventListener('click', (e) => handleClickAppl(e));
    }



    function handleClickUst(e) {
        tags.push(...new Set([...tagsUstensils]));
        tagsUstensils.push(e.target.dataset.name);

        const newTagUst = document.createElement('div');
        newTagUst.setAttribute('data-name', e.target.dataset.name);
        newTagUst.textContent += e.target.dataset.name;

        const removeIcon = document.createElement('i');
        removeIcon.setAttribute('class', 'far fa-times-circle');
        removeIcon.setAttribute('data-name', e.target.dataset.name);

        const tagsListUst = document.getElementById('tags');
        newTagUst.appendChild(removeIcon);
        tagsListUst.appendChild(newTagUst);

        // displayRecipesCard('');

        removeIcon.addEventListener('click', function () {
            tagsUstensils.splice(tagsUstensils.indexOf(e.target.dataset.name), 1);
            newTagUst.remove();
            displayRecipesCard(e.target.dataset.name)
        })

    }

        function displayUstensilesTags() {
            document.getElementById('drop-ustensiles_open').addEventListener('click', (e) => handleClickUst(e));
    }


document.getElementById('tags').addEventListener('click', function (e) {
    if (e.target && e.target.matches('i')) {
        const tagName = e.target.dataset.name;
        const tagElement = document.querySelector(`[data-name="${tagName}"]`);
        tagElement.remove();

        tagsIngredients.splice(tagsIngredients.indexOf(tagName), 1);
        tagsAppliances.splice(tagsAppliances.indexOf(tagName), 1);
        tagsUstensils.splice(tagsUstensils.indexOf(tagName), 1);

        displayRecipesCard(tagName < -1 ? tagName : 1);
    }
});


function handleTagClick(e, tagType) {
    reset();
    // Add the clicked tag type to the tags array
    tags.push(...new Set([...tagType]));

    // Add the clicked tag to the tagType array
    tagType.push(e.target.dataset.name);

    // Create a new tag element
    const newTag = document.createElement('div');
    newTag.setAttribute('class', `tags tag ${tagType}`);
    newTag.setAttribute('data-name', e.target.dataset.name);
    newTag.textContent += e.target.dataset.name;

    // Add the appropriate class based on the tag type
    if (tagType === tagsIngredients) {
        newTag.classList.add('tagIngr');
    } else if (tagType === tagsAppliances) {
        newTag.classList.add('tagAppl');
    } else if (tagType === tagsUstensils) {
        newTag.classList.add('tagUst');
    }

    // Create a remove icon element
    const removeIcon = document.createElement('i');
    removeIcon.setAttribute('class', 'far fa-times-circle');
    removeIcon.setAttribute('data-name', e.target.dataset.name);

    // Add the remove icon to the new tag element
    newTag.appendChild(removeIcon);

    // Append the new tag element to the tags list
    const tagsList = document.getElementById('tags');
    tagsList.prepend(newTag);

    // Add a click event listener to the remove icon
    removeIcon.addEventListener('click', function () {
        // Remove the tag from the tag type array
        tagType.slice(tagType.indexOf(tags), 1);
        // Remove the tag element from the page
        newTag.remove();
        displayRecipesCard(e.target.dataset.name);
        if (tagType.length === 0) {
            displayRecipesCard('');
        }
    });
    console.log(tagType);
}




    function handleClickIngr(e) {
        handleTagClick(e, tagsIngredients);
    }

    function handleClickAppl(e) {
        handleTagClick(e, tagsAppliances);
    }

    function handleClickUst(e) {
        handleTagClick(e, tagsUstensils);
    }

    displayIngredientsTags();
    displayAppliancesTags();
    displayUstensilesTags();
}