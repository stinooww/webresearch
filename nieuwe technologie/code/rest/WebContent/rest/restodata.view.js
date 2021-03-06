sap.ui.jsview("rest.restodata", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf rest.restodata
	*/ 
	getControllerName : function() {
		return "rest.restodata";
	},

	/** 
	 *
	 * om eerste element van array op te halen schrijf je /0 
	* 
	* @memberOf rest.restodata
	*/ 
	createContent : function(oController) {
		var oList = new sap.m.List("idPeopleList",{
			inset:  true,
			type: sap.m.ListType.DetailAndActive,
			width: "70%",
			headerText:  "People List"
			});
		var oItemTemplate =  new sap.m.StandardListItem("idPeopleItem",{
			title : "{FirstName}",
			description: "{Emails/0}",
			type: sap.m.ListType.Navigation,
			tap: [oController.showDetail, oController],	
		});
		oList.bindItems("/", oItemTemplate);
			
		
		
 		return new sap.m.Page({
			title: "Get detail example",
			content: [
			oList
			]
		});
	}

});