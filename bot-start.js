/* =================================+
 |    IMPORTS & GLOBAL VARIABLES    |
 * =================================+
*/
const { Client, Intents, MessageEmbed } = require('discord.js');
require('dotenv').config();
const TOKEN = process.env.TOKEN;
const CLIENT_ID = process.env.CLIENT_ID;
const GUILD_ID = process.env.GUILD_ID;
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

/* =================================+
 |       BOT MAIN APPLICATION       |
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

    if (commandName === 'bot')
    {
        await interaction.reply(await botCommand());
    }
});

async function helpCommand()
{
    const embed = new MessageEmbed()
    .setColor(generateRandomColour())
    .setDescription('`/help` — returns list of available Chatbot commands\n`/univeristy` — returns information about Rowan University.\n`/campus` — returns information about Rowan campus & surrounding buildings\n`/bot` — returns information about Rowan Chatbot')
    .setTimestamp()
    .setFooter({ text: `Made with ${heart()}` });
    return { embeds: [embed] };
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

async function campusCommand()
{
    const embed = new MessageEmbed()
        .setColor(generateRandomColour())
        .setTitle('Rowan University Campus')
        .setURL('https://www.rowan.edu/about/visiting/main.html')
        .setAuthor({ name: 'Rowan Campus', iconURL: 'https://i.imgur.com/UwP2r7v.png', url: 'https://www.rowan.edu/about/visiting/main.html' })
        .setDescription('Find information about the campus & surrounding buildings')
        .setThumbnail('https://i.imgur.com/UwP2r7v.png')
        .setFooter({ text: `Made with ${heart()}` })
        .setTimestamp();
    return { embeds: [embed] };
}


async function botCommand()
{
    const embed = new MessageEmbed()
    .setColor(generateRandomColour())
    .setAuthor({ name: 'Rowan Chatbot', iconURL: 'https://i.imgur.com/rotM2an.png' })
    .setDescription('This bot was made for Software Engineering during the Spring 2022 semester. It is made by Vince, Mura, Avery, Joe, Tristan, & Zach. The GitHub link can be found here: https://github.com/hungry-franklin-257fd8/rowan-chatbot.')
    .setTimestamp()
    .setFooter({ text: `Made with ${heart()}` });
    return { embeds: [embed] };
}

function generateRandomColour()
{
    return `#${(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0')}`;
}

function heart()
{
    let [ heart ] =  Array('\u2665');
    return heart;
}

// Leave this untouched as the last line in the file
client.login(TOKEN);