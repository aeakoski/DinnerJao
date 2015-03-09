// Search controller that we use whenever we have a search inputs
// and search results
dinnerPlannerApp.controller('SearchCtrl', function ($scope,Dinner) {

	$scope.search = function(query) {
		
	   	$scope.status = "Searching...";
	   	Dinner.DishSearch.get({title_kw:query},function(data){
	    	$scope.dishes = data.Results;
	    	$scope.status = "Showing " + data.Results.length + " results";

	    	$("#dishList").html('');
			for (i = 0; i<data.Results.length; i++) {
			$("#dishList").append('\
				<div rel = "'+ data.Results[i]['RecipeID'] +'" class="foodItem">\
					<div class="foodHead">\
						<div class = "foodPic">\
							<img src="'+ data.Results[i]['ImageURL'] +'">\
						</div>\
						<div class = "foodTitle">\
							<h4>'+ data.Results[i]['Title'] +'</h4>\
						</div>\
					</div>\
					\
					<div class = "foodDesc">\
						<p>'+ data.Results[i]['Subcategory'] +'</p>\
					</div>\
				</div><!--FoodItem-->');
		}

	   },function(data){
	    	$scope.status = "There was an error";
	   });
	}
	
  // TODO in Lab 5: you will need to implement a method that searchers for dishes
  // including the case while the search is still running.

});