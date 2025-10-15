import {Bot} from "grammy";
import {type BotContext, env} from "./config.ts";
import {run} from "@grammyjs/runner";

const bot = new Bot<BotContext>(env.BOT_TOKEN)

run(bot)