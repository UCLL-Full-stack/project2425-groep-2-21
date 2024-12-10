import { Item } from '../../../domain/model/item';
import { Bill } from '../../../domain/model/bill';

test('given: valid values for bill, when: bill is created, then: bill is created with those values', () => {
    /* given */
    const total = 0;
    const items: Item[] = [];

    /* when */
    const bill = new Bill({
        total,
        items
    });

    /* then */
    expect(bill.items).toEqual(items);
    expect(bill.total).toEqual(total);
});