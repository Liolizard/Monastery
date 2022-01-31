const Discord = require('discord.js');




module.exports = {
  alias: ["ayuda"],
 /**
 * @param {Discord.Message} message
 * @param {Discord.Client} client - Discord client 
 */

  run: async ( client, message, args, cosas) => {
  var { emoji,male,errore,prefijo,footer,pre,dev,color,mal,err,load,texto,hd,autor,autorhd,bot,server,canal } = cosas


	if(server.id !== "739934672263446679") return canal.send("<:jajant:790894259779010560>")


	const embed = new Discord.MessageEmbed()
	.setAuthor(bot.tag+" ┃ 🥡 ayuda")
	.setDescription("**Hola LMAO soy el bot oficial de este servidor😈💅**\n\nUsa `"+pre+"commands` para ver lo que puedo hacer <a:1songlases:792185324838846474>")
	.setThumbnail(client.user.displayAvatarURL())
	.setFooter("Suscribete al canal de skizZ en YT 🤟",footer)
	.setColor(message.member.displayHexColor)
	.setTimestamp()

	canal.send(embed)



	}
};