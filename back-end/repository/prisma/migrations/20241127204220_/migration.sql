-- DropForeignKey
ALTER TABLE "Bill" DROP CONSTRAINT "Bill_cashierId_fkey";

-- DropForeignKey
ALTER TABLE "Item" DROP CONSTRAINT "Item_billId_fkey";

-- AlterTable
ALTER TABLE "Bill" ALTER COLUMN "cashierId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Item" ALTER COLUMN "billId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Bill" ADD CONSTRAINT "Bill_cashierId_fkey" FOREIGN KEY ("cashierId") REFERENCES "Cashier"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Item" ADD CONSTRAINT "Item_billId_fkey" FOREIGN KEY ("billId") REFERENCES "Bill"("id") ON DELETE SET NULL ON UPDATE CASCADE;
