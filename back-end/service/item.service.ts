import { Item } from '../domain/model/item';
import { ItemDTO } from '../types';
import itemDb from '../domain/DAO/item.db';

const createItem = async ({
          name,
          brand,
          barcode,
          price
      }: ItemDTO): Promise<Item> => {
    const item = new Item({ name, brand, barcode, price });

    return await itemDb.createItem(item);
};

const getAllItems = async (): Promise<Item[]> => {
    return await itemDb.getAllItems();
};

export default { createItem , getAllItems };