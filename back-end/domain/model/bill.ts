import { Item } from './item';
import { Bill as BillPrisma, Item as ItemPrisma } from '@prisma/client';

export class Bill {
    readonly id?: number;
    readonly total: number;
    readonly items: Item[];
    readonly createdAt: Date = new Date();
    readonly updatedAt: Date = new Date();

    constructor(bill: {
        id?: number;
        total: number;
        items: Item[];
        createdAt?: Date;
        updatedAt?: Date;
    }) {
        this.id = bill.id;
        this.total = bill.total;
        this.items = bill.items;
        this.createdAt = bill.createdAt ?? new Date();
        this.updatedAt = bill.updatedAt ?? new Date();
    }

    equals({ total, items, createdAt, updatedAt }: Bill) {
        return (
            this.total === total &&
            this.items.every((value, index) => {
                value.equals(items[index])
            }) &&
            this.createdAt === createdAt &&
            this.updatedAt === updatedAt
        );
    }

    static from({
        id,
        total,
        items,
        createdAt,
        updatedAt,
    }: BillPrisma & { items: ItemPrisma[] }) {
        return new Bill({
            id,
            total,
            items: items.map((item: ItemPrisma) => Item.from(item)),
            createdAt,
            updatedAt
        });
    }
}