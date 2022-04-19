const { MessageEmbed } = require("discord.js");

exports.run = async (client, interaction) => {
    // creates the default case if no arguments are given
    // const year = (args !== null) ? args[0] : '';
    let year = '';
    if(Array.isArray(interaction)) {
        year = interaction[0];
    } else {
        if(interaction.options.get("year")) year = interaction.options.get("year").value;
    }
    if (year == null){
        year = '';
    }
    year = year.toString().toLowerCase();
    // basic message creation stuff
    const embed = new MessageEmbed()
        .setColor(generateRandomColour())
        .setDescription("Shows the dates for registration")
        .setTimestamp()
        .setFooter({ text: `Made with \u2665` });
    
    // this is the switch statement that displays the correct message for the given argument
    switch(year) {
        case "priority":
            embed.setDescription("Priority registration is on March 21st");
            break;
        case "senior":
            embed.setDescription("Registration for seniors is on March 22nd");
            break;
        case "junior":
            embed.setDescription("Registration for juniors is on March 28th");
            break;
        case "sophmore":
            embed.setDescription("Registration for sophmores is on April 4th");
            break;
        case "freshmen":
            embed.setDescription("Registration for freshmen is on April 11th");
            break;
        default:
            embed.setDescription("Registration for everyone begins on April 11th");
    }
    return { embeds: [embed] }
}
exports.name = "registration";
exports.description = "tells the date for registration based on year";
exports.args = "year";

function generateRandomColour() {
    return `#${(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0')}`;
}
