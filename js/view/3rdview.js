var ThreeView = function (container,model) {
	
	model.addObserver(this);

	this.numberOfGuests = container.find("#numberOfGuests2");
	this.dishList = container.find("#dishList");
	this.totalCost = container.find("#totalCost");
	this.mealType = container.find("#mealType");
	this.prepDish = container.find("#prepDish");
	this.ingredientsTable = container.find("#ingredients");
	this.dPending = container.find("#dPending");


	this.totalCost.html(model.getTotalMenuPrice());
	this.numberOfGuests.html(model.getNumberOfGuests());

	this.update = function(obj){
		
		$("#numberOfGuests2").html(model.getNumberOfGuests());

		var selDish = model.getDish(obj);

		updateSelectedDish(selDish);
		updateIngredients(selDish);
		updatePending(selDish);

	}
	
	
	

	var updatePending = function(selDish){

		if(typeof(selDish)==='undefined'){
			$("#dPending").empty();
			$("#dPending").append('\
			<p class="dName col-xs-6"><span>Pending: </span></p>\
			<p class="dName"><span>0.0</span></p>');
			}	
		
		else{
			$("#dPending").empty();
			$("#dPending").append('\
			<p class="dName col-xs-6"><span>Pending: </span></p>\
			<p class="dName"><span>' + model.getDishCost(selDish['id']) +'</span></p>');	
		}
	}
	
	var updateSelectedDish = function (selectedDish) {
		if (typeof(selectedDish)==='undefined') {
			selectedDish = 1;
		}

		$("#prepDish").empty();

		$("#prepDish").append('\
		<h2 id ="dishHeadder" rel ="'+selectedDish['id']+'">' + selectedDish['name'] + '</h2>\
		<img src="images/'+ selectedDish['image'] +'">\
		<p>' + selectedDish['description'] + '</p>');
	}
	

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
		$("#dishCost").empty();
		$("#dishCost").append('Dish Cost: '+ model.getDishCost(dish['id'])+'');
		
	}





}