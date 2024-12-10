type ItemDTO = {
    id?: number;
    name: string;
    brand: string;
    barcode: number;
    price: number;
}

type BillDTO = {
    id?: number;
    items: ItemDTO[];
    total: number;
    date: Date;
}

type CashierDTO = {
    id?: number;
    userName: string;
    pin: string;
    bills: BillDTO[];
}

export {
    ItemDTO,
    BillDTO,
    CashierDTO
};