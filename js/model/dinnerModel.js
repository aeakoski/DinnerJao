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
 			console.log("Stop polis");
 		}
 		currentDish = data;
 		console.log(data, "i setCurrentDish funktionen")	
 	}

 	this.getCurrentDish = function(){
 		console.log("Nu returnerade jag " + currentDish);
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
	
		for(ii = 0; ii< data['singleDish']['Ingredients'].length; ii++){

			dishCost += data['singleDish']['Ingredients'][ii]['Quantity']
		}
		notifyObservers({"None":null});
		console.log(dishCost);
	}

	this.getDishCost = function(){
		console.log(dishCost);
		return dishCost;
		// var dishCost = 0;
		// for (i = 0; i< dishes['singleDish']['Ingredients'].length; i++){
		// 	if (dishes[i]['id'] == id) {
		// 		for (j = 0; j < dishes[i]['Ingredients'].length; j++){
		// 			dishCost = dishCost + dishes[i]['Ingredients'][j]['price'];
		// 		}
		// 		return dishCost*nrOfGuests
		// 	};
		// }

		// return 0;
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

	// this.sortMenu = function(){
	// 	for (var foodIndex = 0; foodIndex <menu.length; foodIndex++) {

	// 		if((menu[foodIndex]['type'] === "starter") && (foodIndex != 0)){
	// 			var be = menu[foodIndex];
	// 			menu[foodIndex] = menu[0];
	// 			menu[0] = be;
	// 			foodIndex = -1;
	// 		}

	// 		else if((menu[foodIndex]['type'] === "dessert") && (foodIndex != menu.length-1)){
	// 			var bu = menu[foodIndex];
	// 			menu[foodIndex] = menu[menu.length-1];
	// 			menu[menu.length-1] = bu;
	// 			foodIndex = -1;
	// 		}
			
	// 	};
	// }

	//Adds the passed dish to the menu. If the dish of that type already exists on the menu
	//it is removed from the menu and the new one added.

	this.addDishToMenu = function(dish) {
	menu[menu.length] = dish;
		
	}

	//Removes dish from menu
	this.removeDishFromMenu = function(id) {
		console.log(menu);
		for(var indexToBin = 0; indexToBin<menu.length; indexToBin++){
			if(menu[indexToBin]['RecipeID'] === id){
				console.log(indexToBin);
				if (indexToBin > -1){
					menu.splice(indexToBin, 1);
				}
			}
		}
		console.log(menu);
		notifyObservers({"None":null});
		
	}

	//function that returns all dishes of specific type (i.e. "starter", "main dish" or "dessert")
	//you can use the filter argument to filter out the dish by name or ingredient (use for search)
	//if you don't pass any filter all the dishes will be returned

	this.getAllDishes = function () {
		keyword = this.getInput();
		type = this.getMealType();
		console.log(keyword,type);
        var apiKey = "dvx41LT6ES1yNzNUPU28Q6Ay04T4q0L1";
        var url = "http://api.bigoven.com/recipes?pg=1&rpp=10&title_kw="+ keyword +" "+ type + "&api_key=" + apiKey;
        
        $.ajax({
            type: "GET",
            dataType: 'json',
            cache: false,
            url: url,
            success: function (data) {
                // alert('success');
                //console.log("sucess");
                //console.log(data);
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

                console.log("sucess get DIsh");
                console.log(data);

                currentDish = data;
                var dataToSend = {'singleDish':data}; 
				setDishCost(dataToSend);  
                notifyObservers(dataToSend);
                              
            }
        });
    }

}