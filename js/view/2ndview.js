var SndView = function (container,model) {

	$("body").css("backgroung-image","none");

	
	this.numberOfGuests = container.find("#numberOfGuests");
	this.dishList = container.find("#dishList");
	this.totalCost = container.find("#totalCost");
	
	this.totalCost.html(model.getTotalMenuPrice());

	this.numberOfGuests.html(model.getNumberOfGuests());

	var starters = model.getAllDishes("starter");

	for (i = 0; i<starters.length; i++) {
		console.log("i for-loopen");
		this.dishList.append('\
			<div class="foodItem">\
				<div class="foodHead">\
					<div class = "foodPic">\
						<img src="images/'+ starters[i]['image'] +'">\
					</div>\
					<div class = "foodTitle">\
						<h4>'+ starters[i]['name'] +'</h4>\
					</div>\
				</div>\
				\
				<div class = "foodDesc">\
					<p>'+ starters[i]['description'] +'</p>\
				</div>\
			</div><!--FoodItem-->');

	}

	console.log("i SndView.js filen");


}