//DinnerModel Object constructor
var DinnerModel = function() {

//--------------------------------------------------//
//-------------------Variabler----------------------//
//--------------------------------------------------//

	var currentDish = null;

	var nrOfGuests = 1;

	var mealType = "starter";

 	var menu = new Array();

 	var observers = new Array();

 	var displayList = [];

 	var dishes = [];

 	var userInp="";

 	var dishCost = 0;

//--------------------------------------------------//
//--------------------- INIT -----------------------//
//--------------------------------------------------//

	this.addObserver = function(observer){
	 		//that will add new observer to the array
	 		observers[observers.length] = observer;
	 	}

//--------------------------------------------------//
//-------------------- Metoder ---------------------//
//--------------------------------------------------//

 	var notifyObservers = function(obj) {
 		//that will call the update method on all the observers in the array
 		for(var k = 0; k < observers.length; k++) {
			observers[k].update(obj);
		}	
 	}

 	this.setInput = function(input){
 		userInp = input;
 	}

 	this.getInput = function(){
 		return userInp;
 	}

 	this.setCurrentDish = function(data){
 		if (data==null){
 		}
 		currentDish = data;
 	}

 	this.getCurrentDish = function(){
 		return currentDish;
 	}

	this.setNumberOfGuests = function(num) {
		nrOfGuests = num;
		var dataToSend = {'number':num}; 
        notifyObservers(dataToSend);
	}

	this.getNumberOfGuests = function() {
		return nrOfGuests;
	}

	this.setMealType = function (type) {
		mealType = type;
		//notifyObservers(observers);
	}

	this.getMealType = function() {
		return mealType;
	}

	//Returns the dish that is on the menu for selected type 
	//Returns the WHOLE dish object
	this.getSelectedDish = function(type) {
		for (i = 0; i < menu.length; i++){
			if (menu[i]["type"] == type){
				return menu[i]; //Returns the whole dish object.
			}
		}
	}

	var setDishCost = function (data) {
		dishCost = 0;
		for(ii = 0; ii< data['singleDish']['Ingredients'].length; ii++){
			dishCost += data['singleDish']['Ingredients'][ii]['Quantity']
		}
		notifyObservers({"None":null});
	}


	this.getDishCost = function(){
		return dishCost;
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
				totPrice = totPrice + menu[i]["Ingredients"][j]["price"];
			}
		}
		return totPrice * nrOfGuests;
	}

	//Returns all the dishes on the menu.
	this.getFullMenu = function() {
		return menu
	}

	
	//Adds the passed dish to the menu. If the dish of that type already exists on the menu
	//it is removed from the menu and the new one added.

	this.addDishToMenu = function(dish) {
		if (menu.length <= 2) {
			menu[menu.length] = dish;}
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
		notifyObservers({"None":null});
		
	}

	//function that returns all dishes of specific type (i.e. "starter", "main dish" or "dessert")
	//you can use the filter argument to filter out the dish by name or ingredient (use for search)
	//if you don't pass any filter all the dishes will be returned

	this.getAllDishes = function () {
		keyword = this.getInput();
		type = this.getMealType();
        var apiKey = "dvx41LT6ES1yNzNUPU28Q6Ay04T4q0L1";
        var url = "http://api.bigoven.com/recipes?pg=1&rpp=10&title_kw="+ keyword +" "+ type + "&api_key=" + apiKey;
        
        $.ajax({
            type: "GET",
            dataType: 'json',
            cache: false,
            url: url,
            success: function (data) {
                var dataToSend = {'dishList':data.Results}; 
                notifyObservers(dataToSend); 
            }
        });
    }

	//function that returns a dish of specific ID
	this.getDish = function (RecipeID) {
        var apiKey = "dvx41LT6ES1yNzNUPU28Q6Ay04T4q0L1";
        var url = "http://api.bigoven.com/recipe/" + RecipeID + "?api_key=" + apiKey;
        $.ajax({
            type: "GET",
            dataType: 'json',
            cache: false,
            url: url,
			success: function (data) {
                currentDish = data;
                var dataToSend = {'singleDish':data}; 
				setDishCost(dataToSend);  
                notifyObservers(dataToSend);
                              
            }
        });
    }

}