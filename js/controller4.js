var Controller4 = function (view,model) {
	
	$("#confirmDinner").click(function () {
		if(model.getFullMenu().length>0){
			view.update();
			$(this).removeClass('btn-default');
    		$(this).addClass('btn-warning');
			$("#leftMenu").hide();
			$("#rightDiv").hide();
			$("#FourthView").show();
			$("#FifthView").hide();
			$("#rightDivPrep").hide();	
		}else{
			
		}
		

	});


	$(".backToEdit").click(function () {

		$("#leftMenu").show();
		$("#rightDiv").show();
		$("#rightTop").show();
		$("#rightBottom").show();
		$("#FourthView").hide();

	});

}