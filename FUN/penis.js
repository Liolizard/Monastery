const Discord = require('discord.js');




module.exports = {
    alias: ["penisrate"],
 /**
 * @param {Discord.Message} message
 * @param {Discord.Client} client - Discord client 
 */

  run: async ( client, message, args, cosas) => {
  var { usuario,emoji,admin,err,errore,footer,errore,dev,color,mal,err,load,texto,hd,autor,autorhd,bot,server,canal } = cosas



    var miembro = usuario
   
    if(!args[0]) miembro = message.member
    if(!usuario) miembro = message.member


    let tula = [ "0.5","4","1","3","5","7","9","11","13","15","17","19","21","23","25" ]
    let randomTula = tula[Math.floor(Math.random() * tula.length)]


    let colors = miembro.displayHexColor
    if(colors == "#000000") colors = "RANDOM"



    const embed = new Discord.MessageEmbed()
    .setAuthor("El medidor de TULAS de "+bot.username, "https://cdn.discordapp.com/emojis/787211460669210634.gif?v=1")
    .addField(`la pija de ${miembro.user.username}`, `a ${miembro.user.username} la pija le mide: \n apenas **${randomTula}cm** <a:worm:787211492285612122>`)
    .setThumbnail("https://cdn.discordapp.com/emojis/787238010555072513.gif?v=1")
    .setColor(colors)
    .setFooter("Comando pedido por "+autor.username, autorhd)
    

    canal.send(embed)

    .catch(async(error) => {

      if(error.message.includes("Missing")) return canal.send(err+"No tengo permisos para eliminar mensajes "+errore)
      if(error.message.includes("Uknown")) return registros.send(err+"*no pude eliminar un mensaje en* **"+server.name+"**")
  
      else return canal.send(err+"LMAO Ocurrió un error inesperado <:pansive:790352925888872448>")
  })


  }
};