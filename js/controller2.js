var Controller2 = function (container,model) {
	
	this.mealType = container.find("#mealType");
	var typeOfDish = model.getAllDishes();

	//id av dish  ===> $(".fooditem").attr("rel")

	$(".foodItem").click(function () {
		var dishID = $(this).attr('rel');
		
		$("#rightDiv").hide();
		$("#rightDivPrep").show();

	});
}