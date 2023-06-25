-- CreateTable
CREATE TABLE "Category" (
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Download" (
    "path" TEXT NOT NULL PRIMARY KEY
);

-- CreateTable
CREATE TABLE "DownloadVideo" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "videoId" TEXT NOT NULL,
    "downloadPath" TEXT NOT NULL,
    CONSTRAINT "DownloadVideo_videoId_fkey" FOREIGN KEY ("videoId") REFERENCES "Video" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "DownloadVideo_downloadPath_fkey" FOREIGN KEY ("downloadPath") REFERENCES "Download" ("path") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Video" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "imagePath" TEXT NOT NULL,
    "publicationDate" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "categoryName" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Video_categoryName_fkey" FOREIGN KEY ("categoryName") REFERENCES "Category" ("name") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Category_name_key" ON "Category"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Download_path_key" ON "Download"("path");
