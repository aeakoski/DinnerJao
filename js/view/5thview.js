var FourthView = function (container,model) {

	$("body").css("backgroung-image","none");

	this.numberOfGuests = container.find("#numberOfGuests");
	this.numberOfGuests.html(model.getNumberOfGuests());
	//this.totalCost = container.find("#totalCost");

	this.totalCost.html(model.getTotalMenuPrice());
	
	var dish = model.getFullMenu();

	this.PrintMenuItem = container.find("#fifthView");

	for (var g = 0; g<dish.length; g++) {

		this.printMenuItem.append('\
					<div class="col-xs-3">
					'+dish[g].imgage+'\
					</div>\

					<div class="col-xs-4">\
						<h2>Lassange</h2>\
						<p>asdfghjasfghjsdfghjk</p>\

					</div>\
					
					<div class="col-xs-5">\
						<h3>preparation</h3>\

					</div>\
					');
		console.log(i);
	
	}

}