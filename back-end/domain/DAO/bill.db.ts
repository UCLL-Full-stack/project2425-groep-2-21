import { Bill } from '../model/bill';
import { Item } from '../model/item';
import database from '../../util/database';


const bills: Bill[] = [];

const createBill = async ({ items, total }: { items: Item[], total: number } ): Promise<Bill> => {
    const billPrisma = await database.bill.create({
        data: {
            total,
            items: {
                create: items
            }
        },
        include: { items: true }
    });
    return Bill.from(billPrisma);
}

const getBillById = async ({
        id
    }: {
        id: number
    }): Promise<Bill> => {
    try {
        const billPrisma = await database.bill.findUnique({
            where: {
                id
            },
            include: { items: true }
        });
        if (!billPrisma) {
            throw new Error(`Bill with id ${id} not found`);
        }
        return Bill.from(billPrisma);
    } catch (error) {
        throw new Error(`Bill with id ${id} not found`);
    }
};

const getAllBills = async (): Promise<Bill[]> => {
    const billsPrisma = await database.bill.findMany({
        include: { items: true }
    });
    return billsPrisma.map((billPrisma) => Bill.from(billPrisma));
};

const addItemToBill = async ({
    id,
    item
}: {
    id: number;
    item: Item;
}): Promise<Bill> => {
    try {
        const updatedBill = await database.bill.update({
            where: {
                id
            },
            data: {
                items: {
                    connect: {
                        id: item.id
                    }
                }
            },
            include: { items: true }
        });
        return Bill.from(updatedBill);
    } catch (error) {
        throw new Error(`Bill with id ${id} not found`);
    }
};

export default {
    createBill,
    getBillById,
    getAllBills,
    addItemToBill
};