var fishContainer;
var fish;

$( document ).ready(function() {
    fishContainer = $('#money-counter');
    fish = fishContainer.html();
    setInterval(incrementFish, 1000);
});

function incrementFish () {
    fish++;
    fishContainer.html(fish);
}
