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
		model.setCurrentDish(dishID);
		//view.update(dishID);
		$("#rightDiv").hide();
		$("#rightDivPrep").show();

	});

	$(document).on("mouseover",".foodItem",function(){	
		//Ändra musen till pointern
		$(this).css("cursor","pointer");
		$(this).css("height","+=5px");
		$(this).css("width","+=5px");
		
	});

	$(document).on("mouseout",".foodItem",function(){	
		//Ändra musen till pointern
		$(this).css("cursor","pointer");
		$(this).css("height","-=5px");
		$(this).css("width","-=5px");
		
	});

	// $(document).on("mouseover",".foodItem",function(){	
	// 	//Ändra musen till pointern
	// 	$(this).css("cursor","pointer");
	// 	$(this).css("position","relative");
	// 	$(this).animate({
	// 		right:"0px",
	// 		bottom: "0px",
	// 		box-shadow: "0px 0px 0px #888888",
	// 	},100);
	// });

	// $(document).on("mouseout",".foodItem",function(){	
	// 	//Ändra musen till pointern
	// 	$(this).animate({
	// 		right:"0px",
	// 		bottom: "0px",
	// 		box-shadow: "0px 0px 0px #888888",
	// 	},100);
	// });


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