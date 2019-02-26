// ==UserScript==
// @name        Instagram Image Link Opener
// @namespace   pootz
// @description Allow You Open Instagram Image On Another Tab Left Clicking it
// @include     https://www.instagram.com/*
// @include     http://www.instagram.com/*
// @include     https://instagram.com/*
// @include     http://instagram.com/*
// @version     1.1
// @history     v1.1 Update IG source code
// @license     MIT
// @require     https://code.jquery.com/jquery-2.2.3.min.js
// @require     https://gist.githubusercontent.com/BrockA/2625891/raw/9c97aa67ff9c5d56be34a55ad6c18a314e5eb548/waitForKeyElements.js
// @updateURL   https://raw.githubusercontent.com/pootz10/Instagram-Image-Link-Opener/master/Instagram_Image_Link_Opener.user.js
// @downloadURL https://raw.githubusercontent.com/pootz10/Instagram-Image-Link-Opener/master/Instagram_Image_Link_Opener.user.js
// @grant       GM_openInTab
// ==/UserScript==

waitForKeyElements("div.KL4Bh img", clickableImage, false);


function clickableImage (jNode) {

     jNode.each ( function () {
         var jThis = $(this);
         var imgLink = jThis.prop ("src");

         jThis.parent().parent().find("._9AhH0").on( "click", function() {

             GM_openInTab(imgLink);

         });


     } );

}
