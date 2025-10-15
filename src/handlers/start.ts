import {Composer} from "grammy";
import type {BotContext} from "../config.ts";

export const start = new Composer<BotContext>()

start.command("start", async (ctx) => {
    await ctx.reply("Hello! I'm your bot. How can I assist you today?");
})