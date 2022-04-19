/* =================================+
 |    IMPORTS & GLOBAL VARIABLES    |
 * =================================+
*/
const { Client, Intents, MessageEmbed, Collection} = require('discord.js');
const fs = require("fs");
const config = require("./config.json");
require('dotenv').config();
const TOKEN = config.TOKEN || process.env.TOKEN;
const CLIENT_ID = config.CLIENT_ID || process.env.CLIENT_ID;
const GUILD_ID = config.GUILD_ID || process.env.GUILD_ID;
const client = new Client({
    intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES]
});
client.config = config;
const files = fs.readdirSync("./events").filter(file => file.endsWith(".js"));

/* =================================+
 |          STARTUP SEQUENCE        |
 * =================================+
*/

// Load events
for (const file of files) {
    const eventName = file.split(".")[0]; // takes out .js
    const event = require(`./events/${file}`);
    client.on(eventName, event.bind(null, client)); // every event has our client var passed along
}

// Load commands
client.commands = new Collection();
const commands = fs.readdirSync("./commands").filter(file => file.endsWith(".js"));
for (const file of commands) {
    const commandName = file.split(".")[0]; // same deal as events
    const command = require(`./commands/${file}`);

    console.log(`Loading ${commandName}.`);
    client.commands.set(commandName, command);
}

console.log("Finished loading commands! Ready to listen.");

// Leave this untouched as the last line in the file
client.login(TOKEN).catch(console.error);