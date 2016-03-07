var fish;

var costs = {
    "old toy"   : 10,
    "squid"     : 100,
    "bed"       : 500,
    "heater"    : 1000
}

$( document ).ready(function() {

    // grab fish value from local storage
    if (localStorage.getItem('fish')) {
        fish = localStorage.getItem('fish');
    } else {
        fish = 0;
    }

    checkFish();
});

function checkFish () {

    $.each( costs, function( key, value ) {
        if (fish >= value) {
            console.log("You can afford a " + key);
        }
    });

    setTimeout(checkFish, 1000);
}
