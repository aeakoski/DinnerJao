// Dinner controller that we use whenever we have view that needs to 
// display or modify the dinner menu
dinnerPlannerApp.controller('DinnerCtrl', function ($scope,$cookieStore,$routeParams,Dinner) {

//	$scope.numberOfGuests = Dinner.getNumberOfGuests();

	// $scope.getIngCost = function(){
	// 	Dinner.getDishCost();
	// }

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
		console.log("loo");
		Dinner.removeDishFromMenu(dish.RecipeID);

	}

	$scope.updateMenu = function(){

		// $("#dAdded").empty();

		for( var a = 0 ; a < Dinner.getFullMenu().length ; a++){
			Dinner.updateDishCost(Dinner.getFullMenu()[a]);

		

		// $(document).on("mouseover",".glyphicon-remove",function(){	
		// //Ändra färg till röd!
		// 	$(this).css("color","red");
		// 	$(this).css("cursor","pointer")
		// });

		// $(document).on("mouseout",".glyphicon-remove",function(){	
		// //Ändra färg till grå!
		// 	$(".glyphicon").css("color","#BBBBBB");
		// });

		// $(document).on("click",".glyphicon-remove",function(){	
		// //Ta bort den valda måltiden från menyn
		// 	model.removeDishFromMenu(parseInt($(this).attr('rel')))
		// });
		// 	$("#dAdded").append('\
		// 	<div id="dAddedR"><p class="dName col-xs-6"><span>'+ Dinner.getFullMenu()[a]['Title'] +'</span></p>\
		// 	<p class="dName col-xs-1"><span>'+ (Dinner.getDishCost()* Dinner.getNumberOfGuests()).toFixed(2) +'</span></p>\
		// 	<span rel ="'+ Dinner.getFullMenu()[a]['RecipeID'] +'" class=" hohoho glyphicon glyphicon-remove floatR" style ="color:#BBBBBB;" aria-hidden="false"></span></div>');
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