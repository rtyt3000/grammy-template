import {Bot} from "grammy";
import {type BotContext, env} from "./config.ts";
import {run} from "@grammyjs/runner";
import * as handlers from "./handlers/"
import {I18n} from "@grammyjs/i18n";

const bot = new Bot<BotContext>(env.BOT_TOKEN)

bot.use(new I18n({
    defaultLocale: "en",
    directory: "locales",
}))


for (const handler of Object.values(handlers)) {
    bot.use(handler);
}

const runner = run(bot)

const stopRunner = async () => runner.isRunning() && await runner.stop()

process.once("SIGINT", stopRunner)
process.once("SIGTERM", stopRunner)