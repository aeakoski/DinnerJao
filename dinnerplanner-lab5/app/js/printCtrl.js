dinnerPlannerApp.controller('PrintCtrl', function ($scope,Dinner) {

	console.log("hello, halva inne (Controllern alltså)!!");

	//Exempel function hämtad från en annan controller för inspiration
	$scope.getNumberOfGuests = function() {
		return Dinner.getNumberOfGuests();
	}

	$scope.getIngCost = function(){
		Dinner.getDishCost();
	}

});