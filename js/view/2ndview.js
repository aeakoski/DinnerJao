var SndView = function (container,model) {

	//add view as observer of model
	model.addObserver(this);


	this.numberOfGuests = container.find("#numberOfGuests");
	this.dishList = container.find("#dishList");
	this.totalCost = container.find("#totalCost");
	this.mealType = container.find("#mealType");
	this.prepDish = container.find("#prepDish");
	this.ingredientsTable = container.find("#ingredients");
	//this.leftMenu = container.find("#leftMenu");
    this.dPending = container.find("#dPending");
    this.pendingCost = container.find("#pendingCost");

	this.totalCost.html(model.getTotalMenuPrice());
	this.pendingCost.html(model.getDishCost());

	//model.getAllDishes("cream", "dessert");
	this.update = function(obj){

		$("#numberOfGuests").html(model.getNumberOfGuests());

		updateFoodItems(obj);
	}

	
	var updateFoodItems = function(object){


		console.log(object, "fghjk");
		if($("#mainSearch").val().length != 0  ){
			//Om det finns saker i söklistan importera den
			
			typeOfDish = model.getInputList();
			if(typeOfDish.length===0){
				$("#dishList").html('');
				$("#dishList").html('\
					<div class="jumbotron">\
						 <h2>Did not found what you were looking for in the pantry!</h2>\
						 <p></br>Your search for "<i>'+ $("#mainSearch").val() +'</i>" did not yeald any matches. Please type in another key word and try again.</p>\
					</div>');
					return;				

			}

		}else{
			//Annars så visa alla maträtter innom vald kategori
			
			//var typeOfDish = model.getAllDishes("cream", "dessert");

		}
			console.log(object[1].ImageURL);
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