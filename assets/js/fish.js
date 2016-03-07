var fishContainer;
var fish;

$( document ).ready(function() {

    fishContainer = $('#money-counter');

    // grab fish value from local storage
    if (localStorage.getItem('fish')) {
        fish = localStorage.getItem('fish');
    } else {
        fish = 0;
    }

    // set incrementFish() to run every second
    incrementFish(false);
    setInterval(incrementFish, 1000);
});

function incrementFish (bool) {
    if (bool || bool == null) {
        fish++;
    }

    fishContainer.html(fish);
    localStorage.setItem('fish',fish);
}
