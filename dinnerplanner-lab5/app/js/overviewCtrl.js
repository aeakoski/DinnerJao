dinnerPlannerApp.controller('OverviewCtrl', function ($scope,Dinner) {

	$scope.getNumberOfGuests = function() {
		return Dinner.getNumberOfGuests();
	}

	$scope.getMenuDishes = Dinner.getFullMenu();

	$scope.dishCost = function (dish) {
		Dinner.updateDishCost(dish);
		return Dinner.getDishCost() * Dinner.getNumberOfGuests();
	}


});