$(function() {
	//We instantiate our model
	var model = new DinnerModel();
	
	//And create the needed controllers and views
	var exampleView = new ExampleView($("#exampleView"),model);
	
	var mainView = new MainView($("#mainView"),model);
	
	var sndView = new SndView($("#SndView"),model);

	var threeView = new ThreeView($("#ThreeView"),model);

	var fourthView = new FourthView($("#FourthView"),model);

	var fifthView = new FifthView($("#FifthView"),model);

	var controller1 = new Controller1($("#mainView"), model);
	

});