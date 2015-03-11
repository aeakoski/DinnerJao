// Search controller that we use whenever we have a search inputs
// and search results
dinnerPlannerApp.controller('SearchCtrl', function ($scope,$cookieStore,$routeParams,Dinner) {


	$scope.search = function(query) {

	   	$scope.status = "Searching...";
	
	   	Dinner.DishSearch.get({title_kw:query},function(data){
	    	$scope.dishes = data.Results;
	    	$scope.status = "Showing " + data.Results.length + " results";
	    	

	   },function(data){

	    	$scope.status = "There was an error";

	    	$("#dishList").html('\
			<div class="jumbotron">\
				 <h2>Something wierd happened!</h2>\
				 <p></br>The food-server yeald an error. Please check your internet connection and try again.</p>\
			</div>');
	    	
	   });
	}
});