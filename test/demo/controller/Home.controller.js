sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"sap/m/MessageToast"
], function(Controller, JSONModel, MessageToast) {
	"use strict";

	return Controller.extend("openui5-flatpickr-demo.controller.Home", {
		
		///////////////////////////////////////////////////////////////////////
		//	LIFECYCLE EVENTS
		///////////////////////////////////////////////////////////////////////
		
		onInit: function() {
		},
		
		///////////////////////////////////////////////////////////////////////
		//	EVENTS
		///////////////////////////////////////////////////////////////////////

		onChange: function(oEvent) {
			var editor = this.getView().byId("editor");
			var content = this.getView().byId("content");
			var text = this.getView().byId("text");

			//content.setValue(JSON.stringify(oEvent.getParameter("content")));
			text.setValue(editor.getText());
		}
		

	});
});