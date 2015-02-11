
$(document).ready(function() {

	
    $("#startButton").click(function () {
       	//code for what hapens when the startButton is clicked
       	$("#welcome").fadeOut();
       	$("body").css("background-image", "none");
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