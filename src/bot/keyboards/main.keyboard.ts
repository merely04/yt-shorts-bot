import { Keyboard } from "grammy";
import _ from "lodash";
import { Context } from "~/bot/context";

export const createMainKeyboard = async (ctx: Context) => {
  return new Keyboard(
    _.chunk([ctx.t("main.video-btn"), ctx.t("main.liked-videos-btn")], 1)
  ).resized();
};
