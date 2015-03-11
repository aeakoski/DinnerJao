// Search controller that we use whenever we have a search inputs
// and search results
dinnerPlannerApp.controller('SearchCtrl', function ($scope,$cookieStore,$routeParams,Dinner) {


	$scope.search = function(query) {

	   	$scope.status = "Searching...";

	  	// 	$("#dishList").html('');
		 // $("#dishList").html('\
		 // 	<img id="load" src="images/puhfood.gif">');
		$scope.showLoad = function () {
			console.log($scope.status);
			$("#load").removeClass("ng-hide");
			$(".jumbotron").addClass("ng-hide");
			// $("#load").addClass("ng-show");
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

	    	//FÖRSVINNER INTE SÅ OM MAN SÖKT FEL EN GÅNG KAN MAN INTE SÖKA IGEN ....
	  //   	if (data.Results.length === 0) {
		 //    	$("#dishList").html('');
			// 		$("#dishList").html('\
			// 			<div class="jumbotron">\
			// 				 <h2>Did not found what you were looking for in the pantry!</h2>\
			// 				 <p></br>Your search for "<i> what you typed </i>" did not yeald any matches. Please type in another key word and try again.</p>\
			// 			</div>');
			// }

	   },function(data){

	    	$scope.status = "There was an error";
	    	$scope.showError();
	  //   	$("#dishList").html('\
			// <div class="jumbotron">\
			// 	 <h2>Something wierd happened!</h2>\
			// 	 <p></br>The food-server yeald an error. Please check your internet connection and try again.</p>\
			// </div>');
	    	
	   });
	}
	
  // TODO in Lab 5: you will need to implement a method that searchers for dishes
  // including the case while the search is still running.
});