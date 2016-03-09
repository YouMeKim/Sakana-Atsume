var inventoryContainer;
var fishContainer;
var fish;

$( document ).ready(function() {

    inventoryContainer = $('#inventory');
    fishContainer = $('#fish-counter');

    moveTo('map');
    updateInventory();
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

function updateInventory () {
    fishContainer.html(fish + " fish");

    $.each( items, function(index) {
        var item = items[index];
        var name = item.name;
        if (localStorage.getItem(name) && localStorage.getItem(name) > 0) {
            if (document.getElementById(name + "-counter")) {
                var container = $("#" + name + "-counter");
                container.html(localStorage.getItem(name) + " " + name);
            } else {
                inventoryContainer.append("<div id=" + name + "-counter>" + localStorage.getItem(name) + " " + name + "</div>");
            }
        }
    });

    // grab fish value from local storage
    if (localStorage.getItem('fish')) {
        fish = localStorage.getItem('fish');
    } else {
        fish = 0;
    }
}

function moveTo(sectionName) {
    var currentAttrValue = jQuery(this).attr('href');
    var link = $('#' + sectionName + '-link');

    $('#' + sectionName + '-content').fadeIn(300).siblings().hide();

    link.addClass('active');
    $('#map-link').removeClass('active').siblings().removeClass('active');
    $('#map-link').addClass('link').siblings().addClass('link');
    link.removeClass('link');
}
