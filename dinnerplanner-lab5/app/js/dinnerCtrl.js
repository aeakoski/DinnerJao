// Dinner controller that we use whenever we have view that needs to 
// display or modify the dinner menu
dinnerPlannerApp.controller('DinnerCtrl', function ($scope,$cookieStore,$routeParams,Dinner) {

	$scope.setNumberOfGuest = function(number){
	Dinner.setNumberOfGuests(number);
	}

	$scope.getNumberOfGuests = function() {
	return Dinner.getNumberOfGuests();
	}

	$scope.getIngCost = function () {
		if (Dinner.getCurrentDish() != null) {
			Dinner.updateDishCost(Dinner.getCurrentDish())
			return (Dinner.getDishCost() * Dinner.getNumberOfGuests()).toFixed(2);
		}else{
			return 0.00;
		};
  	}

  	$scope.confirmDinner = function () {
  		if(Dinner.getFullMenu().length != 0){
  			$scope.link = '#/overview';
  		}
  	}

  	$scope.getMenu = function () {
  		return Dinner.getFullMenu();
  	}

  	$scope.dishCost = function (dish) {
		Dinner.updateDishCost(dish);
		return Dinner.getDishCost() * Dinner.getNumberOfGuests();
	}
  // TODO in Lab 5: Implement the methods to get the dinner menu
  // add dish to menu and get total menu price

	$scope.remove = function (dish) {
		Dinner.removeDishFromMenu(dish.RecipeID);
	}

	$scope.updateMenu = function(){

		for( var a = 0 ; a < Dinner.getFullMenu().length ; a++){
			Dinner.updateDishCost(Dinner.getFullMenu()[a]);
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