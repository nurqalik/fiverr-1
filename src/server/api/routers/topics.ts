import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const topicsRouter = createTRPCRouter({
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.topics.findMany();
  }),
});
