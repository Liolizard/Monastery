const Discord = require('discord.js');


const db = require("megadb")
var prefixes = new db.crearDB("prefixes")



/**
* @param {Discord.Message} message
* @param {Discord.Client} client - Discord client 
*/
module.exports = async(client, oldM, newM) => {


    
    if(oldM.channel.type == `dm`) return;


    const prefijos = ["skiz ",'/',`<@!${client.user.id}> `, `<@!702987748893786132> `];
    var prefijo = await prefixes.get(oldM.guild.id) || "/"

    for(const thisPrefix of prefijos) {
    if(newM.content.startsWith(thisPrefix)) prefijo = thisPrefix;
    }

    var menudo = oldM.ejecutoComando ||!oldM.ejecutoComando


    if((oldM.content !== newM.content) && newM.content.startsWith(prefijo) && menudo) {
    client.emit("message", newM) 
    }




};