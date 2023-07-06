// Enhance the arrow functionality to trigger and propagate an action when it is opened        
let dropIngrBtn = document.getElementById("ingredients-down");
let dropAppBtn = document.getElementById("appareil-down");
let dropUstBtn = document.getElementById("ustensiles-down");

// Enhance the arrow functionality to trigger and propagate an action when it is closed
let dropIngrBtnClos = document.getElementById("ingredients-up");
let dropAppBtnClos = document.getElementById("appareil-up");
let dropUstBtnClos = document.getElementById("ustensiles-up");

//----------------------------DROPDOWNS------------------------------

// open drop down on click event
dropIngrBtn.addEventListener("click", openDropIngr);
dropAppBtn.addEventListener("click", openDropApp);
dropUstBtn.addEventListener("click", openDropUst);

// close drop down on click event
dropIngrBtnClos.addEventListener("click", closeAll); 
dropAppBtnClos.addEventListener("click", closeAll);
dropUstBtnClos.addEventListener("click", closeAll);

// close all drop down 
function closeAll() {
  document.getElementById("drop-ing_open").style.display = "none";
  document.getElementById("drop-app_open").style.display = "none";
  document.getElementById("drop-ust_open").style.display = "none";
}

// open drop down depends on the selected ingredient
function openDropIngr() {
  document.getElementById("drop-ing_open").style.display = "flex";
  document.getElementById("drop-app_open").style.display = "none";
  document.getElementById("drop-ust_open").style.display = "none";
}

// open drop down depends on the selected appliance
function openDropApp() {
  document.getElementById("drop-app_open").style.display = "flex";
  document.getElementById("drop-ing_open").style.display = "none";
  document.getElementById("drop-ust_open").style.display = "none";
}

// open drop down depends on the selected ustensils
function openDropUst() {
  document.getElementById("drop-ust_open").style.display = "flex";
  document.getElementById("drop-ing_open").style.display = "none";
  document.getElementById("drop-app_open").style.display = "none";
}
