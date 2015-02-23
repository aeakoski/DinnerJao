var ThreeView = function (container,model) {
	
	model.addObserver(this);

	this.numberOfGuests = container.find("#numberOfGuests");
	this.dishList = container.find("#dishList");
	this.totalCost = container.find("#totalCost");
	this.mealType = container.find("#mealType");
	this.prepDish = container.find("#prepDish");
	this.ingredientsTable = container.find("#ingredients");
	this.dPending = container.find("#dPending");


	this.totalCost.html(model.getTotalMenuPrice());
	this.numberOfGuests.html(model.getNumberOfGuests());

	this.update = function(obj){
		
		$("#numberOfGuests").html(model.getNumberOfGuests());

		var selDish = model.getDish(obj);

		updateSelectedDish(selDish);
		updateIngredients(selDish);
	}

	
	var menuList = model.getFullMenu();
	for (var i = 0; i < menuList.length; i++) {
		this.dPending.append('\
			<p class="dName"><span>'+menuList[i]+'</span></p>\
			<p class="dCost"><span>0.00</span></p>');
	}



	
	var updateSelectedDish = function (selectedDish) {
		if (typeof(selectedDish)==='undefined') {
			selectedDish = 1;
		}

		$("#prepDish").empty();

		$("#prepDish").append('\
		<h2>' + selectedDish['name'] + '</h2>\
		<img src="images/'+ selectedDish['image'] +'">\
		<p>' + selectedDish['description'] + '</p>');
	}
	


	//var ingredients = model.getAllIngredients();
	var updateIngredients = function (dish) {
		if (typeof(dish)==='undefined') {
			dish = model.getDish(1);
		}
		$("#ingredients").empty();

		for (var i = 0; i < dish['ingredients'].length; i++) {
			$("#ingredients").append('\
				<tr>\
					<td class="col-xs-2">'+dish['ingredients'][i]['quantity']+' '+ dish['ingredients'][i]['unit'] +'</td>\
					<td class="col-xs-6">'+dish['ingredients'][i]['name']+'</td>\
					<td>SEK</td>\
					<td>'+dish['ingredients'][i]["price"]+'</td>\
				</tr>');
		}
	}





}