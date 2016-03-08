var inventoryContainer;
var fishContainer;
var fish;

var costs = {
    "leaf"              : 5,
    "bait"              : 10,
    "squid"             : 25,
    "catnip"            : 50,
    "fishing-rod"       : 100,
    "scratching-post"   : 200,
    "bed"               : 5000,
    "header"            : 10000
}

var buyable = {
    "leaf"              : false,
    "bait"              : false,
    "squid"             : false,
    "catnip"            : false,
    "fishing-rod"       : false,
    "scratching-post"   : false,
    "bed"               : false,
    "header"            : false
}

$( document ).ready(function() {

    inventoryContainer = $('#inventory');
    fishContainer = $('#fish-counter');

    $.each( costs, function( item, value ) {
        if (localStorage.getItem(item) && localStorage.getItem(item) > 0) {
            inventoryContainer.append("<div id=" + item + "-counter>" + localStorage.getItem(item) + " " + item + "</div>");
        }
    });

    // grab fish value from local storage
    if (localStorage.getItem('fish')) {
        fish = localStorage.getItem('fish');
    } else {
        fish = 0;
    }

    incrementFish(false);
});

function incrementFish (bool) {
    if (bool || bool == null) {
        fish++;
    }

    fishContainer.html(fish + " fish");
    localStorage.setItem('fish',fish);

    setTimeout(incrementFish, 1000);
}
