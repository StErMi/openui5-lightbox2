/*!
 * ${copyright}
 */

// Provides control it.designfuture.lightbox.Lightbox
sap.ui.define([
    'jquery.sap.global',
    'sap/ui/core/Control',
    'sap/ui/layout/Grid',
    './3rdparty/lightbox.min',
    './library'
], function(jQuery, Control, Grid, lightboxLib, library) {
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
    
    metadata : {
        library: 'it.designfuture.lightbox',
        properties : {
            
            /**
             * 	Gallery ID if you want to group images inside a gallery
             */
            gallery : {type : "string", group : "Appearance", defaultValue : null},
            
            /**
             * 	If true, the left and right navigation arrows which appear on mouse hover when viewing image 
             *  sets will always be visible on devices which support touch.
             */
            alwaysShowNavOnTouchDevices : {type : "boolean", group : "Appearance", defaultValue : false},
            
            /**
             * 	The text displayed below the caption when viewing an image set. 
             *  The default text shows the current image number and the total number of images in the set.
             */
            albumLabel : {type : "string", group : "Appearance", defaultValue : "Image %1 of %2"},
            
            /**
             * 	If true, prevent the page from scrolling while Lightbox is open. 
             *  This works by settings overflow hidden on the body.
             */
            disableScrolling : {type : "boolean", group : "Appearance", defaultValue : false},
            
            /**
             * 	The time it takes for the Lightbox container and overlay to fade in and out, in milliseconds.
             */
            fadeDuration : {type : "int", group : "Appearance", defaultValue : 600},
            
            /**
             * 	If true, resize images that would extend outside of the viewport so they fit neatly inside of it. 
             *  This saves the user from having to scroll to see the entire image.
             */
            fitImagesInViewport : {type : "boolean", group : "Appearance", defaultValue : true},
            
            /**
             * 	The time it takes for the image to fade in once loaded, in milliseconds.
             */
            imageFadeDuration : {type : "int", group : "Appearance", defaultValue : 600},
            
            /**
             * 	If set, the image width will be limited to this number, in pixels. Aspect ratio will not be maintained.
             */
            maxWidth : {type : "int", group : "Appearance", defaultValue : null},
            
            /**
             * 	If set, the image height will be limited to this number, in pixels. Aspect ratio will not be maintained.
             */
            maxHeight : {type : "int", group : "Appearance", defaultValue : null},
            
            /**
             * 	The distance from top of viewport that the Lightbox container will appear, in pixels.
             */
            positionFromTop : {type : "int", group : "Appearance", defaultValue : 50},
            
            /**
             * 	The time it takes for the Lightbox container to animate its width and height when transition between different size images, in milliseconds.
             */
            resizeDuration : {type : "int", group : "Appearance", defaultValue : 700},
            
            /**
             * 	If false, the text indicating the current image number and the total number of images in set (Ex. "image 2 of 4") will be hidden.
             */
            showImageNumberLabel : {type : "boolean", group : "Appearance", defaultValue : true},
            
            /**
             * 	If true, when a user reaches the last image in a set, the right navigation arrow will appear and they 
             *  will be to continue moving forward which will take them back to the first image in the set.
             */
            wrapAround : {type : "boolean", group : "Appearance", defaultValue : false},
            
        },
		defaultAggregation : "content",
		aggregations : {

			/**
			 * Controls that are placed into layout.
			 */
			content : {type : "it.designfuture.lightbox.LightboxImage", multiple : true, singularName : "content"},
            _grid : {type : "sap.ui.layout.Grid", multiple : false, visibility: "hidden"}
		},
        events: {
            
        }
    }, 
    
    init: function() {
        //	Init all the things!
        this.setAggregation("_grid", new Grid());
        
        if ( !this.getGallery() ) {
            this.setGallery( this.getId() );
        }
    },
    
    onAfterRendering: function() {
        var config = {
            alwaysShowNavOnTouchDevices: this.getAlwaysShowNavOnTouchDevices(),
            albumLabel: this.getAlbumLabel(),
            disableScrolling: this.getDisableScrolling(),
            fadeDuration: this.getFadeDuration(),
            fitImagesInViewport: this.getFitImagesInViewport(),
            imageFadeDuration: this.getImageFadeDuration(),
            positionFromTop: this.getPositionFromTop(),
            resizeDuration: this.getResizeDuration(),
            showImageNumberLabel: this.getShowImageNumberLabel(),
            wrapAround: this.getWrapAround()
        };

        if ( this.getMaxWidth() ) {
            config.maxWidth = this.getMaxWidth();
        }

        if ( this.getMaxHeight() ) {
            config.maxHeight = this.getMaxHeight();
        }

        lightbox.option(config);
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
};

return Lightbox;

}, /* bExport= */ true);