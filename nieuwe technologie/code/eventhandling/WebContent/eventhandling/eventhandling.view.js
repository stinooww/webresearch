sap.ui.jsview("eventhandling.eventhandling", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf eventhandling.eventhandling
	*/ 
	getControllerName : function() {
		return "eventhandling.eventhandling";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf eventhandling.eventhandling
	* 
	* aanmaken van een list
	*  data uit een array halen schrijf je met "/" notatie
	*   data wordt weergeven in single  { }
	* list wordt gebind via bind items met 2 parameters, de href en de template
	*/ 
	createContent : function(oController) {
		var oList = new sap.m.List("idPeopleList",{
			inset:  true,
			type: sap.m.ListType.DetailAndActive,
			width: "70%",
			headerText:  "People List"
			});
		
		var oItemTemplate =  new sap.m.StandardListItem("idPeopleItem",{
			title : "{name}",
			description: "{email}",
			type: sap.m.ListType.Navigation,
			tap: [oController.showDetail, oController],	
		});
		oList.bindItems("/", oItemTemplate);
			
		
		
 		var oPage= new sap.m.Page({
			title: "Get detail example",
			content: [
			oList
			]
		});
 		return oPage;
	}

});