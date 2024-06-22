import { createTRPCRouter, publicProcedure } from '../trpc';
import { z } from 'zod';
import { connectToDatabase } from '../../../lib/mongoose';
import { Author } from '../../../models/Author';

export const authorRouter = createTRPCRouter({
  getAuthor: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ input }: any) => {
      await connectToDatabase();
      const author = await Author.findOne({ author_id: input.id});
      if (!author) {
        throw new Error('Author not found');
      }
      return author;
    }),
});