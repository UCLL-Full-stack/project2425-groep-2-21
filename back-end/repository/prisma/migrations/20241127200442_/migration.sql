/*
  Warnings:

  - Added the required column `brand` to the `Item` table without a default value. This is not possible if the table is not empty.
  - Added the required column `stock` to the `Item` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Item" ADD COLUMN     "brand" TEXT NOT NULL,
ADD COLUMN     "stock" INTEGER NOT NULL;
