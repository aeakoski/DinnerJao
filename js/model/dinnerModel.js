//DinnerModel Object constructor
var DinnerModel = function() {

//--------------------------------------------------//
//-------------------Variabler----------------------//
//--------------------------------------------------//

	var currentDish = null;

	var nrOfGuests = 1;

	var type = "starter";

 	var menu = new Array();

 	var observers = new Array();

 	var displayList = [];


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
 		displayList = [];
		if (input !=""){
			for(j = 0 ; j<dishes.length ; j++){
				if (dishes[j]['name'].toLowerCase().indexOf(input.toLowerCase()) != -1) {
					if(this.getMealType() === dishes[j]['type'] ){
						displayList.push(dishes[j]);
					}
				};
			}	
		}
		//Notify observers! Nåt har änderats JAO!!!
 	}

 	this.getInputList = function(){
 		return displayList;
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

	//Returns all the dishes on the menu as strings in a list.
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

	this.getAllDishes = function (keyword, type) {
		if(typeof(keyword) === 'undefined'){
			keyword = "cream";
			type = "dessert";
		}
        var apiKey = "dvx41LT6ES1yNzNUPU28Q6Ay04T4q0L1";
        var url = "http://api.bigoven.com/recipes?pg=1&rpp=10&title_kw="+ keyword +" "+ type + "&api_key=" + apiKey;
        $.ajax({
            type: "GET",
            dataType: 'json',
            cache: false,
            url: url,
            success: function (data) {
                alert('success');
                notifyObservers(data.Results);
                //console.log(data.Results[0].Title);
            }
        });
    }

	//function that returns a dish of specific ID
	this.getDish = function (id) {
	  for(key in dishes){
			if(dishes[key].id == id) {
				return dishes[key];
			}
		}
	}


	// the dishes variable contains an array of all the 
	// dishes in the database. each dish has id, name, type,
	// image (name of the image file), description and
	// array of ingredients. Each ingredient has name, 
	// quantity (a number), price (a number) and unit (string 
	// defining the unit i.e. "g", "slices", "ml". Unit
	// can sometimes be empty like in the example of eggs where
	// you just say "5 eggs" and not "5 pieces of eggs" or anything else.
	var dishes = [{
		'id':1,
		'name':'French toast',
		'type':'starter',
		'image':'toast.jpg',
		'description':"In a large mixing bowl, beat the eggs. Add the milk, brown sugar and nutmeg; stir well to combine. Soak bread slices in the egg mixture until saturated. Heat a lightly oiled griddle or frying pan over medium high heat. Brown slices on both sides, sprinkle with cinnamon and serve hot.",
		'ingredients':[{ 
			'name':'eggs',
			'quantity':0.5,
			'unit':'',
			'price':10
			},{
			'name':'milk',
			'quantity':30,
			'unit':'ml',
			'price':6
			},{
			'name':'brown sugar',
			'quantity':7,
			'unit':'g',
			'price':1
			},{
			'name':'ground nutmeg',
			'quantity':0.5,
			'unit':'g',
			'price':12
			},{
			'name':'white bread',
			'quantity':2,
			'unit':'slices',
			'price':2
			}]
		},{
		'id':2,
		'name':'Sourdough Starter',
		'type':'starter',
		'image':'sourdough.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{ 
			'name':'active dry yeast',
			'quantity':0.5,
			'unit':'g',
			'price':4
			},{
			'name':'warm water',
			'quantity':30,
			'unit':'ml',
			'price':0
			},{
			'name':'all-purpose flour',
			'quantity':15,
			'unit':'g',
			'price':2
			}]
		},{
		'id':3,
		'name':'Baked Brie with Peaches',
		'type':'starter',
		'image':'bakedbrie.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{ 
			'name':'round Brie cheese',
			'quantity':10,
			'unit':'g',
			'price':8
			},{
			'name':'raspberry preserves',
			'quantity':15,
			'unit':'g',
			'price':10
			},{
			'name':'peaches',
			'quantity':1,
			'unit':'',
			'price':4
			}]
		},{
		'id':100,
		'name':'Meat balls',
		'type':'main dish',
		'image':'meatballs.jpg',
		'description':"Preheat an oven to 400 degrees F (200 degrees C). Place the beef into a mixing bowl, and season with salt, onion, garlic salt, Italian seasoning, oregano, red pepper flakes, hot pepper sauce, and Worcestershire sauce; mix well. Add the milk, Parmesan cheese, and bread crumbs. Mix until evenly blended, then form into 1 1/2-inch meatballs, and place onto a baking sheet. Bake in the preheated oven until no longer pink in the center, 20 to 25 minutes.",
		'ingredients':[{ 
			'name':'extra lean ground beef',
			'quantity':115,
			'unit':'g',
			'price':20
			},{
			'name':'sea salt',
			'quantity':0.7,
			'unit':'g',
			'price':3
			},{
			'name':'small onion, diced',
			'quantity':0.25,
			'unit':'',
			'price':2
			},{
			'name':'garlic salt',
			'quantity':0.7,
			'unit':'g',
			'price':2
			},{
			'name':'Italian seasoning',
			'quantity':0.6,
			'unit':'g',
			'price':3
			},{
			'name':'dried oregano',
			'quantity':0.3,
			'unit':'g',
			'price':3
			},{
			'name':'crushed red pepper flakes',
			'quantity':0.6,
			'unit':'g',
			'price':3
			},{
			'name':'Worcestershire sauce',
			'quantity':6,
			'unit':'ml',
			'price':7
			},{
			'name':'milk',
			'quantity':20,
			'unit':'ml',
			'price':4
			},{
			'name':'grated Parmesan cheese',
			'quantity':5,
			'unit':'g',
			'price':8
			},{
			'name':'seasoned bread crumbs',
			'quantity':15,
			'unit':'g',
			'price':4
			}]
		},{
		'id':101,
		'name':'MD 2',
		'type':'main dish',
		'image':'bakedbrie.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{ 
			'name':'ingredient 1',
			'quantity':1,
			'unit':'pieces',
			'price':8
			},{
			'name':'ingredient 2',
			'quantity':15,
			'unit':'g',
			'price':7
			},{
			'name':'ingredient 3',
			'quantity':10,
			'unit':'ml',
			'price':4
			}]
		},{
		'id':102,
		'name':'MD 3',
		'type':'main dish',
		'image':'meatballs.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{ 
			'name':'ingredient 1',
			'quantity':2,
			'unit':'pieces',
			'price':8
			},{
			'name':'ingredient 2',
			'quantity':10,
			'unit':'g',
			'price':7
			},{
			'name':'ingredient 3',
			'quantity':5,
			'unit':'ml',
			'price':4
			}]
		},{
		'id':102,
		'name':'MD 4',
		'type':'main dish',
		'image':'meatballs.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{ 
			'name':'ingredient 1',
			'quantity':1,
			'unit':'pieces',
			'price':4
			},{
			'name':'ingredient 2',
			'quantity':12,
			'unit':'g',
			'price':7
			},{
			'name':'ingredient 3',
			'quantity':6,
			'unit':'ml',
			'price':4
			}]
		},{
		'id':200,
		'name':'Chocolat Ice cream',
		'type':'dessert',
		'image':'icecream.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{ 
			'name':'ice cream',
			'quantity':100,
			'unit':'ml',
			'price':6
			}]
		},{
		'id':201,
		'name':'Vanilla Ice cream',
		'type':'dessert',
		'image':'icecream.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{ 
			'name':'ice cream',
			'quantity':100,
			'unit':'ml',
			'price':6
			}]
		},{
		'id':202,
		'name':'Strawberry',
		'type':'dessert',
		'image':'icecream.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{ 
			'name':'ice cream',
			'quantity':100,
			'unit':'ml',
			'price':6
			}]
		}
	];
	//this.addDishToMenu(1);
	// this.addDishToMenu(3);
	
}