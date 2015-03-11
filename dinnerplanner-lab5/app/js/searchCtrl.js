// Search controller that we use whenever we have a search inputs
// and search results
dinnerPlannerApp.controller('SearchCtrl', function ($scope,$cookieStore,$routeParams,Dinner) {
	
	$scope.setCurrentDish = function(di){

		Dinner.Dish.get({id:di.RecipeID},function(data){
    	$scope.dish = data;
    	$scope.status = "found " + data.Results + " result";
    	$scope.hide();
    		Dinner.setCurrentDish(data);

		},function(data){

	    $scope.status = "There was an error";
	    $scope.showError();
	   });
	}

	$scope.search = function(query) {

	   	$scope.status = "Searching...";

		$scope.showLoad = function () {
			$(".foodItem").addClass("ng-hide");
			$(".jumbotron").addClass("ng-hide");
			$("#load").removeClass("ng-hide");
		}

		$scope.hide = function () {

			if (status != "Searching...") {
				$(".jumbotron").addClass("ng-hide");
				$("#load").addClass("ng-hide");
			}
		}

		$scope.showError = function () {

			$("#load").addClass("ng-hide");
			$(".foodItem").addClass("ng-hide");
			$(".jumbotron").removeClass("ng-hide");
		}

		$scope.notFound = function () {
			$("#load").addClass("ng-hide");
			$("#notFOund").removeClass("ng-hide");
		}
	
	   	Dinner.DishSearch.get({title_kw:query},function(data){
	    	$scope.dishes = data.Results;
	    	$scope.status = "Showing " + data.Results.length + " results";
	    	
	    	if (data.Results.length === 0) {
	    		$scope.notFound();
	    	}

	    	else{$scope.hide();}


	   },function(data){

	    	$scope.status = "There was an error";
	    	$scope.showError();
	    	
	   });
	}
});