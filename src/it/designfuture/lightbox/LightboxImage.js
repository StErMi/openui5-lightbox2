/*!
 * ${copyright}
 */

// Provides control it.designfuture.lightbox.Lightbox
sap.ui.define([
    'jquery.sap.global',
    'sap/m/Image',
    './library'
], function(jQuery, Image, library) {
"use strict";

/**
 * Constructor for a new Lightbox.
 *
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 *
 * @class
 * Lightbox TODO ADD HERE A DESCRIPTION
 * @extends sap.m.InputBase
 * @version ${version}
 *
 * @constructor
 * @public
 * @since 1.40
 * @name it.designfuture.lightbox.LightboxImage
 */

var LightboxImage = Image.extend("it.designfuture.lightbox.LightboxImage", /** @lends it.designfuture.lightbox.LightboxImage prototype */ { 
    
    metadata : {
        library: 'it.designfuture.lightbox',
        properties : {
        },
        events: {}
    },
    
    ////////////////////////////////////////////////////
    //	INTERNAL METHODS
    ////////////////////////////////////////////////////
    
    
    ////////////////////////////////////////////////////
    //	GETTER & SETTER FOR PROPERTIES
    ////////////////////////////////////////////////////

    
});

return LightboxImage;

}, /* bExport= */ true);