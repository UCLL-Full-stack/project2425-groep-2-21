/*
  Warnings:

  - You are about to drop the column `name` on the `Cashier` table. All the data in the column will be lost.
  - Added the required column `userName` to the `Cashier` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Cashier" DROP COLUMN "name",
ADD COLUMN     "userName" TEXT NOT NULL;
