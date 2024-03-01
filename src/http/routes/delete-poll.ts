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

      const deletedPoll = await prisma.poll.delete({
        where: {
          id: pollId,
        },
      });

      return reply.status(204).send("Deletado com sucesso");
    } catch (error) {

      console.error(error);
      return reply.status(500).send({ error: "Erro ao deletar a enquete" });
    }
  });
}