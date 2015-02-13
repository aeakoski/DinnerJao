var FourthView = function (container,model) {

	$("body").css("backgroung-image","none");

	this.numberOfGuests = container.find("#numberOfGuests");
	this.numberOfGuests.html(model.getNumberOfGuests());


	
	var dish = model.getFullMenu();
	this.menuItem = container.find("#menuItem");
	for (i = 0; i<dish.length; i++) {
		this.menuItem.append('\
					<div class="foodHead" >\
						<div class = "foodPic">\
							<img src="images/'+ dish[i]['image'] +'">\
						</div>\
						<div class = "foodTitle">\
							<h4>'+ dish[i]['name'] +'</h4>\
						</div>\
						<span>SEK: 0</span>\
					</div>');
	
	}

}