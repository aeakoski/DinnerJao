var Controller3 = function (view,model) {
	
	$("#confirmDish").click(function () {
		model.addDishToMenu(model.getCurrentDish()['id']);
		
		view.update(); //View 3 uppdateras

		$("#rightDivPrep").hide();
		$("#rightDiv").show();
		$("#rightTop").show();
		$("#rightBottom").show();

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