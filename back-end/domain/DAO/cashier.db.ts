import { Cashier } from '../model/cashier';


const cashiers: Cashier[] = [];

const createCashier = ({ userName, pin, bills }: Cashier): Cashier => {
    const id = cashiers.length > 0 ? (cashiers[cashiers.length - 1]?.id ?? 0) + 1 : 1;

    const cashier = new Cashier({ id, userName, pin, bills });
    cashiers.push(cashier);
    return cashier;
}

const getAllCashiers = (): Cashier[] => cashiers;

export default {
    createCashier,
    getAllCashiers
}