// Dinner controller that we use whenever we want to display detailed
// information for one dish
dinnerPlannerApp.controller('DishCtrl', function ($scope,$routeParams,Dinner) {
  
  // TODO in Lab 5: you need to get the dish according to the routing parameter
  // $routingParams.paramName
  // Check the app.js to figure out what is the paramName in this case
  //'/dish/:dishId'

  $scope.getNumberOfGuests = function() {
    return Dinner.getNumberOfGuests();
  }

	$scope.status = "Searching...";

	$("#prepDish").empty();
	$("#prepDish").html('\
			<img id="load" src="images/puhfood.gif">');
  

	Dinner.Dish.get({id:$routeParams['dishId']},function(data){
    	$scope.dish = data;
    	$scope.status = "found " + data.Results + " result";

    		Dinner.setCurrentDish(data);

	    	$("#prepDish").empty();
			$("#prepDish").append('\
			<h2 id ="dishHeadder" rel ="'+ data['dishId']+'">' + data['Title'] + '</h2>\
			<img src="'+ data['ImageURL'] +'">\
			<p>' + data['Instructions'] + '</p>');

			$("#ingredients").empty();
			for (var i = 0; i < data['Ingredients'].length; i++) {
				$("#ingredients").append('\
					<tr>\
						<td class="col-xs-2">'+(data['Ingredients'][i]["Quantity"]).toFixed(2) * Dinner.getNumberOfGuests()+' '+ data['Ingredients'][i]['Unit'] +'</td>\
						<td class="col-xs-6">'+data['Ingredients'][i]['Name']+'</td>\
						<td>SEK</td>\
						<td>'+(data['Ingredients'][i]['Quantity'] * Dinner.getNumberOfGuests()).toFixed(2) +'</td>\
					</tr>');
			};
			Dinner.updateDishCost(data);
			$("#dishCost").empty();
			$("#dishCost").append('Dish Cost:'+ (Dinner.getDishCost() * Dinner.getNumberOfGuests()).toFixed(2) +'');

		},function(data){

	    	$scope.status = "There was an error";
	    	
	   });
	});