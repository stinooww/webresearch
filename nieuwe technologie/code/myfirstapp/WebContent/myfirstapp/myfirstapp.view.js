sap.ui.jsview("myfirstapp.myfirstapp", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf myfirstapp.myfirstapp
	*/ 
	getControllerName : function() {
		return "myfirstapp.myfirstapp";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf myfirstapp.myfirstapp
	*/ 
	createContent : function(oController) {
		var oSimpleInput =  new sap.m.Input({
			placeholder: "Enter Name",
			width: "300px"
		});
		var oBtn =  new sap.m.Button({
			text: "Submit"
		});
		var oPage =  new sap.m.Page({
			title: "Title",
			content: [
				oSimpleInput,
				oBtn
			]
		});
		return oPage;
	}

});