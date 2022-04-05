const { MessageEmbed } = require("discord.js");

exports.run = async (client, interaction) => {

    //var garage = args[0] ? args[0]: '';
    let garage = '';
    if(Array.isArray(interaction)) {
        garage = interaction[0];
    } else {
        if(interaction.options.get("garage")) garage = interaction.options.get("garage").value;
    }
    garage = garage.toString().toLowerCase();
    
    const embed = new MessageEmbed()
        .setColor(generateRandomColour())
        .setDescription("Shows directions to different parking garages")
        .setTimestamp()
        .setThumbnail('https://i.imgur.com/UwP2r7v.png')
        .setFooter({ text: `Made with \u2665` });
    
    switch(garage){
        case "boulevard":
            embed.setURL("https://www.google.com/maps/place/Rowan+Boulevard+Parking+Garage/@39.7059953,-75.1156866,17z/data=!3m1!4b1!4m5!3m4!1s0x89c6d7a9355c7157:0x255b1c132e2345b7!8m2!3d39.7060236!4d-75.1134109");
            embed.setAuthor({name: 'Rowan Parking', iconURL: 'https://i.imgur.com/UwP2r7v.png', url: 'https://www.google.com/maps/place/Rowan+Boulevard+Parking+Garage/@39.7059953,-75.1156866,17z/data=!3m1!4b1!4m5!3m4!1s0x89c6d7a9355c7157:0x255b1c132e2345b7!8m2!3d39.7060236!4d-75.1134109'});
            embed.setDescription("Shows directions to Rowan Boulevard parking garage");
            embed.setTitle("Rowan Boulevard Parking");
            break;
        case "micks":
            embed.setURL("https://www.google.com/maps/place/Mick+Drive+Parking+Garage/@39.7037699,-75.1168473,17z/data=!3m1!4b1!4m5!3m4!1s0x89c6d7ae89a16083:0x72ee8b2bfb74e078!8m2!3d39.7037628!4d-75.1146597");
            embed.setAuthor({name: 'Rowan Parking', iconURL: 'https://i.imgur.com/UwP2r7v.png', url: 'https://www.google.com/maps/place/Mick+Drive+Parking+Garage/@39.7037699,-75.1168473,17z/data=!3m1!4b1!4m5!3m4!1s0x89c6d7ae89a16083:0x72ee8b2bfb74e078!8m2!3d39.7037628!4d-75.1146597'});
            embed.setDescription("Shows directions to Micks parking parage");
            embed.setTitle("Mick's Garage Parking");
            break;
        default:
            embed.setURL("https://www.google.com/maps/search/rowan+parking+garage/@39.7048826,-75.1162669,17z/data=!3m1!4b1");
            embed.setAuthor({name: 'Rowan Parking', iconURL: 'https://i.imgur.com/UwP2r7v.png', url: 'https://www.google.com/maps/search/rowan+parking+garage/@39.7048826,-75.1162669,17z/data=!3m1!4b1'});
            embed.setDescription("This will show you different parking garages and give you the option for directions. \n If you want to see a specific garage, try the command again with either boulevard or micks");
            embed.setTitle("Rowan Parking Garages");
    }
    return{embeds : [embed] };
}

exports.name = "parking";
exports.description = "tells the location of the parking garages";
function generateRandomColour() {
    return `#${(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0')}`;
}