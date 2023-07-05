console.log(recipes);

let tags = [];

improveSnippet();

// Create improve snippet for best practice and readabilities
function improveSnippet() {

    joinArrays();


    function joinArrays() {
        const flattenedArray = [...tags].flatMap(x => Array.isArray(x) ? x.join('') : x);
        const splitedArray = flattenedArray.flatMap(x => x.split(' '));
        const splitedArray2 = [...new Set(splitedArray)];
        return splitedArray2.join(' ');
    }

    function handleClickIngr(e) {
        tags.push(...new Set([...tagsIngredients]));
        tagsIngredients.push(e.target.dataset.name);

        const newTagIngr = document.createElement('div');
        newTagIngr.setAttribute('class', 'tags tagIngr');
        newTagIngr.setAttribute('data-name', e.target.dataset.name);
        newTagIngr.textContent += e.target.dataset.name;

        const removeIcon = document.createElement('i');
        removeIcon.setAttribute('class', 'far fa-times-circle');
        removeIcon.setAttribute('data-name', e.target.dataset.name);

        const tagsListIngr = document.getElementById('tags');
        newTagIngr.appendChild(removeIcon);
        tagsListIngr.appendChild(newTagIngr);

        displayRecipesCard('');

        removeIcon.addEventListener('click', function () {
            tagsIngredients.splice(tagsIngredients.indexOf(e.target.dataset.name), 1);
            newTagIngr.remove();
            displayRecipesCard(e.target.dataset.name);

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

        displayRecipesCard('');

        removeIcon.addEventListener('click', function () {
            tagsUstensils.splice(tagsUstensils.indexOf(e.target.dataset.name), 1);
            newTagUst.remove();
            displayRecipesCard(e.target.dataset.name)
        })
    }

    function displayUstensilesTags() {
        document.getElementById('drop-ustensiles_open').addEventListener('click', (e) => handleClickUst(e));
    }

    function handleTagClick(e, tagType) {
        tags.push(...new Set([...tagType]));
        tagType.push(e.target.dataset.name);

        const newTag = document.createElement('div');
        newTag.setAttribute('class', `tags tag ${tagType}`);
        newTag.setAttribute('data-name', e.target.dataset.name);
        newTag.textContent += e.target.dataset.name;

        if (tagType === tagsIngredients) {
            newTag.classList.add('tagIngr');
        } else if (tagType === tagsAppliances) {
            newTag.classList.add('tagAppl');
        } else if (tagType === tagsUstensils) {
            newTag.classList.add('tagUst');
        }

        const removeIcon = document.createElement('i');
        removeIcon.setAttribute('class', 'far fa-times-circle');
        removeIcon.setAttribute('data-name', e.target.dataset.name);

        newTag.appendChild(removeIcon);

        const tagsList = document.getElementById('tags');
        tagsList.prepend(newTag);

        displayRecipesCard('');

        removeIcon.addEventListener('click', function () {
            tagType.splice(tagType.indexOf(e.target.dataset.name), 1);
            newTag.remove();
            displayRecipesCard('');
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
