var FifthView = function (container,model) {

	$("body").css("background-image","none");

	this.numberOfGuests = container.find("#numberOfGuests");
	this.numberOfGuests.html(model.getNumberOfGuests());
	//this.totalCost = container.find("#totalCost");
	
	var dish = model.getFullMenu();


	this.printFoodItem = container.find("#printFoodItem");


	for (var h = 0; h<dish.length; h++) {
		console.log("skriver ut!!!!!!");
		
		this.printMenuItem.append('\
					<div class="col-xs-3">\
					<img src="images/'+ dish[h]['image'] +'">\
					</div>\
					<div class="col-xs-4">\
						<h2>'+ dish[h]['name'] + '</h2>\
						<p>asdfghjasfghjsdfghjk</p>\
					</div>\
					<div class="col-xs-5">\
						<h3>preparation</h3>\
					</div>');


		console.log(h);

	
	}

}