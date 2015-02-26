var Controller2 = function (view, view2, model) {

	model.getAllDishes();

	$("#sendSearch").click(function(){
		console.log("Nu har jag börjat på en ny sökning");
		var inp = $("#mainSearch").val()
		model.setInput(inp);
		model.getAllDishes();
		});
	

	//When clickin on a fooditem u come to the next view with dish Specifics
	$("#dishList").on('click', '.foodItem', function () {
		var dishID = $(this).attr('rel');
		model.getDish(dishID);
		//model.setCurrentDish(model.getDish(dishID));
		//view.update(model.getCurrentDish(dishID));
		$("#rightDiv").hide();
		$("#rightDivPrep").show();

	});

	$(document).on("mouseover",".foodItem",function(){	
		//Ändra musen till pointern
		$(this).css("cursor","pointer");
		
	});

	$(document).on("mouseout",".foodItem",function(){	
		//Ändra musen till pointern
		$(this).css("cursor","pointer");
		
	});

	//when selector changes it sends the new value to the model
	$("#num").change(function () {
		num = $(this).val();
		model.setNumberOfGuests(num);
	});

	$("#mealType").change(function () {
		type = $(this).val();
		model.setMealType(type);

	});
}