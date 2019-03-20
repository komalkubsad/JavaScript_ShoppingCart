module.exports = class Item {
    constructor(id, name, price, onSale) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.onSale = onSale;
    }
}