-- CreateTable
CREATE TABLE "beds" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "beds_name_key" ON "beds"("name");
