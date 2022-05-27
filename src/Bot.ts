import { Client } from "discord.js";

console.log("Bot is starting...");

const client = new Client({
  intents: []
});

client.user?.setActivity(
  `Taxing ${client.guilds.cache.size} guilds for cat pcitures`
);

console.log(client);
