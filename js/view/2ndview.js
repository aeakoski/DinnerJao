var SndView = function (container,model) {

	$("body").css("backgroung-image","none");

	
	this.numberOfGuests = container.find("#numberOfGuests");
	this.dishList = container.find("#dishList");
	


	this.numberOfGuests.html(model.getNumberOfGuests());

	var starters = model.getAllDishes("starter");

	for (index in starters) {
		console.log("i for-loopen");
		this.dishList.append('\
			<div class="foodItem">\
				<div class="foodHead">\
					<div class = "foodPic">\
						<img src="images/'+ starters[index]['image'] +'">\
					</div>\
					<div class = "foodTitle">\
						<h4>'+ starters[index]['name'] +'</h4>\
					</div>\
				</div>\
				\
				<div class = "foodDesc">\
					<p>'+ starters[index]['description'] +'</p>\
				</div>\
			</div><!--FoodItem-->');

	}

	console.log("i SndView.js filen");


}