// Dinner controller that we use whenever we have view that needs to 
// display or modify the dinner menu
dinnerPlannerApp.controller('DinnerCtrl', function ($scope,Dinner) {
	$scope.addDishToMeny = function(){
		console.log("AddDish to menu ska exikveras nu!");
		Dinner.addDishToMeny();
	}
	$scope.numberOfGuests = Dinner.getNumberOfGuests();

	$scope.getIngCost = function(){
		Dinner.getDishCost();
	}

	$scope.setNumberOfGuest = function(number){
	Dinner.setNumberOfGuests(number);
	}

	$scope.getNumberOfGuests = function() {
	return Dinner.getNumberOfGuests();
	}

  // TODO in Lab 5: Implement the methods to get the dinner menu
  // add dish to menu and get total menu price


	$scope.updatePending = function(){
		
		$("#dPending").empty();
		$("#dPending").append('\
		<p class="dName col-xs-6"><span>Pending: </span></p>\
		<p class="col-xs-1 dName"><span>0.00</span></p>');
	}

	$scope.updateMenu = function(){
		console.log("Updaterar menyn")
		console.log(Dinner.getFullMenu().length);
		$("#dAdded").empty();
		for( var a = 0 ; a < Dinner.getFullMenu().length ; a++){
			Dinner.updateDishCost(Dinner.getFullMenu()[a]);
			$("#dAdded").append('\
			<div id="dAddedR"><p class="dName col-xs-6"><span>'+ Dinner.getFullMenu()[a]['Title'] +'</span></p>\
			<p class="dName col-xs-1"><span>'+ (Dinner.getDishCost()* Dinner.getNumberOfGuests()).toFixed(2) +'</span></p>\
			<span rel ="'+ Dinner.getFullMenu()[a]['RecipeID'] +'" class=" hohoho glyphicon glyphicon-remove floatR" style ="color:#BBBBBB;" aria-hidden="false"></span></div>');
		}
		this.totalCost = $("#totalCost");
		this.totalCost.html(Dinner.getTotalMenuPrice());
	}

	$scope.setInput = function (inp) {
		return Dinner.setInput(inp);

	}

	$scope.getInput = function () {
		return Dinner.getInput();
	}

});