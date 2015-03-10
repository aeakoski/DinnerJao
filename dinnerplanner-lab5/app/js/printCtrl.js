dinnerPlannerApp.controller('PrintCtrl', function ($scope,Dinner) {

	$scope.menuForPrint = function(){
		return Dinner.getFullMenu();
	}

	//Exempel function hämtad från en annan controller för inspiration
	$scope.getNumberOfGuests = function() {
		return Dinner.getNumberOfGuests();
	}

	$scope.getIngCost = function(){
		Dinner.getDishCost();
	}

});