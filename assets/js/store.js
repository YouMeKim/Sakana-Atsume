var fish;
var fishContainer;
var itemsContainer;

$( document ).ready(function() {

    fish = localStorage.getItem('fish');
    fishContainer = $('#fish-counter');
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

    fish -= value;
    var newAmount = parseInt(localStorage.getItem(item)) + 1;

    localStorage.setItem('fish',fish);
    localStorage.setItem(item,newAmount);
    fishContainer.html(fish + " fish");

    checkFish();
    updateInventory();
}
