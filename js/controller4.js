var Controller4 = function (container,model) {
	
	$("#confirmDinner").click(function () {
		// body...
		$("#leftMenu").hide();
		$("#rightDiv").hide();
		$("#FourthView").show();

	});


	$(".backToEdit").click(function () {

		$("#leftMenu").show();
		$("#rightDiv").show();
		$("#rightTop").show();
		$("#rightBottom").show();
		$("#FourthView").hide();

	});

}