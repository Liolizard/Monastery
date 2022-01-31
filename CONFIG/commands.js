const Discord = require("discord.js")



module.exports = {
  alias: ["comandos","modules","modulos","command", "comands"],
 /**
 * @param {Discord.Message} message
 * @param {Discord.Client} client - Discord client 
 */

  run: async ( client, message, args, cosas) => {
  var { emoji,male,errore,prefijo,footer,pre,dev,color,mal,err,load,texto,hd,autor,autorhd,bot,server,admin,canal } = cosas


var colorz = message.member.displayHexColor
if(colorz == "#000000") colorz = "RANDOM"


  var adminmodulo = new Discord.MessageEmbed()  
  .setAuthor(bot.tag, "https://cdn.discordapp.com/emojis/787211460669210634.gif?v=1")  
  .setTitle("Lista de todos los Comandos del bot")
  .setDescription("Son todos mis comandos culiado no uses `help [comando]` porque no voy ayudarte zorra🤡. suscribete al canal de skizZ en YT 🤙")
  .addField("DIVERSIÓN🐔", " `sonic`, `logro`, `pornhub`, `shitpost`, `momazo`, `meme`, `comunista`, `gay`, `magik`, `trump`, `howgay`, `howsimp`, `penis`, `reverse`, `sarcastic` ")
	.addField("UTILIDAD🎈", " `avatar`, `avatares`, `acortar`, `jumbo`,`respuestas`, `masviejo`, `suggest` ")
  .addField("ADMIN/MOD🐞", " `clean`, `nuke`, `dm`, `setprefix`, `welcome`, `mirar` ")

  .addField("\u200b", "[**SkizZ en YOUTUBE**](https://www.youtube.com/channel/UCadL7p0XE-N7Ee8WXZtWIuQ) `┃` [**Comunidad**](https://discord.gg/gPRJdN5DJs)\n\n*Reacciona con <a:adelante:788919666306842624> para la sigiente pág*")
  .setThumbnail("https://media.discordapp.net/attachments/769611083098882048/787565562846511104/cubo-rubic.gif?width=434&height=434")
  .setColor(colorz)
  .setFooter("Comando pedido por "+autor.username, autorhd)
  .setTimestamp()


  var modulos = new Discord.MessageEmbed()  
  .setAuthor(bot.tag, "https://cdn.discordapp.com/emojis/787211460669210634.gif?v=1")  
  .setTitle("Lista de todos los Comandos del bot")
  .setDescription("Son todos mis comandos. culiado no uses `help [comando]` porque no voy ayudarte zorra🤡. suscribete al canal de skizZ en YT 🤙")
  .addField("DIVERSIÓN🐔", " `sonic`, `logro`, `pornhub`, `shitpost`, `momazo`, `meme`, `comunista`, `gay`, `magik`, `trump`, `howgay`, `howsimp`, `penis`, `reverse`, `sarcastic` ")
	.addField("UTILIDAD🎈", " `avatar`, `avatares`, `acortar`, `jumbo`,`respuestas`, `masviejo`, `suggest` ")

  .addField("\u200b", "[**SkizZ en YOUTUBE**](https://www.youtube.com/channel/UCadL7p0XE-N7Ee8WXZtWIuQ) **┃**[**Comunidad**](https://discord.gg/gPRJdN5DJs)\n\n*Reacciona con <a:adelante:788919666306842624> para la sigiente pág*")
  .setThumbnail("https://media.discordapp.net/attachments/769611083098882048/787565562846511104/cubo-rubic.gif?width=434&height=434")
  .setColor(colorz)
  .setFooter("Comando pedido por "+autor.username, autorhd)
  .setTimestamp()

  const modulos2 = new Discord.MessageEmbed() 
  .setAuthor(bot.tag, "https://cdn.discordapp.com/attachments/766745379256533062/771526236073754674/5082_dancecoolkids.gif")
  .addField("🌝INTERACCIÓN🌚", " `abrazar`, `besar`, `disparar`, `golpear`, `disparar`, `llorar`, `angry` ")
  .addField("🍑PORNITO💦", " `porn`, `ass`, `boobs`, `blowjob`, `pussy`, `cumshot`")

  .addField("\u200b", "[**Comunidad**](https://discord.gg/gPRJdN5DJs) **┃** [**SkizZ en YOUTUBE**](https://www.youtube.com/channel/UCadL7p0XE-N7Ee8WXZtWIuQ)\n\n*Reacciona con <a:atras:788919600792076308> para volver*")
  .setThumbnail("https://media.discordapp.net/attachments/769611083098882048/787567983592865802/GCNyjJY.gif")
  .setColor(colorz)
  .setFooter("Comando pedido por "+autor.username, autorhd)
  .setTimestamp()

	let perms = message.member.hasPermission("ADMINISTRATOR")

	if(admin.includes(autor.id) || !perms) modulos = adminmodulo

  message.channel.send(modulos).then(async (msg) => {
   await msg.react('<a:atras:788919600792076308>')
   await msg.react('<a:ghost:788919653127815219>')
   await msg.react('<a:adelante:788919666306842624>') 
    
  msg.awaitReactions(async (reaction, user) => {

  if(message.author.id !== user.id){ 
    return reaction.users.remove(user.id)
  }
  	if(reaction.emoji.id === '788919600792076308') {
    	await reaction.users.remove(user.id)
        return msg.edit(modulos) 
    	}   
    if(reaction.emoji.id === '788919653127815219') {
      	return msg.reactions.removeAll() 
    	}
    if(reaction.emoji.id === '788919666306842624') { 
      await reaction.users.remove(user.id)
        return msg.edit(modulos2) 
      }
    else return reaction.users.remove(user.id)

  }), setTimeout(() => msg.reactions.removeAll(), 130000);
  });





  }
};
