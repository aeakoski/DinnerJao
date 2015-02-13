var FourthView = function (container,model) {

	$("body").css("backgroung-image","none");

	this.numberOfGuests = container.find("#numberOfGuests");
	this.numberOfGuests.html(model.getNumberOfGuests());


	
	var dish = model.getFullMenu();
	this.menuItem = container.find("#menuItem");

	for (var g = 0; g<dish.length; g++) {
		console.log("sdfghjkhgerftghkj")

		this.menuItem.append('\
					<div class="foodHead " >\
						<div class = "foodPic">\
							<img src="images/'+ dish[g]['image'] +'">\
						</div>\
						<div class = "foodTitle">\
							<h4>'+ dish[g]['name'] +'</h4>\
							<span>SEK: '+ model.getDishCost(dish[g]['id']) +'</span>\
						</div>\
					</div>');
		console.log(i);
	
	}

}