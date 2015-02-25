var FourthView = function (container,model) {

	model.addObserver(this);

	this.numberOfGuests = container.find("#numberOfGuests");
	//this.numberOfGuests.html(model.getNumberOfGuests());
	this.totalCost = container.find("#totalCost");
	this.menuItem = container.find("#menuItem");

	this.totalCost.html(model.getTotalMenuPrice());
	var dish = model.getFullMenu();
	
	this.update = function () {
		this.numberOfGuests.html(model.getNumberOfGuests());
		this.totalCost.html(model.getTotalMenuPrice()+'.00 SEK');
		dish = model.getFullMenu();
		$("#menuItem").empty();
		for (var g = 0; g<dish.length; g++) {

		$("#menuItem").append('\
			<div class="foodIcons " >\
				<div class = "foodPic">\
					<img src="images/'+ dish[g]['image'] +'">\
				</div>\
				<div class = "foodTitle">\
					<h4>'+ dish[g]['name'] +'</h4>\
					<span>SEK: '+ model.getDishCost(dish[g]['id']) +'</span>\
				</div>\
			</div>');
		}
	}
	
	
	
}