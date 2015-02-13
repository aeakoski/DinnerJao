var SndView = function (container,model) {

	$("body").css("backgroung-image","none");

	
	this.numberOfGuests = container.find("#numberOfGuests");
	this.dishList = container.find("#dishList");
	this.totalCost = container.find("#totalCost");
	this.mealType = container.find("#mealType");
	this.prepDish = container.find("#prepDish");
	this.ingredientsTable = container.find("#ingredients");
	//this.dishCost = container.find("#dishCost");

	//this.dPending = container.find("#dPending");


	
	this.totalCost.html(model.getTotalMenuPrice());

	this.numberOfGuests.html(model.getNumberOfGuests());

	//var totalCostForDish = model.getDishCost(model.getDish(1)); //Här ska dden valda rätten fyllas i!

	//this.dishCost.append(totalCostForDish);

	var menuList = model.getFullMenu();

	//for (var i = 0; i < menuList.length; i++) {
	//	this.dPending.append(menuList[i]);
	//};


	var selectedDish = model.getSelectedDish("starter");
	this.prepDish.append('\
		<h2>' + selectedDish['name'] + '</h2>\
		<img src="images/'+ selectedDish['image'] +'">\
		<p>' + selectedDish['description'] + '</p>');




	var ingredients = model.getAllIngredients();

	for (var i = 0; i < ingredients.length; i++) {
		this.ingredientsTable.append('\
			<tr>\
				<td class="col-xs-2">'+ingredients[i]['quantity']+' '+ ingredients[i]['unit'] +'</td>\
				<td class="col-xs-6">'+ingredients[i]['name']+'</td>\
				<td>SEK</td>\
				<td>'+ingredients[i]["price"]+'</td>\
			</tr>');
		
	};



	var typeOfDish = model.getAllDishes(this.mealType.val());

	for (i = 0; i<typeOfDish.length; i++) {
		console.log("i for-loopen");
		this.dishList.append('\
			<div class="foodItem">\
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

	console.log("i SndView.js filen");


}