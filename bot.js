const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("574929430770876440")
setInterval(function() {
channel.send(`انا مازن ايمن هل تودون المساعدة يا غبي هههههههههه هههههععععععههعععععععععععععع تبنبنبنبنبتينيتيت رزرزبنينيننينيتينينيتيتنينيتينيتيتينني`);
}, 30)
})
client.login(process.env.TOKEN);
