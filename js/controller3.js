var Controller3 = function (view, view2, model) {

	$("#mainSearch").keyup(function(){
			var inp = $("#mainSearch").val()
			model.setInput(inp);
			view2.update();
		});
	
	$("#confirmDish").click(function () {
		model.addDishToMenu(model.getCurrentDish()['id']);
		model.setCurrentDish(null);
		view.update(); //View 3 uppdateras

		$("#rightDivPrep").hide();
		$("#rightDiv").show();
		$("#rightTop").show();
		$("#rightBottom").show();
		if(model.getFullMenu().length === 0){
			$("#confirmDinner").css("background-color", "#CABE9A");
		//background-color: #CABE9A; Avslagen
		
		}else{
			$("#confirmDinner").css("background-color", "#F0AD4E");
		// Vald #background-color: #F0AD4E; PÅslagen
		}
		

	});

	$(".backToEdit").click(function () {
		model.setCurrentDish(null);
		view.update();
		$("#leftMenu").show();
		$("#rightDiv").show();
		$("#rightTop").show();
		$("#rightBottom").show();
		$("#FourthView").hide();

	});

}