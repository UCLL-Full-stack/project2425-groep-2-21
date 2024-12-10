import { Item } from '../model/item';
import database from '../../util/database';

const items: Item[] = [];

const createItem = async ({name, brand, barcode, price} : Item): Promise<Item> => {
    const itemPrisma = await database.item.create({
        data: {
            name: name,
            brand: brand,
            barcode: barcode,
            price: price,
        }
    })

    return Item.from(itemPrisma);
}

const getItemById = async({
     id
    }: {
    id: number;
}): Promise<Item> => {
    try {
        const itemPrisma = await database.item.findUnique({
            where: {
                id
            }
        })
        if (!itemPrisma) {
            throw new Error(`Item with id ${id} not found`);
        }
        return Item.from(itemPrisma);
    } catch (error) {
        throw new Error(`Item with id ${id} not found`);
    }
};

const getAllItems = async(): Promise<Item[]> => {
    const itemsPrisma = await database.item.findMany();
    return itemsPrisma.map((itemPrisma) => Item.from(itemPrisma));
};

export default {
    createItem,
    getItemById,
    getAllItems
};