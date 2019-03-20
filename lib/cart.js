
module.exports = class Cart {
    constructor() {
        let items = new Map();
        let totalPrice = 0.0;

        this.getItems = () => { return items; }

        this.addItem = (item, count) => {
            items.set(item, count);
            totalPrice+= item.price*count;

            return items.size;
        }

        this.itemizedList = () => {
            let list = [];
            items.forEach((val, key) => {
                list.push(key.name + " x" + val + " - " + key.price);
            });
            return list;
        }
            
        this.onSaleItems = () => {
            let list = [];
            items.forEach((val, key) => {
                if (key.onSale) {
                    list.push(key.name + " x" + val + " - " + key.price);
                }
            });
            return list;
        }
    
        this.itemQuantities = () => {
            let list = [];
            items.forEach((val, key) => {
                list.push(key.name + " - x" + val);
            });
            return list;
        }

        this.getTotalPrice = () =>{
            return totalPrice;
        }
    }
}   