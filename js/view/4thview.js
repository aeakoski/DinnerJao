var FourthView = function (container,model) {

	$("body").css("backgroung-image","none");

	this.numberOfGuests = container.find("#numberOfGuests");
	this.numberOfGuests.html(model.getNumberOfGuests());


	
	var dish = model.getFullMenu();
	this.menuItem = container.find("#menuItem");
<<<<<<< HEAD
	for (i = 0; i<dish.length; i++) {
=======
	for (var g = 0; g<dish.length; g++) {
		console.log("sdfghjkhgerftghkj")
>>>>>>> d616c6add9a1070a3c187d40c9022d67acda260a
		this.menuItem.append('\
<<<<<<< HEAD
					<div class="foodHead" >\
=======
					<div class="foodHead " >\
>>>>>>> bbe3315093df6b3dfb490b33379470cbd20b7e74
						<div class = "foodPic">\
							<img src="images/'+ dish[g]['image'] +'">\
						</div>\
						<div class = "foodTitle">\
							<h4>'+ dish[g]['name'] +'</h4>\
							<span>SEK: '+ model.getDishCost(dish[g]['id']) +'</span>\
						</div>\
<<<<<<< HEAD
						<span>SEK: 0</span>\
=======
>>>>>>> d616c6add9a1070a3c187d40c9022d67acda260a
					</div>');
		console.log(i);
	
	}

}