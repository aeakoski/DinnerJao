// Here we create an Angular service that we will use for our 
// model. In your controllers (or other services) you can include the
// dependency on any service you need. Angular will insure that the
// service is created first time it is needed and then just reuse it
// the next time.

dinnerPlannerApp.factory('Dinner',function ($resource,$routeParams,$cookieStore) {
  

  //--------------------------------------------------//
  //--------------- INIT - Variabler -----------------//
  //--------------------------------------------------//


  //var apiKey = "dvxveCJB1QugC806d29k1cE6x23Nt64O"; //En stackares API Nyckel

  //var apiKey = "dvx41LT6ES1yNzNUPU28Q6Ay04T4q0L1"; //Vår API Nyckel

  //var apiKey = "dvxc3XrgajiC58dHf9lJHbgvZI27GI4O";
  var apiKey = "dvx57U1rV45liM502t9pBah61xr3X39h";
  //var apiKey = "dvxfGMr57Q0E7d2rm6HZDY07Xtu63e9Y";
  //var apiKey = "dvx7fKf6N67hzDI13rDB0k508X7haqCR";
  //var apiKey = "dvxvL4Ep74ixye3pJGTTNv8USu2J28lP";


  var apiKey = "dvx41LT6ES1yNzNUPU28Q6Ay04T4q0L1"; //Vår API Nyckel

  this.DishSearch = $resource('http://api.bigoven.com/recipes',{pg:1,rpp:25,api_key:apiKey});

  this.Dish = $resource('http://api.bigoven.com/recipe/:id',{api_key:apiKey}); 

  var currentDish = null;

  var nrOfGuests = 1;

  var menu = new Array();

  var userInp="";

  var dishCost = 0;



  //--------------------------------------------------//
  //-------------------- Metoder ---------------------//
  //--------------------------------------------------//

  var storeMenuInCookie = function(){
    // Remove cookie
    $cookieStore.remove('menu');

    arr = new Array();

    for(coItem = 0; coItem < menu.length; coItem++){
      arr[arr.length] = menu[coItem]['RecipeID'];
    }

    // Put cookie
    $cookieStore.put('menu',arr);
  }

  var storeGuestsInCookie = function(){
    // Remove cookie
    $cookieStore.remove('guests');

    // Put cookie
    $cookieStore.put('guests',nrOfGuests);
  }

  this.setCurrentDish = function(data){
    currentDish = data;
  }

  this.getCurrentDish = function(){
    return currentDish;
  }

  this.setNumberOfGuests = function(num) {
    nrOfGuests = num;
    var dataToSend = {'number':num};

    storeGuestsInCookie();
  }

  this.getNumberOfGuests = function() {
    return nrOfGuests;
  }

  this.updateDishCost = function(d){
    dishCost = 0;
    for(iiii = 0; iiii < d['Ingredients'].length; iiii++){
      dishCost += d['Ingredients'][iiii]['Quantity']
    }
  }

  this.getDishCost = function(){
    return dishCost.toFixed(2);
  }

  //Returns all ingredients for all the dishes on the menu.
  // Returns an array of all the iingredientss dictionarries
  this.getAllIngredients = function() {
    var allIngredients = [];

    for (i = 0; i< menu.length; i++){
      for (j = 0; j < menu[i]["ingredients"].length; j++){
        allIngredients[allIngredients.length] = menu[i]["ingredients"][j];
      }
    }
    return allIngredients;
  }

  //Returns the total price of the menu (all the ingredients multiplied by number of guests).
  //Returns the price as an integer
  this.getTotalMenuPrice = function() {
    var totPrice = 0;
    for (i = 0; i< menu.length; i++){
      for (j = 0; j < menu[i]["Ingredients"].length; j++){
        totPrice = totPrice + menu[i]["Ingredients"][j]["Quantity"];
      }
    }
    return (totPrice * nrOfGuests).toFixed(2);
  }

  //Returns all the dishes on the menu.
  this.getFullMenu = function() {
    return menu
  }
  
  //Adds the passed dish to the menu. If the dish of that type already exists on the menu
  //it is removed from the menu and the new one added.

  this.addDishToMenu = function() {

    if (menu.length <= 2) {
      menu[menu.length] = currentDish;
    }else{
      menu[menu.length-1] = currentDish;
    }
    this.setCurrentDish(null);
    storeMenuInCookie();
  }

  //Removes dish from menu
  this.removeDishFromMenu = function(id) {
    for(var indexToBin = 0; indexToBin<menu.length; indexToBin++){
      if(menu[indexToBin]['RecipeID'] === id){
        if (indexToBin > -1){
          menu.splice(indexToBin, 1);
        }
      }
    }
    storeMenuInCookie(); 
  }

  //function that returns all dishes of specific type (i.e. "starter", "main dish" or "dessert")
  //you can use the filter argument to filter out the dish by name or ingredient (use for search)
  //if you don't pass any filter all the dishes will be returned

  // TODO in Lab 5: Add your model code from previous labs
  // feel free to remove above example code
  // you will need to modify the model (getDish and getAllDishes) 
  // a bit to take the advantage of Angular resource service
  // check lab 5 instructions for details

  // Angular service needs to return an object that has all the
  // methods created in it. You can consider that this is instead
  // of calling var model = new DinnerModel() we did in the previous labs
  // This is because Angular takes care of creating it when needed.
  
  var menuArr = $cookieStore.get('menu');
  if(menuArr != undefined){
    for( menuArrIndex = 0; menuArrIndex < menuArr.length; menuArrIndex++){
      this.Dish.get({id:menuArr[menuArrIndex]},function(data){
      menu[menu.length] = data;

      },function(data){});
    }
  }

  var guestC = $cookieStore.get('guests');
  if (guestC != undefined) {
    this.setNumberOfGuests(guestC);
  };

  return this;

});