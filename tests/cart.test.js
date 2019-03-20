const Cart = require('../lib/cart');
const Item = require('../lib/item');

describe('Cart Tests (Unit)', () => {
    let cart = new Cart()
    it('should return a map', () => {
        expect(cart.getItems() instanceof Map).toBe(true);
    });
    it('cart should be empty at the beginning', () => {
        expect(cart.getItems().size).toBe(0);
    });
    it('should return size 1', () => {
        expect(cart.getItems().size).toBe(0);
        expect(cart.addItem(new Item(1, "Test", 12.34, true), 2)).toBe(1);
        expect(cart.addItem(new Item(2, "Popcorn", 1.0, false), 2)).toBe(2);
    });
    it('cart should include added item', () => {
        let items = cart.getItems().keys();

        let myItem = items.next().value;
        expect(myItem instanceof Item).toBe(true);
        expect(myItem.id).toBe(1);
        expect(myItem.name).toBe("Test");
        expect(myItem.price).toBe(12.34);

        myItem = items.next().value;
        expect(myItem instanceof Item).toBe(true);
        expect(myItem.id).toBe(2);
        expect(myItem.name).toBe("Popcorn");
        expect(myItem.price).toBe(1.0);
    });
    it('cart totalPrice should be correct', () => {
        expect(cart.getTotalPrice()).toBe(26.68);
    });
    it('cart itemQuantities should return number of items', () => {
        let iq= cart.itemQuantities()
        expect(iq.length).toBe(2);
        expect(iq[0]).toBe("Test - x2");
        expect(iq[1]).toBe("Popcorn - x2");
    });
    it('cart itemizedList should return all items', () => {
        let il = cart.itemizedList()
        expect(il.length).toBe(2);
        expect(il[0]).toBe("Test x2 - 12.34");
        expect(il[1]).toBe("Popcorn x2 - 1");
    });
    it('cart onSaleItems should return items those are on sale', () => {
        let il = cart.onSaleItems();
        expect(il.length).toBe(1);
        expect(il[0]).toBe("Test x2 - 12.34");
    });
});

