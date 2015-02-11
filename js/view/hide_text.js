
$(document).ready(function() {

	$("#rightDiv").hide();
	$("#rightMenu").hide();

	
    $("#startButton").click(function () {
       	//code for what hapens when the startButton is clicked
       	$("#welcome").hide();
       	$("body").css("background-image", "none");
       	$("#rightDiv").fadeIn();
       	$("#rightMenu").fadeIn();
    });

    function getNumOfPeople () {
    	// body...
    	var numOfPeople = $('#num').val();
    	//hide the num of people selected
    	$("#showtest").html(numOfPeople).hide();
    }


    //Reads value of selector num of people
    $("select").change( getNumOfPeople );
    getNumOfPeople();

    

    



});