import { Bill } from './bill';
import { Cashier as CashierPrisma, Bill as BillPrisma, Item as ItemPrisma } from '@prisma/client';

export class Cashier {
    readonly id?: number;
    readonly userName: string;
    readonly pin: string;
    readonly bills: Bill[];
    readonly createdAt: Date = new Date();
    readonly updatedAt: Date = new Date();

    constructor(cashier: {
        id?: number;
        userName: string;
        pin: string;
        bills: Bill[];
        createdAt?: Date;
        updatedAt?: Date;
    }) {
        this.id = cashier.id;
        this.userName = cashier.userName;
        this.pin = cashier.pin;
        this.bills = cashier.bills;
        this.createdAt = cashier.createdAt ?? new Date();
        this.updatedAt = cashier.updatedAt ?? new Date();
    }

    equals({ userName, pin, bills, createdAt, updatedAt }: Cashier) {
        return (
          this.userName === userName &&
          this.pin === pin &&
          this.bills.every((value, index) => {
              value.equals(bills[index])
          }) &&
          this.createdAt === createdAt &&
          this.updatedAt === updatedAt
        );
    }

    static from({
        id,
        userName,
        pin,
        bills,
        createdAt,
        updatedAt
    }: CashierPrisma & { bills: (BillPrisma & { items: ItemPrisma[] })[] }): Cashier {
        return new Cashier({
            id,
            userName,
            pin,
            bills: bills.map((bill: BillPrisma & { items: ItemPrisma[] } ) => Bill.from(bill)),
            createdAt,
            updatedAt
        })
    }
}