var Controller3 = function (view,model) {
	
	$("#confirmDish").click(function () {
		// body...
		view.update();
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