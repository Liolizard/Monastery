const Discord = require('discord.js');
const clients = require('alexflipnote.js');
const alex = new clients("72m_5OMh83KTCCulbgALlTWaS1gFz_tuV4mrkk43");




module.exports = {
  alias: ["communism","communist","comunism"],
 /**
 * @param {Discord.Message} message
 * @param {Discord.Client} client - Discord client 
 */

  run: async ( client, message, args, cosas) => {
  var { emoji,errore,footer,pre,dev,color,mal,err,usuario,load,texto,hd,autor,autorhd,bot,server,canal } = cosas



  if(!args[0]) {

    var usuari = autor.displayAvatarURL({format: "png", dynamic: false, size: 4096})
    var pornhub = await alex.image.communist({image: usuari})
    const attach = new Discord.MessageAttachment(pornhub, "gay.png")

    return canal.send(attach)
    
  }



  if(!usuario) return canal.send(mal+"Error no pude encontrar a ese usuario "+mad)
  let user = usuario.user.displayAvatarURL({format: "png", dynamic: false, size: 4096})


  var pornhub = await alex.image.communist({image: user})
  const attach = new Discord.MessageAttachment(pornhub, "communist.png")


  canal.send(attach)


  .catch(async(error) => {

    if(error.message.includes("Missing")) return canal.send(err+"No tengo permisos para eliminar mensajes "+errore)
    if(error.message.includes("Uknown")) return registros.send(err+"*no pude eliminar un mensaje en* **"+server.name+"**")

    else return canal.send(err+"LMAO Ocurrió un error inesperado <:pansive:790352925888872448>")
})

  }
}