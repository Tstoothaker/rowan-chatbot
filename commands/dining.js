const { MessageEmbed } = require ("discord.js");


exports.run = async (client, interaction) => {

    let food = '';
    if(Array.isArray(interaction)) {
        food = interaction[0];
        if(interaction[1] != null){
            food = food + " " + interaction[1];
        } 
    } else{
        if(interaction.options.get("food")) food = interaction.options.get("food").value;
    }
    if (food == null){
        food = '';
    }
    food = food.toString().toLowerCase();
    
    const embed = new MessageEmbed()
        .setColor(generateRandomColour())
        .setDescription("Shows directions to different food places")
        .setTimestamp()
        .setThumbnail('https://i.imgur.com/UwP2r7v.png')
        .setFooter({ text: `Made with \u2665` });

    switch(food){
        case "asian":
            embed.setDescription(`If you're in the mood for Asian food, try running the command with one of these names for directions: 
            Tomo Sushi \n Rayaki Ramen \n Samurai Hibachi \n Tokyo Mandarin \n Peking Buffet \n Playa Bowls \n Oishii Ramen
            Asiangrill \n Thai Thai`);
            break;
        case "spanish":
            embed.setDescription(`If you're in the mood for chicken, try running the command with one of these names for directions: 
            Pancheros \n LaScalas \n El Mariachi \n Mexican Mariachi`);
            break;
        case "fast food":
            embed.setDescription(`If you're in the mood for fast food, try running the command with one of these names for directions: 
            Popeyes \n Taco Bell \n Burger King \n Checkers \n Wendys \n McDonalds \n Smashburger \n Chipotle`);
            break;
        case "student center":
            embed.setDescription(`If you want any food from the Student Center, make sure you download the GrubHub app
            and you'll be able to order right from there!`);
            break;
        case "pizza":
            embed.setDescription(`If you're in the mood for pizza, try running the command with one of these names for directions: 
            Pizza Hut \n Cicontes \n Little Sicily \ Nicks Pizzaria \n Italian Affair \n Friendlys`);
            break;
        case "other":
            embed.setDescription(`This is some other places that you can go to eat that don't fit easily into one category:
            Landmark \n Chickie and Petes \n Monarch Diner \n `)
        case "tomo sushi":
            embed.setDescription("Heres some directions to Tomo Sushi!");
            embed.setURL("https://www.google.com/maps/dir//Tomo+Sushi+Japanese+Restaurant,+806+Delsea+Dr,+Glassboro,+NJ+08028/@39.7207604,-75.1152398,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x89c6d71caf2f30df:0xc38a76cd5fe13159!2m2!1d-75.1122175!2d39.7204043");
            embed.setTitle("Tomo Sushi");
            break;
        case "rayaki ramen":
            embed.setDescription("Heres some directions to Rayaki Ramen!");
            embed.setURL("https://www.google.com/maps/dir//Rayaki+Ramen+Glassboro,+166+William+Dalton+Dr,+Glassboro,+NJ+08028/@39.7207604,-75.1152398,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x89c6d79ce5107fbb:0x6a9171f8b2fed825!2m2!1d-75.1110217!2d39.7189839");
            embed.setTitle("Rayaki Ramen");
            break;
        case "samurai hibachi":
            embed.setDescription("Heres some directions to Samurai Hibachi!");
            embed.setURL("https://www.google.com/maps/dir//Samurai+Japanese+Hibachi,+646+Delsea+Dr,+Glassboro,+NJ+08028/@39.7176611,-75.1148459,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x89c6d703f48f45d3:0xda95b39ea76776d1!2m2!1d-75.1122163!2d39.7171267");
            embed.setTitle("Samurai Hibachi");
            break;
        case "tokyo mandarin":
            embed.setDescription("Heres some directions to Tokyo Mandarin!");
            embed.setURL("https://www.google.com/maps/dir//Tokyo+Mandarin,+370+Delsea+Dr,+Glassboro,+NJ+08028/@39.7137904,-75.1133224,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x89c6d700f5311d3d:0x9a7d7e7d2bc446db!2m2!1d-75.1106792!2d39.7120884");
            embed.setTitle("Tokyo Mandarin");
            break;
        case "peking buffet":
            embed.setDescription("Heres some directions to Peking Buffet!");
            embed.setURL("https://www.google.com/maps/dir//Peking+Buffet,+753+Delsea+Dr+N,+Glassboro,+NJ+08028/@39.7212499,-75.1212347,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x89c6d7052a8942d5:0xeae3aeb7775f48b1!2m2!1d-75.1168576!2d39.7212501");
            embed.setTitle("Peking Buffet");
            break;
        case "playa bowls":
            embed.setDescription("Heres some directions to Playa Bowls!");
            embed.setURL("https://www.google.com/maps/dir//Playa+Bowls,+328+Rowan+Blvd,+Glassboro,+NJ+08028/@39.7068194,-75.1180547,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x89c6d7a945e3d51f:0x6ab9d88089cbcdbd!2m2!1d-75.1145925!2d39.7068196");
            embed.setTitle("Playa Bowls");
            break;
        case "oishii ramen":
            embed.setDescription("Heres some directions to Oishii Ramen!");
            embed.setURL("https://www.google.com/maps/dir//Oishii+Ramen,+312+Rowan+Blvd,+Glassboro,+NJ+08028/@39.706459,-75.118709,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x89c6d78b39c040cd:0x7cd136f7148c28c2!2m2!1d-75.1142766!2d39.7065729");
            embed.setTitle("Oishii Ramen");
            break;
        case "asiangrill":
            embed.setDescription("Heres some directions to Asiangrill!");
            embed.setURL("https://www.google.com/maps/dir//Asiangrill,+126+High+St+E,+Glassboro,+NJ+08028/@39.7023052,-75.1099336,19z/data=!4m8!4m7!1m0!1m5!1m1!1s0x89c6d7f1b0287207:0x456dbac95d59e33e!2m2!1d-75.1084722!2d39.7018826");
            embed.setTitle("Asiangrill");
            break;
        case "thai thai":
            embed.setDescription("Heres some directions to Thai Thai!");
            embed.setURL("https://www.google.com/maps/dir//Thai+Thai,+21+High+St+E,+Glassboro,+NJ+08028/@39.7027076,-75.1118836,19z/data=!3m1!5s0x89c6d7ada94c862b:0x65b581be0ce065a6!4m8!4m7!1m0!1m5!1m1!1s0x89c72906adc15925:0xf1fd81c886749997!2m2!1d-75.111015!2d39.7027076");
            embed.setTitle("Thai Thai");
            break;
        case "popeyes":
            embed.setDescription("Heres some directions to Popeyes!");
            embed.setURL("https://www.google.com/maps/dir//Popeyes+Louisiana+Kitchen,+332+Delsea+Dr+N,+Glassboro,+NJ+08028/@39.7106129,-75.1118632,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x89c6d7aa9dd5b429:0x9050b59866200d6b!2m2!1d-75.110011!2d39.7103492");
            embed.setTitle("Popeyes");
            break;
        case "taco bell":
            embed.setDescription("Heres some directions to Taco Bell!");
            embed.setURL("https://www.google.com/maps/dir//Taco+Bell,+1101-1105,+Delsea+Dr,+Glassboro,+NJ+08028/@39.7250667,-75.1207985,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x89c6d7aa9c0bc6f5:0x10c51e09d087cf95!2m2!1d-75.1164212!2d39.7250668");
            embed.setTitle("Taco Bell");
            break;
        case "burger king":
            embed.setDescription("Heres some directions to Burger King!");
            embed.setURL("https://www.google.com/maps/dir//Burger+King,+410+Delsea+Dr,+Glassboro,+NJ+08028/@39.7132193,-75.1147472,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x89c6d700f9ac21db:0xd58f87ddbee6469c!2m2!1d-75.1109719!2d39.7129126");
            embed.setTitle("Burger King");
            break;
        case "checkers":
            embed.setDescription("Heres some directions to Checkers!");
            embed.setURL("https://www.google.com/maps/dir//Checkers,+701+North+Delsea+Drive,+Glassboro,+NJ+08028/@39.7202459,-75.1159617,17.33z/data=!4m8!4m7!1m0!1m5!1m1!1s0x89c6d7052a8942d5:0x3e2ecbd3e180a102!2m2!1d-75.1151471!2d39.7201708");
            embed.setTitle("Checkers");
            break;
        case "wendys":
            embed.setDescription("Heres some directions to Wendys!");
            embed.setURL("https://www.google.com/maps/dir//Wendy's,+685+Delsea+Dr,+Glassboro,+NJ+08028/@39.7202524,-75.1159617,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x89c6d7046286597d:0xa4b5f345de04c196!2m2!1d-75.1145772!2d39.7187684");
            embed.setTitle("Wendys");
            break;
        case "mcdonalds":
            embed.setDescription("Heres some directions to McDonalds!");
            embed.setURL("https://www.google.com/maps/dir//McDonald's,+656+Delsea+Dr,+Glassboro,+NJ+08028/@39.7170504,-75.1149953,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x89c6d703edebd06f:0x557b6f472423536a!2m2!1d-75.1127207!2d39.7170656");
            embed.setTitle("McDonalds");
            break;
        case "smashburger":
            embed.setDescription("Heres some directions to Smashburger!");
            embed.setURL("https://www.google.com/maps/dir//Smashburger,+698+N+Delsea+Dr,+Glassboro,+NJ+08028/@39.7172472,-75.1145155,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x89c6d7049e1836c1:0xda5309190121ea6b!2m2!1d-75.1137608!2d39.7195157");
            embed.setTitle("Smashburger");
            break;
        case "chipotle":
            embed.setDescription("Heres some directions to Chipotle!");
            embed.setURL("https://www.google.com/maps/dir//Chipotle+Mexican+Grill,+789+Delsea+Dr+N,+Glassboro,+NJ+08028/@39.720804,-75.11576,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x89c6d72c57eef5a1:0x11f9d2f797dec772!2m2!1d-75.1160011!2d39.7219433");
            embed.setTitle("Chipotle");
            break;
        case "pizza hut":
            embed.setDescription("Heres some directions to Pizza Hut!");
            embed.setURL("https://www.google.com/maps/dir//Pizza+Hut,+314+Rowan+Blvd,+Glassboro,+NJ+08028/@39.7068276,-75.1180547,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x89c6d7a94e688627:0x15481f0c58ec8388!2m2!1d-75.1142574!2d39.7065069");
            embed.setTitle("Pizza Hut");
            break;
        case "cicontes":
            embed.setDescription("Heres some directions to Cicontes!");
            embed.setURL("https://www.google.com/maps/dir//Ciconte's+-+Glassboro,+321+Mullica+Hill+Rd,+Glassboro,+NJ+08028/@39.7110685,-75.1307867,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x89c6d7a0c44060ad:0x8937f4ee16752029!2m2!1d-75.1264093!2d39.7110684");
            embed.setTitle("Cicontes");
            break;
        case "little sicily":
            embed.setDescription("Heres some directions to Little Sicily!");
            embed.setURL("https://www.google.com/maps/dir//Little+Sicily+Pizza,+38+High+St+E,+Glassboro,+NJ+08028/@39.7027076,-75.1118836,19z/data=!4m8!4m7!1m0!1m5!1m1!1s0x89c6d7ac45abc4d5:0xbc3a0f0a433f087d!2m2!1d-75.1105501!2d39.7022977");
            embed.setTitle("Little Sicily");
            break;
        case "nicks pizzaria":
            embed.setDescription("Heres some directions to Nick's Pizzaria!");
            embed.setURL("https://www.google.com/maps/dir//Nick'S+Pizzeria+%26+Steak+House,+644+Delsea+Dr+N,+Glassboro,+NJ+08028/@39.7172472,-75.1145155,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x89c6d703f476e1fb:0xb5953f2e3ed062b2!2m2!1d-75.1123268!2d39.7172431");
            embed.setTitle("Nick's Pizzaria");
            break;
        case "lascalas":
            embed.setDescription("Heres some directions to LaScala's!");
            embed.setURL("https://www.google.com/maps/dir//LaScala's+Fire+Glassboro,+112+Rowan+Blvd,+Glassboro,+NJ+08028/@39.7051602,-75.1151734,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x89c6d7fee30744df:0x44c6edf7ccef9ed!2m2!1d-75.1132372!2d39.7044037");
            embed.setTitle("LaScala's");
            break;
        case "pancheros":
            embed.setDescription("Heres some directions to Pancheros Mexican Grill!");
            embed.setURL("https://www.google.com/maps/dir//Pancheros+Mexican+Grill,+1058+Delsea+Dr,+Glassboro,+NJ+08028/@39.7234612,-75.115903,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x89c6d71ba7c4954b:0x20e0aa2c00558fea!2m2!1d-75.1151819!2d39.7234015");
            embed.setTitle("Pancheros Mexican Grill");
            break;
        case "el mariachi":
            embed.setDescription("Heres some directions to El Mariachi Mexican Resturaunt!");
            embed.setURL("https://www.google.com/maps/dir//El+Mariachi+Mexican+Restaurant,+512+Delsea+Dr+N,+Glassboro,+NJ+08028/@39.715902,-75.1123341,17.58z/data=!4m8!4m7!1m0!1m5!1m1!1s0x89c6d70115d4678b:0x78f62e5bb38fe43a!2m2!1d-75.1119372!2d39.7147512");
            embed.setTitle("El Mariachi Mexican Resturaunt");
            break;
        case "mexican mariachi":
            embed.setDescription("Heres some directions to Mexican Mariachi Grill!");
            embed.setURL("https://www.google.com/maps/dir//Mexican+Mariachi+Grill+y+Tequila+Bar,+206+Rowan+Blvd,+Glassboro,+NJ+08028/@39.7044473,-75.1134705,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x89c6d74156bc4e5b:0x47bb1a5f75fb9a1b!2m2!1d-75.1134774!2d39.7051229");
            embed.setTitle("Mexican Mariachi Grill");
            break;
        case "friendlys":
            embed.setDescription("Heres some directions to Friendly's!");
            embed.setURL("https://www.google.com/maps/dir//Friendly's,+1100+North+Delsea+Drive,+Glassboro,+NJ+08028/@39.7234612,-75.115903,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x89c6d71ba7ccc9cd:0xb1e6d0be7402ee09!2m2!1d-75.1154454!2d39.72461746");
            embed.setTitle("Friendly's");
            break;
        case "landmark":
            embed.setDescription("Heres some directions to Landmark Americana!");
            embed.setURL("https://www.google.com/maps/dir//Landmark+Americana,+1+Mullica+Hill+Rd,+Glassboro,+NJ+08028/@39.7075637,-75.110437,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x89c6d7ab0d1a6f97:0x41d10fce61858883!2m2!1d-75.1104829!2d39.7066892");
            embed.setTitle("Landmark Americana");
            break;
        case "monarch diner":
            embed.setDescription("Heres some directions to Monarch Diner!");
            embed.setURL("https://www.google.com/maps/dir//Monarch+Diner+and+Restaurant,+500+Delsea+Dr,+Glassboro,+NJ+08028/@39.7145046,-75.1115341,17.87z/data=!4m8!4m7!1m0!1m5!1m1!1s0x89c6d70ff04107bf:0x74d7f056cdf4ca69!2m2!1d-75.1114155!2d39.7136394");
            embed.setTitle("Monarch Diner");
            break;
        case "chickie and":
            embed.setDescription("Heres some directions to Chickie's and Petes!");
            embed.setURL("https://www.google.com/maps/dir//Chickie's+%26+Pete's,+234+Rowan+Blvd,+Glassboro,+NJ+08028/@39.7067631,-75.1121536,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x89c6d7ac0333a809:0x2b2bc220ce597cc9!2m2!1d-75.1138494!2d39.7058605");
            embed.setTitle("Chickie's and Petes");
            break;
        case "italian affair":
            embed.setDescription("Heres some directions to Italian Affair!");
            embed.setURL("https://www.google.com/maps/dir//Italian+Affair+Restaurant,+900+Delsea+Dr+%231440,+Glassboro,+NJ+08028/@39.721247,-75.1150153,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x89c6d71b0860e2c5:0x85a254a78debafe2!2m2!1d-75.1148457!2d39.7225304");
            embed.setTitle("Italian Affair");
            break;
        default:
            embed.setDescription("There are many places to eat on or around Rowan. Try running this command with the type of food you want like Asian or pizza");
    }
    return{embeds : [embed] };
}

exports.name = "dining";
exports.description = "tells the location of places to eat around rowan";
function generateRandomColour() {
    return `#${(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0')}`;
}