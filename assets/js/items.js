var items = [
    new item("leaf",5,"wwwwwwwwwwwww<br>w           w<br>w           w<br>w           w<br>w           w<br>w           w<br>wwwwwwwwwwwww"),
    new item("bait",10,"      w      <br>      w      <br>      w      <br>      w      <br>      w      <br>      w      <br>      w      "),
    new item("dry-kibble",25,"      w      <br>      w      <br>      w      <br>      w      <br>      w      <br>      w      <br>      w      "),
    new item("catnip",50,"      w      <br>      w      <br>      w      <br>      w      <br>      w      <br>      w      <br>      w      "),
    new item("canned-tuna",75,"      w      <br>      w      <br>      w      <br>      w      <br>      w      <br>      w      <br>      w      "),
    new item("fishing-rod",100,"      w      <br>      w      <br>      w      <br>      w      <br>      w      <br>      w      <br>      w      "),
    new item("toy",250,"      w      <br>      w      <br>      w      <br>      w      <br>      w      <br>      w      <br>      w      "),
    new item("scratching-post",500,"      w      <br>      w      <br>      w      <br>      w      <br>      w      <br>      w      <br>      w      "),
    new item("bed",1000,"      w      <br>      w      <br>      w      <br>      w      <br>      w      <br>      w      <br>      w      ")
];

function item(n,c,a) {
    this.name = n;
    this.cost = c;
    this.buyable = false;
    this.ascii = a;
}

function showInventory() {
    var inventory = $('#inventory-content');

    $.each( items, function( index ) {
        var item = items[index];
        var name = item.name;
        if (localStorage.getItem(name) && localStorage.getItem(name) > 0) {
            inventory.append("<div id='" + name + "' class='inventory-item'><pre>" + item.ascii + "</pre></div>");
        }
    });

    console.log("inventory");
}
