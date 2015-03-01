var ThreeView = function (container,model) {
	model.addObserver(this);

	this.numberOfGuests = container.find("#numberOfGuests2");
	this.totalCost = container.find("#totalCost");
	this.prepDish = container.find("#prepDish");
	this.dPending = container.find("#dPending");

	this.totalCost.html(model.getTotalMenuPrice());
	this.numberOfGuests.html(model.getNumberOfGuests());

	this.displayLoad = function(){
		$("#prepDish").empty();
		$("#prepDish").html('\
			<img id="load" src="images/puhfood.gif">');

		$("#ingredients").empty();
		$("#ingredients").html('\
			<img id="load2" src="images/puhfood3.gif">');
	}

	var recipieError = function(){
		$("#load").remove();
		$("#leftDivRecepie").css("visibility","visible");
		$("#rightDivRecepie").css("visibility", "hidden")
		$(".jumbotron").remove();
		$("#rightDivPrep").prepend('\
		<div class="jumbotron" style="margin:10pt;">\
			 <h2>Something wierd happened!</h2>\
			 <p></br>The food-server yeald an error. Please check your internet connection and/or go back to the previous page and try again.</p>\
		</div>\
		');
		$('#backButton').css("visibility", "visible");
	}

	this.update = function(obj){
		$("#numberOfGuests2").html(model.getNumberOfGuests());

		if (typeof(obj['singleDish']) != 'undefined') {
			updateIngredients(obj['singleDish']);
			updateSelectedDish(obj['singleDish']);
			updatePending(obj['singleDish']);

		}else if (typeof(obj['number'])!='undefined'){
			if(model.getCurrentDish() != null){
				updateIngredients(model.getCurrentDish());
				updateSelectedDish(model.getCurrentDish());
			}
		}else if (typeof(obj['SingleError'])!='undefined'){
			recipieError();
		}
		updatePending(model.getCurrentDish());
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
			model.updateDishCost(model.getFullMenu()[a]);
			$("#dAdded").append('\
			<div id="dAddedR"><p class="dName col-xs-6"><span>'+ model.getFullMenu()[a]['Title'] +'</span></p>\
			<p class="dName col-xs-1"><span>'+ (model.getDishCost()* model.getNumberOfGuests()).toFixed(2) +'</span></p>\
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
			model.updateDishCost(selDish);
			$("#dPending").empty();
			$("#dPending").append('\
			<div id="dAddedR"> <p class="dName col-xs-6"><span>Pending: </span></p>\
			<p class="dName"><span>' + (model.getDishCost() * model.getNumberOfGuests()).toFixed(2) +'</span></p></div>');
		}
	}
	
	var updateSelectedDish = function (selectedDish) {
		$('#backButton').css("visibility", "visible");
		$("#prepDish").empty();
		$("#prepDish").append('\
		<h2 id ="dishHeadder" rel ="'+ selectedDish['RecipeID']+'">' + selectedDish['Title'] + '</h2>\
		<img src="'+ selectedDish['ImageURL'] +'">\
		<p>' + selectedDish['Instructions'] + '</p>');
	}
	

	var updateIngredients = function (dish) {
		$('#confirmDish').css("visibility", "visible");
		$("#ingredients").empty();
		for (var i = 0; i < dish['Ingredients'].length; i++) {
			$("#ingredients").append('\
				<tr>\
					<td class="col-xs-2">'+(dish['Ingredients'][i]["Quantity"]).toFixed(2) * model.getNumberOfGuests()+' '+ dish['Ingredients'][i]['Unit'] +'</td>\
					<td class="col-xs-6">'+dish['Ingredients'][i]['Name']+'</td>\
					<td>SEK</td>\
					<td>'+(dish['Ingredients'][i]['Quantity'] * model.getNumberOfGuests()).toFixed(2) +'</td>\
				</tr>');
		}
		$('#dishCost').css("visibility", "visible");
		model.updateDishCost(dish);
		$("#dishCost").empty();
		$("#dishCost").append('Dish Cost: '+ (model.getDishCost() * model.getNumberOfGuests()).toFixed(2) +'');
	}
}

