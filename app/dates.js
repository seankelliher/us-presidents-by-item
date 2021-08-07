function monitorNumbers() {
    "use strict";

    //Get the gallery.
    const gallery = document.getElementById("gallery");

    //Monitor for clicks on right div.
    //Navigate to dates of service. Hide or show.
    gallery.addEventListener("click", function (event) {

        if (event.target.className === "right") {
            const left = event.target.previousElementSibling;
            const datesPara = left.children[1];

            if (datesPara.style.display === "none") {
                datesPara.style.display = "flex";
            } else if (datesPara.style.display === "flex") {
                datesPara.style.display = "none";
            }
        }
    });

}

export {monitorNumbers};