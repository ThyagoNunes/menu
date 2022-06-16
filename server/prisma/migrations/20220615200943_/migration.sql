-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_beds" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "patientId" TEXT,
    CONSTRAINT "beds_patientId_fkey" FOREIGN KEY ("patientId") REFERENCES "patients" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_beds" ("id", "name", "patientId") SELECT "id", "name", "patientId" FROM "beds";
DROP TABLE "beds";
ALTER TABLE "new_beds" RENAME TO "beds";
CREATE UNIQUE INDEX "beds_name_key" ON "beds"("name");
CREATE UNIQUE INDEX "beds_patientId_key" ON "beds"("patientId");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
