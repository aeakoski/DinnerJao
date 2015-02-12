$(function() {
	//We instantiate our model
	var model = new DinnerModel();
	
	//And create the needed controllers and views
	var exampleView = new ExampleView($("#exampleView"),model);

	var mainView = new MainView($("#mainView"),model);

	var sndView = new SndView($("#SndView"),model);

});