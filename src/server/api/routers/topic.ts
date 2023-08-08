import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const topicRouter = createTRPCRouter({
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.topic.findMany({
      include: {
        topics: true
      }
    });
  }),
  getOne: publicProcedure.input(z.string()).query(async ({ input, ctx }) => {
    const topic = await ctx.prisma.topic.findUnique({
      where: {
        id: input,
      },
      include: {
        topics: true
      }
    });
    return topic
  }),
});
