var Controller3 = function (view, view2, model) {

	$("#sendSearch").click(function(){
			var inp = $("#mainSearch").val()
			model.setInput(inp);
			model.getAllDishes();
		});

	$(document).on("mouseover",".glyphicon-remove",function(){	
		//Ändra färg till röd!
		$(this).css("color","red");
		$(this).css("cursor","pointer")
	});

	$(document).on("mouseout",".glyphicon-remove",function(){	
		//Ändra färg till grå!
		$(".glyphicon").css("color","#BBBBBB");
	});

	$(document).on("click",".glyphicon-remove",function(){	
		//Ta bort den valda måltiden från menyn
		model.removeDishFromMenu(parseInt($(this).attr('rel')))
	});
	
	
	$("#confirmDish").click(function () {
		model.addDishToMenu(model.getCurrentDish());
		model.setCurrentDish(null);
		view.update({"None":null}); //View 3 uppdateras

		$("#rightDivPrep").hide();
		$("#rightDiv").show();
		$("#rightTop").show();
		$("#rightBottom").show();

		view.colorKnapp();
	});

	$(".backToEdit").click(function () {
		model.setCurrentDish(null);
		model.getAllDishes();
		$("#leftMenu").show();
		$("#rightDiv").show();
		$("#rightTop").show();
		$("#rightBottom").show();
		$("#FourthView").hide();

	});

}