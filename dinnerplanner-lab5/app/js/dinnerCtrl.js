// Dinner controller that we use whenever we have view that needs to 
// display or modify the dinner menu
dinnerPlannerApp.controller('DinnerCtrl', function ($scope,Dinner) {

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

	$scope.getIngCost = function () {
  	return (Dinner.getDishCost() * Dinner.getNumberOfGuests()).toFixed(2);
  	}

  	$scope.confirmDinner = function () {
  		if(Dinner.getFullMenu().length != 0){
  			$scope.link = '#/overview';
  		}
  	}
  // TODO in Lab 5: Implement the methods to get the dinner menu
  // add dish to menu and get total menu price

	$scope.updateMenu = function(){

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