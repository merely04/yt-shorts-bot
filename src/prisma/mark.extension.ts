import { Prisma } from "@prisma/client";

export default Prisma.defineExtension({
  name: "mark",
  model: {
    mark: {
      hasUserLike(userId: string) {
        return {
          userId,
          isLiked: true,
        } satisfies Prisma.MarkWhereInput;
      },
    },
  },
});
