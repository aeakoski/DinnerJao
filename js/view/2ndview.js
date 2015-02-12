var SndView = function (container,model) {

	$("body").css("backgroung-image","none");

	this.numberOfGuests = container.find("#numberOfGuests")

	this.numberOfGuests.html(model.getNumberOfGuests());

	console.log("läser hit");

	this.jao = container.find("#jao");

	this.jao.html("hejsanhoppsanlillebror");

}