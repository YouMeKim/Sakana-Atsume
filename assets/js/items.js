var items = [
    new item("leaf",5,false),
    new item("bait",10,false),
    new item("squid",25,false),
    new item("catnip",50,false),
    new item("fishing-rod",100,false),
    new item("scratching-post",200,false),
    new item("bed",500,false),
    new item("header",1000,false)
];

function item(n,c,b) {
    this.name = n;
    this.cost = c;
    this.buyable = b;
}
