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

        // click event listener to the removeIcon element, and when clicked, it removes 
        //the corresponding element from the tagsAppliances array, removes the associated DOM element, and updates the displayed recipes. 
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
    }

    // handle tags witch used to display tags in one array with paremeters 'e' and 'tagType'
    function handleTagClick(e, tagType) {
        // push tagsType with each element (spreads oprator) to tags' array
        // ...tagsType is wrapped in a "...new Set() constructor" . Its a built-in Js obj
        // which ensure that  any duplicate values in the tags array are automatically removed
        // and append a unique value to the tags array.
        tags.push(...new Set([...tagType]));
        tagType.push(e.target.dataset.name);
        closeAll();

        // ---------------------------------------------------------- div
        const newTag = document.createElement('div');
        newTag.setAttribute('class', `tags tag ${tagType}`);
        newTag.setAttribute('data-name', e.target.dataset.name);
        newTag.textContent += e.target.dataset.name;

        
        // if statement to display the color of the tag
        if (tagType === tagsIngredients) { // if tagType is equal to tagsIngredients
            newTag.classList.add('tagIngr'); // add class tagIngr for blue color
        } else if (tagType === tagsAppliances) { // if tagType is equal to tagsAppliances
            newTag.classList.add('tagAppl'); // add class tagAppl for green color
        } else if (tagType === tagsUstensils) { // if tagType is equal to tagsIngredients
            newTag.classList.add('tagUst'); // add class tagUst for red color
        }

        // ---------------------------------------------------------- i
        const removeIcon = document.createElement('i');
        removeIcon.setAttribute('class', 'far fa-times-circle');
        removeIcon.setAttribute('data-name', e.target.dataset.name);
        
        // ---------------------------------------------------------- div tags
        const tagsList = document.getElementById('tags');
        newTag.appendChild(removeIcon);
        tagsList.prepend(newTag);

        displayRecipesCard(''); // call function displayRecipesCard

        // click event listener to the removeIcon element, and when clicked, it removes
        removeIcon.addEventListener('click', function () {
            //removes the element in the tags array that matches the value of e.target.dataset.name
            tagType.splice(tagType.indexOf(e.target.dataset.name), 1);
            // remove the element in the tags array
            newTag.remove();
            displayRecipesCard(''); // call function displayRecipesCard('')
        });

        console.log(tagType);
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
