var Controller3 = function (view, view2, model) {

	$("#mainSearch").keyup(function(){
			var inp = $("#mainSearch").val()
			model.setInput(inp);
			view2.update();
		});
	
	$("#confirmDish").click(function () {
		model.addDishToMenu(model.getCurrentDish()['id']);
		model.setCurrentDish(null);
		view.update(); //View 3 uppdateras

		$("#rightDivPrep").hide();
		$("#rightDiv").show();
		$("#rightTop").show();
		$("#rightBottom").show();

	});

	$(".backToEdit").click(function () {
		model.setCurrentDish(null);
		view.update();
		$("#leftMenu").show();
		$("#rightDiv").show();
		$("#rightTop").show();
		$("#rightBottom").show();
		$("#FourthView").hide();

	});

}