/*
  Warnings:

  - A unique constraint covering the columns `[patientId]` on the table `categories` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "categories_patientId_key" ON "categories"("patientId");
