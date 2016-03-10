var statsContainer;
var fishContainer;
var fish;

$( document ).ready(function() {

    statsContainer = $('#stats');
    fishContainer = $('#fish-counter');

    //moveTo('map');
    moveTo('inventory');
    updateStats();
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

function updateStats () {
    fishContainer.html(fish + " fish");

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

    // add specific actions for certain sections
    switch(sectionName) {
        case "inventory":
            showInventory();
            return;
        default:
            return;
    }
}
