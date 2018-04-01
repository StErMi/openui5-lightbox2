/*!
 * UI development toolkit for HTML5 (OpenUI5)
 * (c) Copyright 2009-2015 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

sap.ui.define(['jquery.sap.global', 'sap/ui/core/Renderer', 'sap/m/ImageRenderer'],
	function(jQuery, Renderer, ImageRenderer) {
	"use strict";


	/**
	 * LightboxImage renderer.
	 * @namespace
	 *
	 * LightboxImageRenderer extends the ImageRenderer
	 */
	var LightboxImageRenderer = Renderer.extend(ImageRenderer);

	/**
	 * Renders the HTML for the given control, using the provided {@link sap.ui.core.RenderManager}.
	 *
	 * @param {sap.ui.core.RenderManager} oRm the RenderManager that can be used for writing to the render output buffer
	 * @param {sap.ui.core.Control} oControl an object representation of the control that should be rendered
	 */
	LightboxImageRenderer.render = function(oRm, oControl) {
		// Link is rendered as a "<a>" element
		oRm.write("<a");
		oRm.writeControlData(oControl);
		oRm.writeAttributeEscaped("href", oControl.getSrc());

		////////////////////////////////////////////// Lightbox CUSTOM
		oRm.writeAttribute("data-lightbox", "roadtrip");

		oRm.write(">"); // opening <a> tag
/*
		oRm.write("<img");
		oRm.writeAttributeEscaped("src", oControl.getSrc());
		oRm.write("/>"); // opening <a> tag
*/
		oRm.renderControl(oControl.getAggregation("_image"));

		//ImageRenderer.prototype.render.apply(this, arguments);

		oRm.write("</a>");
	};
 
	return LightboxImageRenderer;

}, /* bExport= */ true);
