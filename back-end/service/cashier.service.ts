import { Cashier } from '../domain/model/cashier';
import { BillDTO, CashierDTO } from '../types';
import billDb from '../domain/DAO/bill.db';
import cashierDb from '../domain/DAO/cashier.db';


const createCashier = async ({
    userName,
    pin,
    bills,
}: CashierDTO): Promise<Cashier> => {
    const billList = await Promise.all(bills.map((billDTO: BillDTO) => billDb.getBillById({ id: billDTO.id as number })));

    const cashier = new Cashier({ userName, pin, bills: billList });
    return cashierDb.createCashier(cashier);
}

const getAllCashiers = async (): Promise<Cashier[]> => {
    return cashierDb.getAllCashiers();
}

export default {
    createCashier,
    getAllCashiers
}