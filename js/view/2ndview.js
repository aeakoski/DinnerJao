var SndView = function (container,model) {

	$("body").css("backgroung-image","none");

	
	this.numberOfGuests = container.find("#numberOfGuests");
	this.dishList = container.find("#dishList");
	this.totalCost = container.find("#totalCost");
	this.mealType = container.find("#mealType");
	this.prepDish = container.find("#prepDish");
	this.ingredientsTable = container.find("#ingredients");
	
	this.totalCost.html(model.getTotalMenuPrice());

	this.numberOfGuests.html(model.getNumberOfGuests());

	var selectedDish = model.getSelectedDish("starter");
	this.prepDish.append('\
		<h2>' + selectedDish['name'] + '</h2>\
		<img src="images/'+ selectedDish['image'] +'">\
		<p>' + selectedDish['description'] + '</p>');


	var ingredients = model.getAllIngredients();
	console.log(ingredients);

	for (var i = 0; i < ingredients.length; i++) {
		this.ingredientsTable.append('\
			<tr>\
				<td class="col-xs-2">3 dl</td>\
				<td class="col-xs-6">'+ingredients[i]+'</td>\
				<td>SEK</td>\
				<td>20.00</td>\
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