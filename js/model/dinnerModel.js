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



//--------------------------------------------------//
//---------------------Metoder----------------------//
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

 	this.setCurrentDish = function(id){
 		if(id == null){
 			currentDish = null;
 		}else{
 			currentDish = this.getDish(id);
 		}	
 	}

 	this.getCurrentDish = function(){
 		return currentDish;
 	}

 	this.addObserver = function(observer){
 		//that will add new observer to the array
 		observers[observers.length] = observer;
 	}

	this.setNumberOfGuests = function(num) {
		nrOfGuests = num;
		notifyObservers(observers);
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

	this.getDishCost = function(id){
		var dishCost=0;
		for (i = 0; i< dishes.length; i++){
			if (dishes[i]['id'] == id) {
				for (j = 0; j < dishes[i]['ingredients'].length; j++){
					dishCost = dishCost + dishes[i]['ingredients'][j]['price'];
				}
				return dishCost*nrOfGuests
			};
		}

		return 0;
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
			for (j = 0; j < menu[i]["ingredients"].length; j++){
				totPrice = totPrice + menu[i]["ingredients"][j]["price"];
			}
		}
		return totPrice * nrOfGuests;
	}

	//Returns all the dishes on the menu.
	this.getFullMenu = function() {
		return menu
	}

	this.sortMenu = function(){
		for (var foodIndex = 0; foodIndex <menu.length; foodIndex++) {
			if((menu[foodIndex]['type'] === "starter") && (foodIndex != 0)){
				var be = menu[foodIndex];
				menu[foodIndex] = menu[0];
				menu[0] = be;
				foodIndex = -1;
			}

			else if((menu[foodIndex]['type'] === "dessert") && (foodIndex != menu.length-1)){
				var bu = menu[foodIndex];
				menu[foodIndex] = menu[menu.length-1];
				menu[menu.length-1] = bu;
				foodIndex = -1;
			}
			
		};
	}

	//Adds the passed dish to the menu. If the dish of that type already exists on the menu
	//it is removed from the menu and the new one added.
	this.addDishToMenu = function(id) {
		for(var dIndex = 0 ; dIndex < menu.length; dIndex++){
			if (this.getDish(id)['type'] === menu[dIndex]['type']) {
				menu[dIndex] = this.getDish(id)
				this.sortMenu();
				return;
			};
		}

		menu[menu.length] = this.getDish(id);
		this.sortMenu();
	}

	//Removes dish from menu
	this.removeDishFromMenu = function(id) {
		
		var indexToBin = menu.indexOf(this.getDish(id)); // Om detta index inte finns i menyn kan det cracha!
		console.log(indexToBin);
		if (indexToBin > -1){
			menu.splice(indexToBin, 1);
		}

		//var fruits = ["Banana", "Orange", "Apple", "Mango"];
 		//fruits.splice(2, 0, "Lemon", "Kiwi");

		notifyObservers();
		console.log(menu);
	}

	//function that returns all dishes of specific type (i.e. "starter", "main dish" or "dessert")
	//you can use the filter argument to filter out the dish by name or ingredient (use for search)
	//if you don't pass any filter all the dishes will be returned

	// this.getAllDishes = function (type,filter) {
	//   return $(dishes).filter(function(index,dish) {
	// 	var found = true;
	// 	if(filter){
	// 		found = false;
	// 		$.each(dish.ingredients,function(index,ingredient) {
	// 			if(ingredient.name.indexOf(filter)!=-1) {
	// 				found = true;
	// 			}
	// 		});
	// 		if(dish.name.indexOf(filter) != -1)
	// 		{
	// 			found = true;
	// 		}
	// 	}
	//   	return dish.type == type && found;
	//   });	
	// }

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
                console.log("Success in fetching data");
                console.log(data);
                notifyObservers(data.Results);
                //console.log(data.Results[0].Title);
            }
        });
    }

	//function that returns a dish of specific ID
	this.getDish = function (id) {
		for(var key = 0; key<dishes.length; key++){
			if(dishes[key]['RecipeID'] == id) {
				return dishes[key];
			}
		}
	}

}