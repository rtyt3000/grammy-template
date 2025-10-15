import {Bot} from "grammy";
import {type BotContext, env} from "./config.ts";
import {run} from "@grammyjs/runner";
import * as handlers from "./handlers/"

const bot = new Bot<BotContext>(env.BOT_TOKEN)

for (const handler of Object.values(handlers)) {
    bot.use(handler);
}

run(bot)