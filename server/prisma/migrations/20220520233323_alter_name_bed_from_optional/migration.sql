-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_patients" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "name_Bed" TEXT,
    CONSTRAINT "patients_name_Bed_fkey" FOREIGN KEY ("name_Bed") REFERENCES "beds" ("name") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_patients" ("id", "name", "name_Bed") SELECT "id", "name", "name_Bed" FROM "patients";
DROP TABLE "patients";
ALTER TABLE "new_patients" RENAME TO "patients";
CREATE UNIQUE INDEX "patients_name_Bed_key" ON "patients"("name_Bed");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
