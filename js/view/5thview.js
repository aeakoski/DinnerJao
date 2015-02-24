var FifthView = function (container,model) {

	model.addObserver(this);

	this.numberOfGuests = container.find("#numberOfGuests");
	this.printFoodItem = container.find("#printFoodItem");

	this.numberOfGuests.html(model.getNumberOfGuests());

	var dish = model.getFullMenu();

	this.update = function () {
		// body...
		dish = model.getFullMenu();

		this.numberOfGuests.html(model.getNumberOfGuests());
		menuUpdate(dish);

	}


	var menuUpdate = function (dish) {
		// body...
		$(printFoodItem).empty();
		for (i = 0; i<dish.length; i++) {
			$(printFoodItem).append('\
				<div id = "upperDish" class = col-xs-12>\
					<div class="col-xs-3">\
					<img src="images/'+ dish[i]['image'] +'">\
					</div>\
					<div class="col-xs-4">\
						<h2>'+ dish[i]['name'] + '</h2>\
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sodales tempus pellentesque. Vestibulum convallis ullamcorper sollicitudin. Integer ut faucibus sapien, eget feugiat risus. Aliquam nisi erat, posuere nec euismod eu, fermentum nec nisl. Aenean id ornare nunc. Nunc aliquam nisl magna. Proin id hendrerit urna..</p>\
					</div>\
					<div class="col-xs-5">\
						<h3>Preparation</h3>\
						<p>'+ dish[i]['description'] +'</p>\
					</div>\
				</div>');
		}
	}
}