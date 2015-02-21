var MainView = function (container) {
	$("#leftMenu").hide();
	$("#rightDiv").hide();
	$("#rightBottom").hide();
	$("#rightDivPrep").hide();

   	this.welcome = container.find("#welcome");

    this.welcome.animate({'marginLeft' : "+=26%"},800);

}