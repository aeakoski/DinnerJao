var Controller1 = function (view,model) {
	// body...
	$("#homeletteButton").click(function () {
		sndView("#SndView",model);
	});
}