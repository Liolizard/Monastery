const Discord = require('discord.js');
const loveyou = require("loveyou-api");





module.exports = {
  alias: ["culo"],
 /**
  * @param {Discord.Message} message
  * @param {Discord.Client} client - Discord client 
  */
  run: async function ( client, message, args, cosas) {
  let {  err,errore,canal, hd, autor, autorhd, bot, nsfw, respondern, arrayn, linkn, color } = cosas


  

  if(!nsfw) {

    if(rptn == arrayn[2] || rptn == arrayn[3] ) {
      const activar = new Discord.MessageAttachment(linkn, "activar_nsfw.gif")
      await canal.send(rptn, activar)
      message.delete({timeout:2000})
      return;
    } else {
      await canal.send(rptn)
      message.delete({timeout:2000})
      return;
      }
    }



  var link = await loveyou.nsfw("ass")
  

  var maduro = ["https://cdn.discordapp.com/emojis/783426785408712754.gif?v=1","https://cdn.discordapp.com/emojis/787238010555072513.gif?v=1","https://cdn.discordapp.com/emojis/787209048125603841.gif?v=1","https://cdn.discordapp.com/emojis/787209098135339039.gif?v=1","https://cdn.discordapp.com/emojis/787552948129234944.gif?v=1","https://cdn.discordapp.com/attachments/766745379256533062/771526236073754674/5082_dancecoolkids.gif","https://cdn.discordapp.com/emojis/787211460669210634.gif?v=1"]
  let momentoXD = maduro[Math.floor(Math.random() * maduro.length)]



  const embed = new Discord.MessageEmbed()
  .setDescription("**Aquí tienes tienes algunos GIF**")
  .setImage(link)
  .setColor(color)
  .setFooter(`Free nudes for you  ${autor.username} <3`, momentoXD)

  canal.send(embed)


  .catch(async(error) => {

    if(error.message.includes("Missing")) return canal.send(err+"No tengo permisos para eliminar mensajes "+errore)
    if(error.message.includes("Uknown")) return registros.send(err+"*no pude eliminar un mensaje en* **"+server.name+"**")

    else return canal.send(err+"LMAO Ocurrió un error inesperado <:pansive:790352925888872448>")
})



  }
};