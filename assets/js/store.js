var fish;
var fishContainer;
var itemsContainer;

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

    fish = localStorage.getItem('fish');
    fishContainer = $('#money-counter');
    itemsContainer = $('#items');

    $.each( costs, function (item, value) {
        if (!localStorage.getItem(item)) {
            localStorage.setItem(item,0);
        }
        buyable[item] = false;
    });

    checkFish();
});

function checkFish () {

    $.each( costs, function( item, value ) {
        if (buyable[item] && value > fish) {
            console.log(item + " is no longer buyable");
            buyable[item] = false;
            $('#' + item + 'Button').remove();
        }

        if (!buyable[item]) {
            if (fish >= value) {
                buyable[item] = true;
                addItem(item,value);
            }
        }
    });

    setTimeout(checkFish, 1000);
}

function addItem (item, value) {
    var itemName = item.replace("-"," ");
    itemsContainer.append("<button id='" + item + "Button' class='item' value='" + item + ":" + value + "' onclick='buyItem(this)'>" + itemName + "<br/>" + value + " fish</button>");
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

    checkFish();
}
