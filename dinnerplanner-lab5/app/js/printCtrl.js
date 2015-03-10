dinnerPlannerApp.controller('PrintCtrl', function ($scope,Dinner) {

	$scope.menuForPrint = function(){
		return Dinner.getFullMenu();
	}

	//Exempel function hämtad från en annan controller för inspiration
	$scope.getIngCost = function(){
		Dinner.getDishCost();
	}

});