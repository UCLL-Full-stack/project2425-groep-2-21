import { Item as ItemPrisma } from '@prisma/client';

export class Item {
    readonly id? : number;
    readonly name : string;
    readonly brand : string;
    readonly barcode : number;
    readonly price : number;
    readonly createdAt: Date = new Date();
    readonly updatedAt: Date = new Date();

    constructor(item: {
        id?: number;
        name: string;
        brand: string;
        barcode: number;
        price: number;
        createdAt?: Date;
        updatedAt?: Date;
    }) {
        this.id = item.id;
        this.name = item.name;
        this.brand = item.brand;
        this.barcode = item.barcode;
        this.price = item.price;
        this.createdAt = item.createdAt ?? new Date();
        this.updatedAt = item.updatedAt ?? new Date();
    }

    equals({ name, brand, barcode, price, createdAt, updatedAt }: Item): boolean {
        return (
            this.name === name &&
            this.brand === brand &&
            this.barcode === barcode &&
            this.price === price
        );
    }

    static from({
        id,
        name,
        brand,
        barcode,
        price,
        createdAt,
        updatedAt
    }: ItemPrisma) {
        return new Item({
            id,
            name,
            brand,
            barcode,
            price,
            createdAt,
            updatedAt
        });
    }
}