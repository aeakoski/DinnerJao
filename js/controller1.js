var Controller1 = function (view,model) {
	
	$("#homeletteButton").click(function () {
		$("#mainView").hide();
		view.leftMenu.show();
		$("#rightDiv").show();
		$("#rightTop").show();
		$("#rightBottom").show();
	});
}