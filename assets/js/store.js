var fish;
var itemsContainer;

var costs = {
    "old toy"   : 10,
    "squid"     : 100,
    "bed"       : 500,
    "heater"    : 1000,
    "test"      : 99999999999999999999
}

$( document ).ready(function() {

    fish = localStorage.getItem('fish');
    itemsContainer = $('#items');

    $.each( costs, function (key, value) {
        localStorage.setItem(key,false);
    });

    checkFish();
});

function checkFish () {

    $.each( costs, function( key, value ) {
        if (localStorage.getItem(key) == 'false') {
            if (fish >= value) {
                localStorage.setItem(key,'true');
                addItem(key,value);
            }
        }
    });

    setTimeout(checkFish, 1000);
}

function addItem (item, value) {
    itemsContainer.append("<div class='item'>" + item + "<br/>" + value + " fish</div>");
}
