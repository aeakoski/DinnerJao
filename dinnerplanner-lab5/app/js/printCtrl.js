dinnerPlannerApp.controller('PrintCtrl', function ($scope,Dinner) {

	console.log("hello, halva inne (Controllern alltså)!!");

	//Exempel function hämtad från en annan controller för inspiration
	
	$scope.getIngCost = function(){
		Dinner.getDishCost();
	}

});