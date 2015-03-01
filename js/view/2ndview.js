var SndView = function (container,model) {
	//add view as observer of model
	model.addObserver(this);

	this.numberOfGuests = container.find("#numberOfGuests");
	this.dishList = container.find("#dishList");
	this.totalCost = container.find("#totalCost");
    this.pendingCost = container.find("#pendingCost");

	this.totalCost.html(model.getTotalMenuPrice());
	this.pendingCost.html(model.getDishCost());

	this.displayLoad = function(){
		$("#dishList").html('');
		$("#dishList").html('\
			<img id="load" src="images/puhfood.gif">');
	}

	var displaySearchError = function(){
		$("#dishList").html('\
			<div class="jumbotron">\
				 <h2>Something wierd happened!</h2>\
				 <p></br>The food-server yeald an error. Please check your internet connection and try again.</p>\
			</div>');
	}

	this.update = function(obj){
		$("#numberOfGuests").html(model.getNumberOfGuests());
		if (typeof(obj['dishList']) != 'undefined') {
			updateFoodItems(obj['dishList']);
		}
		else if (typeof(obj['searchError']) != 'undefined') {
			displaySearchError();
		};
	}

	

	var updateFoodItems = function(object){
		if($("#mainSearch").val().length != 0  ){
			//Om det finns saker i söklistan importera den

			if(object.length===0){
				$("#dishList").html('');
				$("#dishList").html('\
					<div class="jumbotron">\
						 <h2>Did not found what you were looking for in the pantry!</h2>\
						 <p></br>Your search for "<i>'+ $("#mainSearch").val() +'</i>" did not yeald any matches. Please type in another key word and try again.</p>\
					</div>');
					return;				
			}
		}

		$("#dishList").html('');
		for (i = 0; i<object.length; i++) {
			$("#dishList").append('\
				<div rel = "'+ object[i]['RecipeID'] +'" class="foodItem">\
					<div class="foodHead">\
						<div class = "foodPic">\
							<img src="'+ object[i]['ImageURL'] +'">\
						</div>\
						<div class = "foodTitle">\
							<h4>'+ object[i]['Title'] +'</h4>\
						</div>\
					</div>\
					\
					<div class = "foodDesc">\
						<p>'+ object[i]['Subcategory'] +'</p>\
					</div>\
				</div><!--FoodItem-->');
		}
	}
}