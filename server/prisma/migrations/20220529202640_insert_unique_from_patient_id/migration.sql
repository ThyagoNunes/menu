/*
  Warnings:

  - A unique constraint covering the columns `[patientId]` on the table `beds` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "beds_patientId_key" ON "beds"("patientId");
