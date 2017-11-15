sap.ui.controller("mysecondapp.mysecondapp", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf mysecondapp.mysecondapp
*/
//	onInit: function() {
//
//	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf mysecondapp.mysecondapp
*/
//	onBeforeRendering: function() {
//
//	},
	goToSecondPage : function(oEvt){
		var oLabel =sap.ui.getCore().byId("idLabel");
		var oInput = sap.ui.getCore().byId("idInput").getValue();
		if(oInput !== undefined){
			oLabel.setText(oInput);
			app.to("idSecond1");
		}
	},
/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf mysecondapp.mysecondapp
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf mysecondapp.mysecondapp
*/
//	onExit: function() {
//
//	}

});