sap.ui.jsview("mysecondapp.second", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf mysecondapp.second
	*/ 
	getControllerName : function() {
		return "mysecondapp.second";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf mysecondapp.second
	*/ 
	createContent : function(oController) {
		var oLab  =  new sap.m.Label("idLabel");
		
		
		
 		var oPage = new sap.m.Page({
			title: "Second Page",
			showNavButton: true,
			navButtonPress: function(oEvt){
				app.back();			
				},
			content: [
			oLab
			]
		});
 		return oPage;
	}

});