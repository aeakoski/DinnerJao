var FifthView = function (container,model) {

	$("body").css("background-image","none");

	this.numberOfGuests = container.find("#numberOfGuests");
	this.numberOfGuests.html(model.getNumberOfGuests());
	//this.totalCost = container.find("#totalCost");
	
	var dish = model.getFullMenu();


	this.printFoodItem = container.find("#printFoodItem");


	for (var h = 0; h<dish.length; h++) {
		console.log("skriver ut!!!!!!");
		this.printFoodItem.append('Hejsan');

		console.log(h);

	
	}

}