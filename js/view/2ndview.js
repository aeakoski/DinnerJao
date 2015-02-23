var SndView = function (container,model) {

	//add view as observer of model
	model.addObserver(this);


	this.numberOfGuests = container.find("#numberOfGuests");
	this.dishList = container.find("#dishList");
	this.totalCost = container.find("#totalCost");
	this.mealType = container.find("#mealType");
	this.prepDish = container.find("#prepDish");
	this.ingredientsTable = container.find("#ingredients");
	this.leftMenu = container.find("#leftMenu");
    this.dPending = container.find("#dPending");


	this.totalCost.html(model.getTotalMenuPrice());
	//this.numberOfGuests.html(model.getNumberOfGuests());

	this.update = function(obj){
		
		$("#numberOfGuests").html(model.getNumberOfGuests());

		updateFoodItems();
		

	}


	var menuList = model.getFullMenu();

	if (menuList.length > 0) {
		for (var i = 0; i < menuList.length; i++) {
			this.dPending.append('\
			<div class = "col-xs-2"></div>\
			<div class="foodChoice">\
			<p class="dName col-xs-6"><span>'+menuList[i]['name']+'</span></p>\
			<p class="dName"><span>'+model.getDishCost(menuList[i]['id'])+'</span></p>\
			</div>');
	 	}
	}

	else {
		this.dPending.append('\
			<p class="dName col-xs-6"><span>Pending</span></p>\
			<p class="dName"><span>0.00</span></p>');
	};


	var selectedDish = model.getSelectedDish("starter");
	this.prepDish.append('\
		<h2>' + selectedDish['name'] + '</h2>\
		<img src="images/'+ selectedDish['image'] +'">\
		<p>' + selectedDish['description'] + '</p>');

	var ingredients = model.getAllIngredients();
	for (i = 0; i < ingredients.length; i++) {
		this.ingredientsTable.append('\
			<tr>\
				<td class="col-xs-2">'+ingredients[i]['quantity']+' '+ ingredients[i]['unit'] +'</td>\
				<td class="col-xs-6">'+ingredients[i]['name']+'</td>\
				<td>SEK</td>\
				<td>'+ingredients[i]["price"]+'</td>\
			</tr>');
	};
	
	var updateFoodItems = function(){
		$("#dishList").empty();

		var typeOfDish = model.getAllDishes(model.getMealType());
		for (i = 0; i<typeOfDish.length; i++) {
			$("#dishList").append('\
				<div rel = "'+ typeOfDish[i]['id'] +'" class="foodItem">\
					<div class="foodHead">\
						<div class = "foodPic">\
							<img src="images/'+ typeOfDish[i]['image'] +'">\
						</div>\
						<div class = "foodTitle">\
							<h4>'+ typeOfDish[i]['name'] +'</h4>\
						</div>\
					</div>\
					\
					<div class = "foodDesc">\
						<p>'+ typeOfDish[i]['description'] +'</p>\
					</div>\
				</div><!--FoodItem-->');
		}
	}
	
















}