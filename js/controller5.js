var Controller5 = function (view,model) {
	
	$("#printRecipe").click(function () {
		view.update();
		$("#leftMenu").hide();
		$("#rightDiv").hide();
		$("#FourthView").hide();
		$("#FifthView").show();


	});

	$(".backToEdit").click(function () {

		$("#leftMenu").show();
		$("#rightDiv").show();
		$("#rightTop").show();
		$("#rightBottom").show();
		$("#rightDivPrep").hide();
		$("#FifthView").hide();


	});

}