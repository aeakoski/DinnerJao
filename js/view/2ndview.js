var SndView = function (container,model) {

	this.numberOfGuests = container.find("#numberOfGuests")

	this.numberOfGuests.html(model.getNumberOfGuests());

	console.log("läser hit");

	this.jao = container.find("#jao");

	this.jao.html("hejsanhoppsanlillebror");

}