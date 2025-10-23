import {configDotenv} from "dotenv";
import {z} from "zod";
import {type Context} from "grammy";
import type {I18nFlavor} from "@grammyjs/i18n";

configDotenv({quiet: true});

export const env = z.object({
    BOT_TOKEN: z.string()
}).parse(process.env)

export type BotContext = Context & I18nFlavor