/*!
 * ${copyright}
 */

sap.ui.define(['jquery.sap.global', 'sap/ui/layout/GridRenderer'],
	function(jQuery, GridRenderer) {
	"use strict";

	/**
	 * LightboxRenderer renderer.
	 * @static
	 * @namespace
	 */
	var LightboxRenderer = {};
	
	/**
	 * Renders the HTML for the given control, using the provided {@link sap.ui.core.RenderManager}.
	 * 
	 * @param {sap.ui.core.RenderManager} oRm the RenderManager that can be used for writing to the render output buffer
	 * @param {sap.ui.core.Control} oControl an object representation of the control that should be rendered
	 */
	LightboxRenderer.render = function(oRm, oControl) {
		GridRenderer.render.call("", oRm, oControl);
	};
	

	return LightboxRenderers;

}, /* bExport= */ true);