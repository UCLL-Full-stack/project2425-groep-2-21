// Execute: ts-node util/seed.ts

import { PrismaClient } from '@prisma/client';
import cashierDb from '../domain/DAO/cashier.db';

const prisma = new PrismaClient();

const main = async () => {
    await prisma.item.deleteMany();
    await prisma.bill.deleteMany();
    await prisma.cashier.deleteMany();


    const cashier = await prisma.cashier.create({
        data: {
            userName: 'cashier1',
            pin: '1234'
        }
    });

    const bill1 = await prisma.bill.create({
        data: {
            total: 9.98,
            items: {
                create: [
                    {
                        name: 'extra fresh shampoo',
                        price: 5.99,
                        brand: "Head and Shoulders",
                        barcode: 123456789
                    },
                    {
                        name: 'chocolate chip cookies 6 st',
                        price: 3.99,
                        brand: "Lotus",
                        barcode: 987654321
                    }
                ]
            }
        }
    });

    const bill2 = await prisma.bill.create({
        data: {
            total: 200,
            items: {
                create: [
                    {
                        name: 'water pet 6x1L',
                        price: 9.99,
                        brand: "Chaudfontaine",
                        barcode: 234567891
                    },
                    {
                        name: 'boerewit 800g',
                        price: 2.99,
                        brand: "Delhaize",
                        barcode: 345678912
                    }
                ]
            }
        }
    });

    cashierDb.createCashier(cashier);
}