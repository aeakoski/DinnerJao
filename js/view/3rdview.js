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
		//var cDish = model.getCurrentDish(obj);

		if (typeof(obj['singleDish']) != 'undefined') {
			console.log("Här ska maträtterna nu skrivas ut jao!!");
			updateIngredients(obj['singleDish']);
			updateSelectedDish(obj['singleDish']);
			updatePending(obj['singleDish']);

		}else if (typeof(obj['number'])!='undefined'){
			
			if(model.getCurrentDish() != null){
				console.log("Nu var det dags att uppdatera ingredienser");	
				updateIngredients(model.getCurrentDish());
				updateSelectedDish(model.getCurrentDish());
				updatePending(model.getCurrentDish());
			}
		}

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
			<div id="dAddedR"><p class="dName col-xs-6"><span>'+ model.getFullMenu()[a]['Title'] +'</span></p>\
			<p class="dName col-xs-1"><span>'+ model.getDishCost(model.getFullMenu()[a]['RecipeID']) +'.00</span></p>\
			<span rel ="'+ model.getFullMenu()[a]['RecipeID'] +'" class=" hohoho glyphicon glyphicon-remove floatR" style ="color:#BBBBBB;" aria-hidden="false"></span></div>');
		}
		this.totalCost = container.find("#totalCost");
		this.totalCost.html(model.getTotalMenuPrice());
	}

	var updatePending = function(selDish){

		if(selDish === null){
			$("#dPending").empty();
			$("#dPending").append('\
			<p class="dName col-xs-6"><span>Pending: </span></p>\
			<p class="col-xs-1 dName"><span>0.00</span></p>');
			}	
		
		else{
			$("#dPending").empty();
			$("#dPending").append('\
			<div id="dAddedR"> <p class="dName col-xs-6"><span>Pending: </span></p>\
			<p class="dName"><span>' + model.getDishCost() * model.getNumberOfGuests() +'.00</span></p></div>');	
		}
	}
	
	var updateSelectedDish = function (selectedDish) {
		$("#prepDish").empty();
		$("#prepDish").append('\
		<h2 id ="dishHeadder" rel ="'+ selectedDish['RecipeID']+'">' + selectedDish['Title'] + '</h2>\
		<img src="'+ selectedDish['ImageURL'] +'">\
		<p>' + selectedDish['Instructions'] + '</p>');
	}
	

	var updateIngredients = function (dish) {
		console.log(dish);
		$("#ingredients").empty();
		console.log(model.getNumberOfGuests()+" Såhär många gäster");
		console.log(model.getDishCost());
		for (var i = 0; i < dish['Ingredients'].length; i++) {
			$("#ingredients").append('\
				<tr>\
					<td class="col-xs-2">'+dish['Ingredients'][i]["Quantity"] * model.getNumberOfGuests()+' '+ dish['Ingredients'][i]['Unit'] +'</td>\
					<td class="col-xs-6">'+dish['Ingredients'][i]['Name']+'</td>\
					<td>SEK</td>\
					<td>'+dish['Ingredients'][i]['Quantity'] * model.getNumberOfGuests() +'</td>\
				</tr>');
		}
		$("#dishCost").empty();
		$("#dishCost").append('Dish Cost: '+ model.getDishCost() * model.getNumberOfGuests() +'');
		
	}

}

