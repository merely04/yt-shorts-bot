import { Prisma } from "@prisma/client";

export default Prisma.defineExtension({
  name: "video",
  model: {
    video: {},
  },
});
