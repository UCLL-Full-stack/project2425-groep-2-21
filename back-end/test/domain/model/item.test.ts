import { Item } from '../../../domain/model/item';

test('given: valid values for item, when: item is created, then: item is created with those values', () => {
    /* given */
    const name = 'item1';
    const brand = 'brand1';
    const barcode = 123456789;
    const price = 100;

    /* when */
    const item = new Item({
        name: 'item1',
        brand: 'brand1',
        barcode: 123456789,
        price: 100
    });

    /* then */
    expect(item.name).toEqual(name);
    expect(item.brand).toEqual(brand);
    expect(item.barcode).toEqual(barcode);
    expect(item.price).toEqual(price);
});
