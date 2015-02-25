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
		var cDish = model.getCurrentDish();


		if (cDish != null) {
			//console.log("CDish " + cDish['name']);
			updateIngredients(cDish);
			updateSelectedDish(cDish);	
		}
		updatePending(cDish);
		updateMenu();
		this.colorKnapp();
	}

	this.colorKnapp = function(){
		if(model.getFullMenu().length === 0){
			$("#confirmDinner").removeClass('btn-warning');
    		$("#confirmDinner").addClass('btn-default'); //background-color: #CABE9A; Avslagen
		}else{
			$("#confirmDinner").removeClass('btn-default');
    		$("#confirmDinner").addClass('btn-warning'); // Vald #background-color: #F0AD4E; PÅslagen		
		}


	}
	
	
	var updateMenu = function(){
		$("#dAdded").empty();
		for( var a = 0 ; a < model.getFullMenu().length ; a++){
			
			$("#dAdded").append('\
			<div id="dAddedR"><p class="dName col-xs-6"><span>'+ model.getFullMenu()[a]['name'] +'</span></p>\
			<p class="dName col-xs-1"><span>'+ model.getDishCost(model.getFullMenu()[a]['id']) * model.getNumberOfGuests() +'.00</span></p>\
			<span rel ="'+ model.getFullMenu()[a]['id'] +'" class=" hohoho glyphicon glyphicon-remove floatR" style ="color:#BBBBBB;" aria-hidden="false"></span></div>');
		}
		this.totalCost = container.find("#totalCost");
		this.totalCost.html(model.getTotalMenuPrice() * model.getNumberOfGuests());
	}

	var updatePending = function(selDish){

		if(selDish === null){
			$("#dPending").empty();
			$("#dPending").append('\
			<p class="dName col-xs-6"><span>Pending: </span></p>\
			<p class="dName"><span>0.00</span></p>');
			}	
		
		else{
			$("#dPending").empty();
			$("#dPending").append('\
			<div id="dAddedR"> <p class="dName col-xs-6"><span>Pending: </span></p>\
			<p class="dName"><span>' + model.getDishCost(selDish['id']) * model.getNumberOfGuests() +'.00</span></p></div>');	
		}
	}
	
	var updateSelectedDish = function (selectedDish) {
		$("#prepDish").empty();
		$("#prepDish").append('\
		<h2 id ="dishHeadder" rel ="'+ selectedDish['id']+'">' + selectedDish['name'] + '</h2>\
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
					<td class="col-xs-2">'+dish['ingredients'][i]['quantity'] * model.getNumberOfGuests()+' '+ dish['ingredients'][i]['unit'] +'</td>\
					<td class="col-xs-6">'+dish['ingredients'][i]['name']+'</td>\
					<td>SEK</td>\
					<td>'+dish['ingredients'][i]["price"] * model.getNumberOfGuests()+'</td>\
				</tr>');
		}
		$("#dishCost").empty();
		$("#dishCost").append('Dish Cost: '+ model.getDishCost(dish['id']) * model.getNumberOfGuests()+'');
		
	}

}