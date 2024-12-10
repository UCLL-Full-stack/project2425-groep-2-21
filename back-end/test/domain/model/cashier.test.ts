import { Cashier } from '../../../domain/model/cashier';
import { Bill } from '../../../domain/model/bill';

test('given: valid values for cashier, when: cashier is created, then: cashier is created with those values', () => {
    /* given */
    const userName = 'cashier1';
    const pin = 4056;
    const bills: Bill[] = [];

    /* when */
    const cashier = new Cashier({
        userName,
        pin,
        bills
    });

    /* then */
    expect(cashier.userName).toEqual(userName);
    expect(cashier.pin).toEqual(pin);
    expect(cashier.bills).toEqual(bills);
});