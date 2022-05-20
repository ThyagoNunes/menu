-- CreateTable
CREATE TABLE "Request" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "id_Patient" TEXT NOT NULL,
    "id_Category" TEXT NOT NULL,
    CONSTRAINT "Request_id_Patient_fkey" FOREIGN KEY ("id_Patient") REFERENCES "patients" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Request_id_Category_fkey" FOREIGN KEY ("id_Category") REFERENCES "categories" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
