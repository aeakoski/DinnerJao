$(function() {
	//We instantiate our model
	var model = new DinnerModel();
	
	//And create the needed controllers and views
	var exampleView = new ExampleView($("#exampleView"),model);
	
	var mainView = new MainView($("#wrapper"),model);
	
	var sndView = new SndView($("#wrapper"),model);

	var threeView = new ThreeView($("#ThreeView"),model);

	var fourthView = new FourthView($("#FourthView"),model);

	var fifthView = new FifthView($("#FifthView"),model);

	var controller1 = new Controller1(mainView, model);

	var controller2 = new Controller2(threeView, model);

	var controller3 = new Controller3($("#wrapper"), model);

	var controller4 = new Controller4($("#wrapper"), model);

	var controller5 = new Controller5($("#wrapper"), model);
	

});