// ==UserScript==
// @name        Instagram Image Link Opener
// @namespace   pootz10
// @description Allow You Open Instagram Image On Another Tab Left Clicking it
// @include     https://www.instagram.com/*
// @include     http://www.instagram.com/*
// @include     https://instagram.com/*
// @include     http://instagram.com/*
// @version     1.3
// @history     v1.3 instagram changed class name
// @history     v1.2 Bug fix when it has multiple images on a post
// @history     v1.1 Update IG source code
// @license     MIT
// @require     https://code.jquery.com/jquery-2.2.3.min.js
// @require     https://gist.githubusercontent.com/BrockA/2625891/raw/9c97aa67ff9c5d56be34a55ad6c18a314e5eb548/waitForKeyElements.js
// @updateURL   https://raw.githubusercontent.com/pootz10/Instagram-Image-Link-Opener/master/Instagram_Image_Link_Opener.user.js
// @downloadURL https://raw.githubusercontent.com/pootz10/Instagram-Image-Link-Opener/master/Instagram_Image_Link_Opener.user.js
// @grant       GM_openInTab
// @run-at      document-end
// ==/UserScript==

//v1.2
//waitForKeyElements("div.KL4Bh img", clickableImage, false);

//v1.3
waitForKeyElements("div._aagv img", clickableImage, false);

function clickableImage (jNode) {

     jNode.each ( function () {
         var jThis = $(this);
         var imgLink = jThis.prop ("src");

         //v1.2
         //jThis.parent().parent().find("._9AhH0").on( "click", function() {

         //v1.3
         jThis.parent().parent().find("._aagw").on( "click", function() {

             GM_openInTab(imgLink);

         });


     } );

}
