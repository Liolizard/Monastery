const Discord = require('discord.js');
const clients = require('alexflipnote.js');
const alex = new clients("72m_5OMh83KTCCulbgALlTWaS1gFz_tuV4mrkk43");




module.exports = {
  alias: ["magia"],
 /**
 * @param {Discord.Message} message
 * @param {Discord.Client} client - Discord client 
 */

  run: async ( client, message, args, cosas) => {
  var { emoji,errore,footer,pre,dev,color,mal,err,usuario,load,texto,hd,autor,autorhd,bot,server,canal } = cosas


    let pollo = message.member

  if(usuario) pollo = usuario
  let globo = pollo.user.displayAvatarURL({format: "png", dynamic: false, size: 4096})


  var magik = await alex.image.magik({image: globo})
  const attach = new Discord.MessageAttachment(magik, "magik.png")


  canal.send(attach)



  .catch(async(error) => {

    if(error.message.includes("Missing")) return canal.send(err+"No tengo permisos para eliminar mensajes "+errore)
    if(error.message.includes("Uknown")) return registros.send(err+"*no pude eliminar un mensaje en* **"+server.name+"**")

    else return canal.send(err+"LMAO Ocurrió un error inesperado <:pansive:790352925888872448>")
})



  }
}