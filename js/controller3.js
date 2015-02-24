var Controller3 = function (view,model) {
	
	$("#confirmDish").click(function () {
		model.addDishToMenu(model.seeCurrentDish()['id']);
		
		view.update(); //View 3 uppdateras

		$("#rightDivPrep").hide();
		$("#rightDiv").show();
		$("#rightTop").show();
		$("#rightBottom").show();

		console.log(model.getFullMenu());

	});

	$(".backToEdit").click(function () {
		view.update();
		$("#leftMenu").show();
		$("#rightDiv").show();
		$("#rightTop").show();
		$("#rightBottom").show();
		$("#FourthView").hide();

	});

}