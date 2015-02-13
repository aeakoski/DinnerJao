var FifthView = function (container,model) {

	$("body").css("background-image","none");

	this.numberOfGuests = container.find("#numberOfGuests");
	this.numberOfGuests.html(model.getNumberOfGuests());
	//this.totalCost = container.find("#totalCost");
	
	var dish = model.getFullMenu();


	this.printMenuItem = container.find("#printFoodItem");


	for (var h = 0; h<dish.length; h++) {
		console.log("skriver ut!!!!!!");
		this.printMenuItem.append('\
				<div id = "upperDish" class = col-xs-12>\
					<div class="col-xs-3">\
					<img src="images/'+ dish[h]['image'] +'">\
					</div>\
					<div class="col-xs-4">\
						<h2>'+ dish[h]['name'] + '</h2>\
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sodales tempus pellentesque. Vestibulum convallis ullamcorper sollicitudin. Integer ut faucibus sapien, eget feugiat risus. Aliquam nisi erat, posuere nec euismod eu, fermentum nec nisl. Aenean id ornare nunc. Nunc aliquam nisl magna. Proin id hendrerit urna..</p>\
					</div>\
					<div class="col-xs-5">\
						<h3>Preparation</h3>\
						<p>'+ dish[h]['description'] +'</p>\
					</div>\
				</div>');

		console.log(h);

	
	}

}