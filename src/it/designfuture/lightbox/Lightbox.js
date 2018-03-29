/*!
 * ${copyright}
 */

// Provides control it.designfuture.lightbox.Lightbox
sap.ui.define([
    'jquery.sap.global',
    'sap/ui/core/Control',
    './3rdparty/lightbox.min',
    './library'
], function(jQuery, Control, lightbox, library) {
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
 * @name it.designfuture.lightbox.Lightbox
 */

var Lightbox = Control.extend("it.designfuture.lightbox.Lightbox", /** @lends it.designfuture.lightbox.Lightbox prototype */ { 
    
    __box: undefined,
    
    metadata : {
        library: 'it.designfuture.lightbox',
        properties : {
            
            
            
        },
		defaultAggregation : "content",
		aggregations : {

			/**
			 * Controls that are placed into layout.
			 */
			content : {type : "it.designfuture.lightbox.LightboxImage", multiple : true, singularName : "content"}
		},
        events: {
            
        }
    }, 
    
    init: function() {
        //	Init all the things!
    },
    
    onAfterRendering: function() {
        /*lightbox.option({
            'resizeDuration': 200,
            'wrapAround': true
        });*/
    },
    
    ////////////////////////////////////////////////////
    //	INTERNAL METHODS
    ////////////////////////////////////////////////////
    
    
    ////////////////////////////////////////////////////
    //	GETTER & SETTER FOR PROPERTIES
    ////////////////////////////////////////////////////

    
});

/*
* Override the exit method to free local resources and destroy 
* Optionally, pass true as the second argument to force any onChange events to fire
* @public
*/	
Lightbox.prototype.exit = function() {
    Control.prototype.exit.apply(this, arguments);
    this.__box = undefined;
};

return Lightbox;

}, /* bExport= */ true);