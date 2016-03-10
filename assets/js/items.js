var items = [
    new item("leaf",5),
    new item("bait",10),
    new item("dry-kibble",25),
    new item("catnip",50),
    new item("canned-tune",75),
    new item("fishing-rod",100),
    new item("toy",250),
    new item("scratching-post",500),
    new item("bed",1000)
];

function item(n,c) {
    this.name = n;
    this.cost = c;
    this.buyable = false;
}

function showInventory() {
    console.log("inventory");
}
