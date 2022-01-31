const Discord = require('discord.js');

const db = require("megadb")
const welcomes = new db.crearDB("Bienvenidas");




module.exports = {
  alias: ["bienvenidas","bienvenida"],

  run: async function ( client, message, args, cosas) {
let { prefijo, mal, canal, server, autor, bot } = cosas



  const malardo = new Discord.MessageEmbed()
  .setAuthor(bot.username+" ┃ Error", bot.displayAvatarURL())
  .addField("Como usar las bienvenidas","Para establecer el canal de bienvenidas en el servidor usa\n **MODO DE USO: **`"+prefijo+"welcome establecer #canal`\n\nPara ver un ejemplo de las bienvenidas en el servidor usa\n**MODO DE USO: **`"+prefijo+"welcome ejemplo`")
  .setColor("RANDOM")



  if(!args[0]) return canal.send(malardo)
  //if(isNaN(args[0])) return canal.send(malardo)
  var opcion = args[0].toLowerCase()




if(opcion == "establecer") {


  if(!args[1]) canal.send("**MODO DE USO: **`"+prefijo+"welcome establecer #canal")
  let busc = args[1].toLowerCase()


  let wcanal = server.channels.resolve(args[1]) || server.channels.cache.find(x => x.name.toLocaleLowerCase() == `${busc}`) || message.mentions.channels.first()


  if(!wcanal) return canal.send(mal+"No pude encontrar ese canal en el servidor! menciona uno que exista")
  welcomes.establecer(server.id, wcanal.id)


  await welcomes.obtener(server.id).then(c => canal.send("<a:checked:793276140013355053> ***Las bienvenidas se anunciarán en*** <#"+c+">"));

}


if(opcion == "ejemplo") {


  if(!welcomes.tiene(server.id)) return canal.send(mal+"Las bienvenidas no estan activadas en el servidor. no puedo dar ejemplos >_<")
  let c_base = await welcomes.obtener(server.id)


  //let bienvenidas = client.channels.cache.get(c_base)

  //if(!bienvenidas) return canal.send(mal+"No encontré el canal de las bienvenidas pa. Vuelve a establecer uno")




  message.delete({timeout: 4500})
  canal.send("<a:checked:793276140013355053> ***Sé envió un ejemplo al canal <#"+c_base+"> de bienvenida***").then(q => q.delete({timeout: 5000}))



  client.emit("guildMemberAdd", message.member );

}






}
};