-- DropForeignKey
ALTER TABLE "PollOption" DROP CONSTRAINT "PollOption_pollId_fkey";

-- AddForeignKey
ALTER TABLE "PollOption" ADD CONSTRAINT "PollOption_pollId_fkey" FOREIGN KEY ("pollId") REFERENCES "Poll"("id") ON DELETE CASCADE ON UPDATE CASCADE;
