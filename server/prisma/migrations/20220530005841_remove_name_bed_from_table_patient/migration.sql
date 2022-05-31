/*
  Warnings:

  - You are about to drop the column `nameBed` on the `patients` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_patients" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "order" TEXT NOT NULL,
    "category" TEXT
);
INSERT INTO "new_patients" ("category", "id", "name", "order") SELECT "category", "id", "name", "order" FROM "patients";
DROP TABLE "patients";
ALTER TABLE "new_patients" RENAME TO "patients";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
