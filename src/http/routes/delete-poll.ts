import { z } from "zod";
import { prisma } from "../../lib/prisma";
import { FastifyInstance } from "fastify";

export async function deletePoll(app: FastifyInstance) {
  app.delete("/polls/delete/:pollId", async (req, reply) => {
    try {
      const getPollParams = z.object({
        pollId: z.string().uuid(),
      });
      const { pollId } = getPollParams.parse(req.params);

      const poll = await prisma.poll.findUnique({
        where: {
          id: pollId,
        },
      });

      if (!poll) {
        return reply.status(404).send({ error: "Poll not found" });
      }

      const votesToDelete = await prisma.vote.findMany({
        where: {
          pollId: pollId,
        },
      });
      
      await prisma.vote.deleteMany({
        where: {
          id: { in: votesToDelete.map((vote) => vote.id) },
        },
      });
      
      await prisma.poll.delete({
        where: {
          id: pollId,
        },
      });

        return reply.status(200).send({ message: "Poll deleted" });
      } catch (error) {
        console.error(error);
        return reply.status(500).send({ error: "Error delete Poll" });
      }
    }
  )
}