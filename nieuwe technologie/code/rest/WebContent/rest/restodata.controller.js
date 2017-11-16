sap.ui.controller("rest.restodata", {

/**
 * 
* ajax call GET naar json bestand 
* @memberOf rest.restodata
*/
	onInit: function() {
		/** als men werkt met een json array
			var oData = [{
				name: "ash",
				email: "as@h"
			}];
			
			
			sap.ui.getCore().setModel(oModel);
			oModel.setData(oData);
			oModel.refresh();
			*/
			var oModel =  new sap.ui.model.json.JSONModel();
			sap.ui.getCore().setModel(oModel);
			var url = "http://services.odata.org/TripPinRESTierService/People";
			
			$.ajax({
				url: url,
			async: true,
			dataType: "json",
			type : "GET",
			success: function(oResData) {
				if(!oResData){
					sap.m.MessageToast.show("No data retrieved");
				}else{
					oModel.setData(oResData["value"]);
					oModel.refresh();
				}
				
			},
			error: function(XMLHttpRequest, textStatus, errorThrown){
				sap.m.MessageToast.show("Error connection to server");
			}
			});
			
		
		
			
	},
	/**
	 * showdetail vraagt via  event de data op van het geklikte item (index)
	 * steken die data in een json model dat gaat naar detail view
	 * 
	 */
	showDetail: function(oEvt) {
		var oData = oEvt.getSource().getBindingContext().getModel().getData();
		var iIndex = parseInt(oEvt.getSource().getBindingContext().getPath().substr(1));
		
		console.log(oData[iIndex]);
		var oModel =  new sap.ui.model.json.JSONModel();
		sap.ui.getCore().setModel(oModel, "itemModel");
		
		oModel.setData(oData[iIndex]);
		oModel.refresh();
		app.to("idrestodata2");
	}

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf rest.restodata
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf rest.restodata
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf rest.restodata
*/
//	onExit: function() {
//
//	}

});