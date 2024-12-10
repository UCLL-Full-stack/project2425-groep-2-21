import { Bill } from '../domain/model/bill';
import { BillDTO, ItemDTO } from '../types';
import billDb from '../domain/DAO/bill.db';
import itemDb from '../domain/DAO/item.db';

const createBill =  async ({
           total,
           items,
       }: BillDTO): Promise<Bill> => {
    const itemList = await Promise.all(items.map(async (itemDTO: ItemDTO) => await itemDb.getItemById({ id: itemDTO.id as number })));

    const bill = new Bill({ total, items: itemList });

    return billDb.createBill(bill);
}

const getAllBills = async (): Promise<Bill[]> => {
    return billDb.getAllBills();
}

export default {
    createBill,
    getAllBills
}