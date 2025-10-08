-- CreateTable
CREATE TABLE "Requestrun" (
    "id" TEXT NOT NULL,
    "requestid" TEXT NOT NULL,
    "status" INTEGER NOT NULL,
    "statusText" TEXT,
    "headers" JSONB,
    "body" TEXT,
    "durationMs" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Requestrun_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Requestrun" ADD CONSTRAINT "Requestrun_requestid_fkey" FOREIGN KEY ("requestid") REFERENCES "Requests"("id") ON DELETE CASCADE ON UPDATE CASCADE;
