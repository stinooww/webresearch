sap.ui.jsview("rest.restodatadetail", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf rest.restodatadetail
	*/ 
	getControllerName : function() {
		return "rest.restodatadetail";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf rest.restodatadetail
	*/ 
	createContent : function(oController) {
 		return new sap.m.Page({
			title: "{itemModel>/FirstName}",
			showNavButton : true,
			navButtonPress :  function() {
				app.back();
			},
			content: [
			new sap.m.Text({
				text: "{itemModel>/AddressInfo/0/Address}"
			})
			]
		});
	}

});