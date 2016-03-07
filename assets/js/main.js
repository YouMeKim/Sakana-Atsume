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

    fishContainer = $('#fish-counter');

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
