-- CreateTable
CREATE TABLE "patients" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "name_Bed" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "patients_name_Bed_key" ON "patients"("name_Bed");
