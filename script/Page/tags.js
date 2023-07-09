console.log(recipes);

let tags = [];

improveSnippet();

// Create improve snippet for best practice and readabilities
function improveSnippet() {

    // handle ingredients tags
    function handleClickIngr(e) {
        // push tagsIngredients with each element (spreads oprator) to tags' array 
        // ...tagsIngreddient is wrapped in a "...new Set() constructor" . Its a built-in Js obj 
        // which ensure that  any duplicate values in the tagsIngredients array are automatically removed 
        // and append a unique value to the tags array.
        // push e.target.dataset.name (link) to tagsIngredients' array 
        tags.push(...new Set([...tagsIngredients]));
        tagsIngredients.push(e.target.dataset.name);

        // ---------------------------------------------------------- div 
        const newTagIngr = document.createElement('div');
        newTagIngr.setAttribute('class', 'tags tagIngr');
        newTagIngr.setAttribute('data-name', e.target.dataset.name);
        newTagIngr.textContent += e.target.dataset.name;
        
        // -----------------------------------------------------------i
        const removeIcon = document.createElement('i');
        removeIcon.setAttribute('class', 'far fa-times-circle');
        removeIcon.setAttribute('data-name', e.target.dataset.name);

        // ---------------------------------------------------------- div tags ingredients       
        const tagsListIngr = document.getElementById('tags');
        newTagIngr.appendChild(removeIcon);
        tagsListIngr.appendChild(newTagIngr);

        displayRecipesCard(''); // call function displayRecipesCard

        // remove tagsIngredients' element on click event
        removeIcon.addEventListener('click', function () {
            //removes the element in the tagsIngredients array that matches the value of e.target.dataset.name 
            //by using the splice() method which returns a new array by removing the element at the specified index 
            tagsIngredients.splice(tagsIngredients.indexOf(e.target.dataset.name), 1);
            // remove the element in the tags array
            newTagIngr.remove();
            // call the displayRecipesCard() function and passes the value of e.target.dataset.name as paremeter.
            displayRecipesCard(e.target.dataset.name);
        });
    }

    // The displayIngredientsTags() function sets up a click event listener 
    // on the element with the ID 'drop-ingredients_open', 
    // triggering the handleClickIngr() function when clicked.
    function displayIngredientsTags() {
        document.getElementById('drop-ingredients_open').addEventListener('click', (e) => handleClickIngr(e));
        console.log('Ingredients', tagsIngredients);

    }

    // handle appliances tags
    function handleClickAppl(e) {
        // push tagsAplliances with each element (spreads oprator) to tags' array 
        // ...tagsAppliances is wrapped in a "...new Set() constructor" . Its a built-in Js obj 
        // which ensure that  any duplicate values in the tagsAppliances array are automatically removed 
        // and append a unique value to the tags array.
        // push e.target.dataset.name (link) to tagsIngredients' array 
        tags.push(...new Set([...tagsAppliances]));
        tagsAppliances.push(e.target.dataset.name);

        // ---------------------------------------------------------- div
        const newTagAppl = document.createElement('div');
        newTagAppl.setAttribute('class', 'tags tagAppl');
        newTagAppl.setAttribute('data-name', e.target.dataset.name);
        newTagAppl.textContent += e.target.dataset.name;

        // ---------------------------------------------------------- i
        const removeIcon = document.createElement('i');
        removeIcon.setAttribute('class', 'far fa-times-circle');
        removeIcon.setAttribute('data-name', e.target.dataset.name);

        // ---------------------------------------------------------- div tags applance
        const tagsListAppl = document.getElementById('tags');
        newTagAppl.appendChild(removeIcon);
        tagsListAppl.appendChild(newTagAppl);

        displayRecipesCard(''); // call function displayRecipesCard

        // remove tagsApliances' element on click event
        removeIcon.addEventListener('click', function () {
            //removes the element in the tagsAppliances array that matches the value of e.target.dataset.name
            tagsAppliances.splice(tagsAppliances.indexOf(e.target.dataset.name), 1);
            // remove the element in the tags array
            newTagAppl.remove();
            // call the displayRecipesCard() function and passes the value of e.target.dataset.name as argument and update the displayed recipes.
            displayRecipesCard(e.target.dataset.name);
        })
    }

    // The displayAppliancesTags() function sets up a click event listener
    // on the element with the ID 'drop-appareil_open',
    // triggering the handleClickAppl() function when clicked.
    function displayAppliancesTags() {
        document.getElementById('drop-appareil_open').addEventListener('click', (e) => handleClickAppl(e));
        console.log('Appliance', tagsAppliances);
    }

    // handle ustensils tags
    function handleClickUst(e) {
        // push tagsUstensils with each element (spreads oprator) to tags' array
        // ...tagsUstensils is wrapped in a "...new Set() constructor" . Its a built-in Js obj
        // which ensure that  any duplicate values in the tagsUstensils array are automatically removed
        // and append a unique value to the tags array.
        tags.push(...new Set([...tagsUstensils]));
        tagsUstensils.push(e.target.dataset.name);

        // ---------------------------------------------------------- div
        const newTagUst = document.createElement('div');
        newTagUst.setAttribute('data-name', e.target.dataset.name);
        newTagUst.textContent += e.target.dataset.name;

        // ---------------------------------------------------------- i
        const removeIcon = document.createElement('i');
        removeIcon.setAttribute('class', 'far fa-times-circle');
        removeIcon.setAttribute('data-name', e.target.dataset.name);

        // ---------------------------------------------------------- div tags ustensils
        const tagsListUst = document.getElementById('tags');
        newTagUst.appendChild(removeIcon);
        tagsListUst.appendChild(newTagUst);

        displayRecipesCard(''); // call function displayRecipesCard

        // click event listener to the removeIcon element, and when clicked, it removes
        removeIcon.addEventListener('click', function () {
            //removes the element in the tagsUstensils array that matches the value of e.target.dataset.name
            tagsUstensils.splice(tagsUstensils.indexOf(e.target.dataset.name), 1);
            // remove the element in the tags array
            newTagUst.remove();
            // call the displayRecipesCard() function and passes the value of e.target.dataset.name as argument and update the displayed recipes
            displayRecipesCard(e.target.dataset.name)
        })
    }

    // The displayUstensilsTags() function sets up a click event listener
    // on the element with the ID 'drop-ustensils_open',
    // triggering the handleClickUst() function when clicked.
    function displayUstensilesTags() {
        document.getElementById('drop-ustensiles_open').addEventListener('click', (e) => handleClickUst(e));
        console.log("Ustensiles ", tagsUstensils);
    }

    // Refactored version of the handleTagClick function

    function handleTagClick(e, tagType) {
        // Add the elements from tagType to the tags array, ensuring uniqueness
        tags.push(...new Set([...tagType]));

        // Add the clicked tag to the tagType array
        tagType.push(e.target.dataset.name);

        // Close all other elements (not shown in code)

        // Create a new div element to display the clicked tag
        const newTag = document.createElement('div');
        newTag.setAttribute('class', `tags tag ${tagType}`);
        newTag.setAttribute('data-name', e.target.dataset.name);
        newTag.textContent += e.target.dataset.name;
        closeAll();

        // Set the appropriate color class based on the tagType
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

        // Get the tags container element
        const tagsList = document.getElementById('tags');

        // Add the remove icon to the new tag element
        newTag.appendChild(removeIcon);
        function removeTag(tagType, tagName, tagElement) {
            tagType.splice(tagType.indexOf(tagName), 1);
            tagElement.remove();
            displayRecipesCard(tagName);
        }

        // Prepend the new tag to the tags container
        tagsList.prepend(newTag);

        // Call the displayRecipesCard function
        displayRecipesCard('');

        // Add a click event listener to the removeIcon element
        removeIcon.addEventListener('click', function () {

            // Remove the clicked tag from the tagType array
            tagType.splice(tagType.indexOf(e.target.dataset.name), 1);

            // Remove the new tag element from the DOM
            newTag.remove();

            // Call the displayRecipesCard function
            displayRecipesCard('');
        });

        console.log('tags', tagType);
    }


    // The handleClickIngr function is a higher-level function that serves as a wrapper 
    // for the handleTagClick function. It takes an event e as a parameter and 
    // passes it along with the tagsIngredients argument to the handleTagClick function. 
    // This function is used to handle a specific event related to
    // ingredients, triggering handleTagClick.
    function handleClickIngr(e) {
        handleTagClick(e, tagsIngredients);
    }

    // The handleClickAppl function is a higher-level function that serves as a wrapper
    // for the handleTagClick function. It takes an event e as a parameter and
    // passes it along with the tagsAppliances argument to the handleTagClick function.
    // This function is used to handle a specific event related to
    // appliances, triggering handleTagClick.
    function handleClickAppl(e) {
        handleTagClick(e, tagsAppliances);
    }

    // The handleClickUst function is a higher-level function that serves as a wrapper
    // for the handleTagClick function. It takes an event e as a parameter and
    // passes it along with the tagsUstensils argument to the handleTagClick function.
    // This function is used to handle a specific event related to
    // ustensils, triggering handleTagClick.
    function handleClickUst(e) {
        handleTagClick(e, tagsUstensils);
    }

    displayIngredientsTags(); // call function displayIngredientsTags
    displayAppliancesTags(); // call function displayAppliancesTags
    displayUstensilesTags(); // call function displayUstensilesTags

    
}
