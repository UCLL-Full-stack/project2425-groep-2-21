/*
  Warnings:

  - You are about to drop the column `amount` on the `Bill` table. All the data in the column will be lost.
  - Added the required column `total` to the `Bill` table without a default value. This is not possible if the table is not empty.
  - Added the required column `barcode` to the `Item` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Bill" DROP COLUMN "amount",
ADD COLUMN     "total" DOUBLE PRECISION NOT NULL;

-- AlterTable
ALTER TABLE "Item" ADD COLUMN     "barcode" TEXT NOT NULL;
