import { hears } from "@grammyjs/i18n";
import { Composer } from "grammy";
import type { Context } from "~/bot/context";
import { logHandle } from "~/bot/helpers/logging";
import { safeString } from "~/bot/helpers/safe-string";
import { createMainKeyboard } from "~/bot/keyboards";

const composer = new Composer<Context>();

const feature = composer.chatType("private");

feature.command("start", logHandle("command-start"), async (ctx) => {
  return ctx.reply(
    ctx.t("welcome", {
      name: safeString(ctx.from.first_name),
    }),
    {
      reply_markup: await createMainKeyboard(ctx),
    }
  );
});

feature.filter(hears("main.video-btn"), async (ctx) => {
  const { videoService } = ctx.container.items;

  const video = await videoService.findRandom();
  if (!video) {
    return ctx.reply(ctx.t("video.empty"));
  }

  return ctx.reply(ctx.t("video.description"));
});

feature.filter(hears("main.liked-videos-btn"), async (ctx) => {
  const { user } = ctx.scope;
  if (!user) {
    throw new Error("User is empty");
  }

  const marks = await ctx.prisma.mark.findMany({
    where: ctx.prisma.mark.hasUserLike(user.id),
  });

  if (!marks.length) {
    return ctx.reply(ctx.t("marks.empty"));
  }

  return ctx.reply(ctx.t("marks.list"));
});

export { composer as welcomeFeature };
