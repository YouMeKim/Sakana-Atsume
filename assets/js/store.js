var fish;
var fishContainer;
var itemsContainer;

$( document ).ready(function() {

    fish = localStorage.getItem('fish');
    fishContainer = $('#fish-counter');
    itemsContainer = $('#items');

    $.each( items, function ( index ) {
        var item = items[index];
        if (!localStorage.getItem(item.name)) {
            localStorage.setItem(item.name,0);
        }
        item.buyable = false;
    });

    checkFish();
});

function checkFish () {

    $.each( items, function( index ) {
        var item = items[index];
        if (item.buyable && item.cost > fish) {
            item.buyable = false;
            $('#' + item.name + 'Button').remove();
        }

        if (!item.buyable) {
            if (fish >= item.cost) {
                item.buyable = true;
                addItem(item.name,item.cost);
            }
        }
    });

    setTimeout(checkFish, 1000);
}

function addItem (name, cost) {

    var itemName = name.replace("-"," ");
    itemsContainer.append("<button id='" + name + "Button' class='item' value='" + itemName + ":" + cost + "' onclick='buyItem(this)'>" + itemName + "<br/>" + cost + " fish</button>");
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
