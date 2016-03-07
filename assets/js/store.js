var fish;
var fishContainer;
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
    fishContainer = $('#money-counter');
    itemsContainer = $('#items');

    $.each( costs, function (key, value) {
        if (!localStorage.getItem(key)) {
            localStorage.setItem(key,0);
        }
        localStorage.setItem(key + "Buyable",false);
    });

    checkFish();
});

function checkFish () {

    $.each( costs, function( key, value ) {
        if (localStorage.getItem(key + "Buyable") == 'false') {
            if (fish >= value) {
                localStorage.setItem(key + "Buyable",'true');
                addItem(key,value);
            }
        }
    });

    setTimeout(checkFish, 1000);
}

function addItem (item, value) {
    itemsContainer.append("<button onclick='buyItem(this)' class='item' value='" + item + ":" + value + "'>" + item + "<br/>" + value + " fish</button>");
}

function buyItem (button) {
    var item = button.value.split(':')[0];
    var value = button.value.split(':')[1];

    console.log("Bought " + item + " for " + value + " fish.");

    fish -= value;
    var newAmount = parseInt(localStorage.getItem(item)) + 1;
    console.log(newAmount);

    localStorage.setItem('fish',fish);
    localStorage.setItem(item,newAmount);
    fishContainer.html(fish);
}
