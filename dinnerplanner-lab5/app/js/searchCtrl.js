// Search controller that we use whenever we have a search inputs
// and search results
dinnerPlannerApp.controller('SearchCtrl', function ($scope,$cookieStore,$routeParams,Dinner) {


	$scope.search = function(query) {

	   	$scope.status = "Searching...";

		$scope.showLoad = function () {
			console.log($scope.status);
			$("#load").removeClass("ng-hide");
			$(".jumbotron").addClass("ng-hide");
			
		}

		$scope.hide = function () {
			console.log($scope.status, "i hide");
			if (status != "Searching...") {
				$("#load").addClass("ng-hide");
			}
		}

		$scope.showError = function () {
			console.log($scope.status);
			$("#load").addClass("ng-hide");
			$(".foodItem").addClass("ng-hide");
			$(".jumbotron").removeClass("ng-hide");
		}

	
	   	Dinner.DishSearch.get({title_kw:query},function(data){
	    	$scope.dishes = data.Results;
	    	$scope.status = "Showing " + data.Results.length + " results";
	    	$scope.hide();

	   },function(data){

	    	$scope.status = "There was an error";
	    	$scope.showError();
	    	
	   });
	}
});