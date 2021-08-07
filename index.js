import {
    clearSecondaryNav,
    chooseSecondaryNav,
    highlightListItem
} from "./app/nav.js";
import {clearGallery, createGallery} from "./app/gallery.js";
import {filterGallery} from "./app/filters.js";
import {hideEmpty} from "./app/empty.js";
import {monitorNumbers} from "./app/dates.js";

//After DOM loads...
document.addEventListener("DOMContentLoaded", function () {
    "use strict";

    //Get lists (inside nav elements).
    //Get the "birthplace" list item in primary list.
    const primaryList = document.getElementById("primary-list");
    const secondaryList = document.getElementById("secondary-list");
    const birthplace = document.getElementById("birthplace");

    //Highlight "birthplace" list item in primary list.
    highlightListItem(primaryList, birthplace);

    //Create "birthplace" list items in secondary list.
    chooseSecondaryNav("birthplace");

    //Create "birthplace" items in gallery.
    createGallery("birthplace");

    //Watch secondary list for clicks.
    filterGallery();

    //Hide "empty" message.
    //Appears when list items user clicks return no presidents.
    hideEmpty();

    //Watch "potus numbers" for clicks.
    monitorNumbers();

    //Watch primary list for clicks.
    primaryList.addEventListener("click", function (event) {
        clearSecondaryNav();
        chooseSecondaryNav(event.target.id);
        clearGallery();
        createGallery(event.target.id);
        highlightListItem(primaryList, event.target);
        hideEmpty();
    });

    //Highlight clicked list item in secondary list.
    secondaryList.addEventListener("click", function (event) {
        highlightListItem(secondaryList, event.target);
    });
});