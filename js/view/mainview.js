var MainView = function (container) {
	this.leftMenu = container.find("#leftMenu")

	this.leftMenu.hide();
	$("#rightDiv").hide();
	$("#rightBottom").hide();
	$("#rightDivPrep").hide();
	$("#FourthView").hide();
	$("#FifthView").hide();

   	this.welcome = container.find("#welcome");

    this.welcome.animate({'marginLeft' : "+=26%"},800);

}