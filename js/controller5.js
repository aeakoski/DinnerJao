var Controller5 = function (container,model) {
	
	$("#printRecipe").click(function () {

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
		$("#FifthView").hide();


	});

}