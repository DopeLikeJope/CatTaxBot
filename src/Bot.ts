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

client.on("ready", () => {
  // update the status of the bot every 10 minutes
  setInterval(() => {
    client.user?.setActivity(
      `${client.guilds.cache.size} guilds for cat pictures`,
      { type: "WATCHING" }
    );
  }, 6000 * 10);
});

client.login(process.env.BOT_TOKEN);
