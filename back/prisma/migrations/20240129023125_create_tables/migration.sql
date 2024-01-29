-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "fist_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "hash_pwd" TEXT NOT NULL,
    "urlId" TEXT,
    CONSTRAINT "User_urlId_fkey" FOREIGN KEY ("urlId") REFERENCES "URL" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "URL" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "long_url" TEXT NOT NULL,
    "short_url" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
