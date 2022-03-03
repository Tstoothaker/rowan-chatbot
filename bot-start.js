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
client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}.`);
});

// code this when people are online so I can test
client.on('guildMemberAdd', async (member) => {
    member.guild.channels.get('channelID')
        .send(`Welcome, ${member}!`);
});

client.on('interactionCreate', async (interaction) => {
    const { commandName } = interaction;

    if (!interaction.isCommand()) return;

    if (commandName === 'help') 
    {
        await interaction.reply(await helpCommand());
    }

    if (commandName === 'university') 
    {
        await interaction.reply(await universityCommand());
    }

    if (commandName === 'campus')
    {
        await interaction.reply(await campusCommand());
    }

// Load events
for (const file of files) {
    const eventName = file.split(".")[0]; // takes out .js
    const event = require(`./events/${file}`);
    client.on(eventName, event.bind(null, client)); // every event has our client var passed along
}

async function universityCommand()
{
    const embed = new MessageEmbed()
        .setColor(generateRandomColour())
        .setTitle('Rowan University Campus')
        .setURL('https://www.rowan.edu/academics/colleges_and_schools/')
        .setAuthor({ name: 'Rowan Campus', iconURL: 'https://i.imgur.com/OHHRbPl.jpg', url: 'https://www.rowan.edu/academics/colleges_and_schools/' })
        .setDescription('Shows the different colleges and schools that Rowan has')
        .setThumbnail('https://i.imgur.com/OHHRbPl.jpg')
        .setFooter({ text: `Made with ${heart()}`})
        .setTimestamp();
    return { embeds: [embed] };
}

    console.log(`Loading ${commandName}.`);
    client.commands.set(commandName, command);
}

console.log("Finished loading commands! Ready to listen.");

// Leave this untouched as the last line in the file
client.login(TOKEN).catch(console.error);