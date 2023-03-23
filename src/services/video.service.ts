import { Prisma } from "@prisma/client";
import { randomNumber } from "~/bot/helpers/random-number";
import type { Logger } from "~/logger";
import type { PrismaClientX } from "~/prisma";

type Dependencies = {
  logger: Logger;
  prisma: PrismaClientX;
};

export class VideoService {
  logger: Dependencies["logger"];

  prisma: Dependencies["prisma"];

  constructor({ logger, prisma }: Dependencies) {
    this.logger = logger;
    this.prisma = prisma;
  }

  async findRandom<T extends Prisma.VideoArgs>() {
    const itemsCount = await this.prisma.video.count();

    const skip = randomNumber(0, itemsCount - 1);

    const query = {
      skip,
      include: {
        marks: true,
      },
    } satisfies Prisma.VideoFindFirstArgsBase;

    return this.prisma.video.findFirst<T & typeof query>();
  }
}
