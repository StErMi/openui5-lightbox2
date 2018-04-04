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
            
            /**
             * 	Src of the Image
             */
            src : {type : "string", group : "Appearance", defaultValue : null},
            
            /**
             * 	Thumb of the Image
             */
            thumb : {type : "string", group : "Appearance", defaultValue : null},
            
            /**
             * 	Height of the Image
             */
            height : {type : "string", group : "Appearance", defaultValue : "200px"},
            
            /**
             * 	Title of the Image
             */
            title : {type : "string", group : "Appearance", defaultValue : ""},
            
            /**
             * 	Alt attribute of the Image
             */
            alt : {type : "string", group : "Appearance", defaultValue : ""},

        },
        aggregations: {
            /**
             * 	Image aggregation for using the sap.m.Image control in this control (act as a Composite control)
             */
            _image : {type : "sap.m.Image", multiple : false, visibility: "hidden"}
         },
        events: {}
    },
    
    ////////////////////////////////////////////////////
    //	INTERNAL METHODS
    ////////////////////////////////////////////////////
    init:function(){
    	this.setAggregation("_image", new Image({
            width: "100%",
            height: this.getHeight(),
            alt: this.getAlt(),
            src: this.getThumb() ? this.getThumb() : this.getSrc()
        }));
    },
    
    ////////////////////////////////////////////////////
    //	GETTER & SETTER FOR PROPERTIES
    ////////////////////////////////////////////////////

    ////////////////////////////////////////////////////
    setSrc:function(sSrc){
        this.setProperty("src", sSrc, true /*no re-rendering of whole lightbox image needed*/);
        this.getAggregation("_image").setSrc(sSrc); // Note: this triggers re-rendering of Image!
    },
    setHeight:function(sHeight){
        this.setProperty("height", sHeight, true /*no re-rendering of whole lightbox image needed*/);
        this.getAggregation("_image").setHeight(sHeight); // Note: this triggers re-rendering of Image!
    }
    
});

return LightboxImage;

}, /* bExport= */ true);