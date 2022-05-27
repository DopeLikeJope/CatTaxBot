import { Client, Intents } from "discord.js";
import "dotenv/config";

console.log("Bot is starting...");

const client = new Client({
  intents: [
    Intents.FLAGS.DIRECT_MESSAGES,
    Intents.FLAGS.GUILD_MESSAGES,
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MESSAGE_REACTIONS
  ]
});

client.login(process.env.BOT_TOKEN);

client.user?.setActivity(
  `Taxing ${client.guilds.cache.size} guilds for cat pcitures`
);
