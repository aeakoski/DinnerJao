var FifthView = function (container,model) {

	$("body").css("background-image","none");

	this.numberOfGuests = container.find("#numberOfGuests");
	this.numberOfGuests.html(model.getNumberOfGuests());
	//this.totalCost = container.find("#totalCost");
	
	var dish = model.getFullMenu();


	this.PrintMenuItem = container.find("#printFoodItem");


	for (var g = 0; g<dish.length; g++) {

		this.printMenuItem.append('\
					<div class="col-xs-3">\
					<img src="image/'+ dish[g]['imgage'] +'">\
					</div>\
					<div class="col-xs-4">\
						<h2>'+ dish[g]['name'] + '</h2>\
						<p>asdfghjasfghjsdfghjk</p>\
					</div>\
					<div class="col-xs-5">\
						<h3>preparation</h3>\
					</div>');
		console.log(i);
	
	}

}