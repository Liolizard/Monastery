const Discord = require("discord.js")


const db = require("megadb")
var prefixes = new db.crearDB("prefixes")



module.exports = {
  alias: ["prefijos","prefijo","prefix"],
 /**
 * @param {Discord.Message} message
 * @param {Discord.Client} client - Discord client 
 */

  run: async ( client, message, args, cosas) => {
  var { emoji,male,errore,prefijo,footer,pre,dev,color,mal,err,load,texto,hd,autor,autorhd,bot,server,admin,canal } = cosas



	const prefijos = ["skiz ",'/',`<@!${client.user.id}> `, `<@!702987748893786132> `];



  const embedp = new Discord.MessageEmbed()
	.setAuthor(`SkizZ bot ┃ 🤟 prefijos`, client.user.displayAvatarURL())
	.setDescription(prefijos.join("**┃**").toString()+"\n"+`**┃**${await prefixes.get(message.guild.id) || " "}`)
	.setColor(message.member.displayHexColor)
	.setFooter("Puedes usar cualquiera de esos prefijos 😈💅",footer)
	message.channel.send(embedp)



	}
};