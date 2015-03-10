// Dinner controller that we use whenever we want to display detailed
// information for one dish
dinnerPlannerApp.controller('DishCtrl', function ($scope,$routeParams,Dinner) {
  
  // TODO in Lab 5: you need to get the dish according to the routing parameter
  // $routingParams.paramName
  // Check the app.js to figure out what is the paramName in this case
  //'/dish/:dishId'
	$scope.numberOfGuests = Dinner.getNumberOfGuests();

	$scope.getIngCost = function(){
		Dinner.updateDishCost(Dinner.getCurrentDish())
		return Dinner.getDishCost();
	}

	$scope.setNumberOfGuest = function(number){
	Dinner.setNumberOfGuests(number);
	}

	$scope.getNumberOfGuests = function() {
	return Dinner.getNumberOfGuests();
	}

  $scope.addDishToMenu = function() {
  		Dinner.addDishToMenu(); 
  }

  	$scope.setCurrentDish = function () {
  		return Dinner.setCurrentDish(null);
  	}

	$scope.status = "Searching...";

	// $("#prepDish").empty();
	// $("#prepDish").html('\
	// 		<img id="load" src="images/puhfood.gif">');
  

	Dinner.Dish.get({id:$routeParams['dishId']},function(data){
    	$scope.dish = data;
    	$scope.status = "found " + data.Results + " result";

    		Dinner.setCurrentDish(data);
			Dinner.updateDishCost(data);

		},function(data){

	    	$scope.status = "There was an error";
	    	
	   });
	});