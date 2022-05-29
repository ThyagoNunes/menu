-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_categories" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "patientId" TEXT
);
INSERT INTO "new_categories" ("id", "name", "patientId") SELECT "id", "name", "patientId" FROM "categories";
DROP TABLE "categories";
ALTER TABLE "new_categories" RENAME TO "categories";
CREATE UNIQUE INDEX "categories_name_key" ON "categories"("name");
CREATE UNIQUE INDEX "categories_patientId_key" ON "categories"("patientId");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
