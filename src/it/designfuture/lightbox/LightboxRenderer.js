/*!
 * ${copyright}
 */
sap.ui.define(['jquery.sap.global'],
	function(jQuery) {
	"use strict";


	/**
	 * @author Emanuele Ricci
	 * @version
	 * 0.0.1
	 * @namespace
	 */
	var LightboxRenderer = {};

	/**
	 * Renders the HTML for the given control, using the provided
	 * {@link sap.ui.core.RenderManager}.
	 *
	 * @param {sap.ui.core.RenderManager}
	 *            oRm the RenderManager that can be used for writing to the render
	 *            output buffer
	 * @param {sap.ui.core.Control}
	 *            oControl an object representation of the control that should be
	 *            rendered
	 */
	LightboxRenderer.render = function(oRm, oControl) {
		// write the HTML into the render manager
		oRm.write("<div");
		oRm.writeControlData(oControl);
		oRm.addClass("openui5-lightbox");
		oRm.writeClasses();
		oRm.write(">");

		var aItems = oControl.getContent();		
		for ( var i = 0; i < aItems.length; i++) { // loop over all child controls
			/*oRm.write("<div ");
		    oRm.addClass("openui5-lightbox-item");
			oRm.writeClasses();
			oRm.write(">");*/
			//oRm.renderControl(aItems[i]);
			oControl.getAggregation("_grid").addContent(aItems[i]);
			//oRm.write("</div>"); // end of the box around the respective child
		}
		oRm.renderControl(oControl.getAggregation("_grid"));
		oRm.write("</div>"); // end of the complete grid  control
	};

	return LightboxRenderer;

}, /* bExport= */ true);
