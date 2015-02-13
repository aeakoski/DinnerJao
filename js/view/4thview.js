var FourthView = function (container,model) {

	$("body").css("backgroung-image","none");

	this.numberOfGuests = container.find("#numberOfGuests");
	this.numberOfGuests.html(model.getNumberOfGuests());


	
	var dish = model.getFullMenu();
	this.menuItem = container.find("#menuItem");
	for (i = 0; i<dish.length; i++) {
		this.menuItem.append('\
<<<<<<< HEAD
					<div class="foodHead" >\
=======
					<div class="foodHead " >\
>>>>>>> bbe3315093df6b3dfb490b33379470cbd20b7e74
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