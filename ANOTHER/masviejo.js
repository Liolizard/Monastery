const Discord = require('discord.js');
const moment = require('moment');




module.exports = {
  alias: ["viejos","viejo","masviejos"],
 /**
 * @param {Discord.Message} message
 * @param {Discord.Client} client - Discord client 
 */

  run: async ( client, message, args, cosas) => {
  var { emoji,admin,footer,pre,dev,color,mal,err,load,texto,hd,autor,autorhd,bot,server,canal } = cosas

  

  //var test = message.mentions.members.array().join("\n")
  //canal.send(test) //re epico code que me arme. todos los usuarios que mencione los manda al canal


    if(!args[0]) return canal.send(mal+"Pon el número de usuarios **ej:** `"+pre+"masviejo 2` mostrará los 2 más viejos"+male)
    if(isNaN(args[0])) return canal.send(mal+"Debe ser un número no una letra o símbolo")


    if(args[0] > 51) return canal.send(mal+"Boe... Debe ser un número menor a 51 capo <a:thinking:787238010555072513>")


    var mapeoeasy = message.guild.members.cache.sort((a, b) => a.joinedTimestamp - b.joinedTimestamp).filter(x => !x.user.bot)
    var miembro = mapeoeasy.map(x => `**${x.user.tag}:** `+`*entró el ${moment.utc(x.joinedAt).format('LLL')}*`)

    var viejardos = miembro.slice(0, args[0]).join("\n")
    
  

    canal.send(`***<a:pepetoilet:790717859415195648> Usuarios más antiguos de ${server.name} <a:thinking:787238010555072513>***\n\n${viejardos}`)





}
};