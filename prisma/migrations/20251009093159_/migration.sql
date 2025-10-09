/*
  Warnings:

  - You are about to drop the `Requestrun` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "public"."Requestrun" DROP CONSTRAINT "Requestrun_requestid_fkey";

-- AlterTable
ALTER TABLE "Requests" ADD COLUMN     "requestrun" JSONB;

-- DropTable
DROP TABLE "public"."Requestrun";
