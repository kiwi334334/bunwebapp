-- CreateTable
CREATE TABLE "Post" (
    "PostId" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "body" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Post_PostId_key" ON "Post"("PostId");
