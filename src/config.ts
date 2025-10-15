import {configDotenv} from "dotenv";
import {z} from "zod";
import {type Context} from "grammy";

configDotenv();

export const env = z.object({
    BOT_TOKEN: z.string()
}).parse(process.env)

export type BotContext = Context