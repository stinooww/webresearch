sap.ui.controller("eventhandling.eventhandling", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf eventhandling.eventhandling
*/
	onInit: function() {
		
		var oData = [{
			name: "stijn Heynderickx",
			email: "stijn.heynderickx@student.kdg.be"
		}];
		
		// aanmaken van een model met ODATa
		var oModel =  new sap.ui.model.json.JSONModel();
		sap.ui.getCore().setModel(oModel);
		oModel.setData(oData);
		oModel.refresh();
	},
	showDetail: function(oEvt) {
		var oData = oEvt.getSource().getBindingContext().getModel().getData();
		var iIndex = parseInt(oEvt.getSource().getBindingContext().getPath().substr(1));
		
		console.log(oData[iIndex]);
		var oModel =  new sap.ui.model.json.JSONModel();
		sap.ui.getCore().setModel(oModel, "itemModel");
		
		oModel.setData(oData[iIndex]);
		oModel.refresh();
		app.to("ideventhandling2");
	}

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf eventhandling.eventhandling
*/
//	onBeforeRendering: function() {
//
//	},
/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf eventhandling.eventhandling
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf eventhandling.eventhandling
*/
//	onExit: function() {
//
//	}

});