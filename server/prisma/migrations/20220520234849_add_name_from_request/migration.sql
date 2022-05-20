/*
  Warnings:

  - Added the required column `name` to the `Request` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Request" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "id_Patient" TEXT NOT NULL,
    "id_Category" TEXT NOT NULL,
    CONSTRAINT "Request_id_Patient_fkey" FOREIGN KEY ("id_Patient") REFERENCES "patients" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Request_id_Category_fkey" FOREIGN KEY ("id_Category") REFERENCES "categories" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Request" ("id", "id_Category", "id_Patient") SELECT "id", "id_Category", "id_Patient" FROM "Request";
DROP TABLE "Request";
ALTER TABLE "new_Request" RENAME TO "Request";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
