/*
  Warnings:

  - You are about to drop the column `name_Bed` on the `patients` table. All the data in the column will be lost.
  - You are about to drop the column `id_Category` on the `Request` table. All the data in the column will be lost.
  - You are about to drop the column `id_Patient` on the `Request` table. All the data in the column will be lost.
  - Added the required column `nameBed` to the `patients` table without a default value. This is not possible if the table is not empty.
  - Added the required column `request` to the `patients` table without a default value. This is not possible if the table is not empty.
  - Added the required column `idCategory` to the `Request` table without a default value. This is not possible if the table is not empty.
  - Added the required column `idPatient` to the `Request` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_patients" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "request" TEXT NOT NULL,
    "nameBed" TEXT NOT NULL,
    CONSTRAINT "patients_nameBed_fkey" FOREIGN KEY ("nameBed") REFERENCES "beds" ("name") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_patients" ("id", "name") SELECT "id", "name" FROM "patients";
DROP TABLE "patients";
ALTER TABLE "new_patients" RENAME TO "patients";
CREATE UNIQUE INDEX "patients_nameBed_key" ON "patients"("nameBed");
CREATE TABLE "new_Request" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "idPatient" TEXT NOT NULL,
    "idCategory" TEXT NOT NULL,
    CONSTRAINT "Request_idPatient_fkey" FOREIGN KEY ("idPatient") REFERENCES "patients" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Request_idCategory_fkey" FOREIGN KEY ("idCategory") REFERENCES "categories" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Request" ("id", "name") SELECT "id", "name" FROM "Request";
DROP TABLE "Request";
ALTER TABLE "new_Request" RENAME TO "Request";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
