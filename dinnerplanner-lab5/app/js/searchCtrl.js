// Search controller that we use whenever we have a search inputs
// and search results
dinnerPlannerApp.controller('SearchCtrl', function ($scope,Dinner) {

	$scope.search = function(query) {

		console.log("Söker Jao!");

	   	$scope.status = "Searching...";

	   	$("#dishList").html('');
		$("#dishList").html('\
			<img id="load" src="images/puhfood.gif">');
	
	   	Dinner.DishSearch.get({title_kw:query},function(data){
	    	$scope.dishes = data.Results;
	    	$scope.status = "Showing " + data.Results.length + " results";

	    	if (data.Results.length === 0) {
		    	$("#dishList").html('');
					$("#dishList").html('\
						<div class="jumbotron">\
							 <h2>Did not found what you were looking for in the pantry!</h2>\
							 <p></br>Your search for "<i>'+ Dinner.getInput() +'</i>" did not yeald any matches. Please type in another key word and try again.</p>\
						</div>');
						return;
			}

	    	$("#dishList").html('');
			for (i = 0; i<data.Results.length; i++) {
				var dishID = data.Results[i]['RecipeID'];
				$("#dishList").append('\
					<a href="#/dish/'+ dishID + '" ng-click="selectedDish()"><div rel = "'+ data.Results[i]['RecipeID'] +'" class="foodItem ">\
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
					</div></a><!--FoodItem-->');
			}

	   },function(data){

	    	$scope.status = "There was an error";

	    	$("#dishList").html('\
			<div class="jumbotron">\
				 <h2>Something wierd happened!</h2>\
				 <p></br>The food-server yeald an error. Please check your internet connection and try again.</p>\
			</div>');
	    	
	   });
	}
	
  // TODO in Lab 5: you will need to implement a method that searchers for dishes
  // including the case while the search is still running.

});