var Controller2 = function (view, view2, model) {

	model.getAllDishes();

	$("#sendSearch").click(function(){
		var inp = $("#mainSearch").val()
		model.setInput(inp);
		view2.displayLoad();//Ladda in load Skärmen!
		model.getAllDishes();
		
		});
	

	//When clickin on a fooditem u come to the next view with dish Specifics
	$("#dishList").on('click', '.foodItem', function () {
		var dishID = $(this).attr('rel');
		$('#dishCost').css("visibility", "hidden");
		$('#backButton').css("visibility", "hidden");
		$('#confirmDish').css("visibility", "hidden");
		view.displayLoad();//Ladda in load Skärmen!
		model.getDish(dishID);
		

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