var fishContainer;
var fish;

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
