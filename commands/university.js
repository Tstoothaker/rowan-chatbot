const { MessageEmbed } = require("discord.js");

exports.run = async () => {
    const embed = new MessageEmbed()
        .setColor(generateRandomColour())
        .setTitle('Rowan University Campus')
        .setURL('https://www.rowan.edu/academics/colleges_and_schools/')
        .setAuthor({ name: 'Rowan Campus', iconURL: 'https://i.imgur.com/OHHRbPl.jpg', url: 'https://www.rowan.edu/academics/colleges_and_schools/' })
        .setDescription('Shows the different colleges and schools that Rowan has')
        .setThumbnail('https://i.imgur.com/OHHRbPl.jpg')
        .setFooter({ text: `Made with \u2665`})
        .setTimestamp();
        return { embeds: [embed] };
}
exports.name = "university";
exports.description = "returns information about the various colleges and universities that Rowan has";

function generateRandomColour() {
    return `#${(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0')}`;
}