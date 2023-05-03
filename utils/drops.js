/** Instanciation **/

// ------------------------------------------------------------------ drops button Open 
let dropIngrBtnOpen = document.getElementById("ingr-down");
let dropApparBtnOpen = document.getElementById("appar-down"); 
let dropUsteBtnOpen = document.getElementById("uste-down");
// ------------------------------------------------------------------ drops button Close
let dropIngrBtnClose = document.getElementById("ingr-up");
let dropApparBtnClose = document.getElementById("appar-up");
let dropUsteBtnClose = document.getElementById("uste-up");

// ------------------------------------------------------------------ search recipes
let searchRecipes = document.querySelector(".search-recipes");
let main = document.querySelector(".recipes");

//DROPDOWNS

// ------------------------------------------------------------------ dropdowns open
dropIngrBtnOpen.addEventListener("click", openDropIngr);
dropApparBtnOpen.addEventListener("click", openDropAppar);
dropUsteBtnOpen.addEventListener("click", openDropUste);

// ------------------------------------------------------------------ dropdowns close
dropIngrBtnClose.addEventListener("click", closeAll); 
dropApparBtnClose.addEventListener("click", closeAll);
dropUsteBtnClose.addEventListener("click", closeAll);

main.addEventListener("click", closeAll); 
searchRecipes.addEventListener("click", closeAll); 


// create functions

// -------------------------------------------------------------------Function close all dropdowns

function closeAll() {
  document.getElementById("drop-ingr__Open").style.display = "none";
  document.getElementById("drop-appar__Open").style.display = "none";
  document.getElementById("drop-uste__Open").style.display = "none";
}

// ------------------------------------------------------------------ Function open selected dropdown
function openDropIngr() {
  document.getElementById("drop-ingr__Open").style.display = "flex";
  document.getElementById("drop-appar__Open").style.display = "none";
  document.getElementById("drop-uste__Open").style.display = "none";
}

function openDropAppar() {
  document.getElementById("drop-ingr__Open").style.display = "none";
  document.getElementById("drop-appar__Open").style.display = "flex";
  document.getElementById("drop-uste__Open").style.display = "none";
}

function openDropUste() {
  document.getElementById("drop-uste__Open").style.display = "flex";
  document.getElementById("drop-appar__Open").style.display = "none";
  document.getElementById("drop-ingr__Open").style.display = "none";
}
