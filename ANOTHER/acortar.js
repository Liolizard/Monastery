const Discord = require("discord.js")
const shorten = require("isgd");




module.exports = {
  alias: ["acortar","cortar","short","shorten"],
 /**
 * @param {Discord.Message} message
 * @param {Discord.Client} client - Discord client 
 */

  run: async ( client, message, args, cosas) => {
  var { emoji,male,errore,prefijo,footer,pre,dev,color,mal,err,load,texto,hd,autor,autorhd,bot,server,admin,canal } = cosas


	if(!args[0]) return canal.send(mal+"No pusiste el link que debo acortar <:ahre:793608995227041802>")

	var baneable = ["discord.gg","discord.io","discord.app.com"]


	if(baneable.includes(args.join(" ")) && !message.member.hasPermission("MANAGE_SERVER")){ 
		message.delete({timeout:0})
		canal.send(err+"Enlace prohibido! para poder acortarlo debes tener permiso `Gestionar Servidor`")
		return;
	}


if(!args[1]) {

  shorten.shorten(args[0], function(res) {
  if(res.startsWith('Error:'))	{

		message.delete({timeout:0})
		canal.send(err+"La URL es inválida. No la puedo acortar"+errore)
		return;
	}
	const embed = new Discord.MessageEmbed()
	.setTitle("<:web:790850845557391401> URL acortada con exito <:caballoroso:790352942049787946>")
	.addField("Entrada 📥", args.join(" "))
	.addField("Salida 📤", "***"+res+"**")
	.setColor(message.member.displayHexColor)
	.setFooter("Coge tu URL acortada 🥳", footer)
	message.delete({timeout:0})
	return canal.send(embed)
})

} else { 
        
	shorten.custom(args[0], args[1], function(res) {
    if (res.startsWith('Error:')) {

	const embeds = new Discord.MessageEmbed()
	.setTitle("<:web:790850845557391401> URL acortada con exito <:caballoroso:790352942049787946>")
	.addField("Entrada 📥", args.join(" "))
	.addField("Salida 📤", "**"+res+"**")
	.setColor(message.member.displayHexColor)
	.setFooter("Coge tu URL acortada 🥳", footer)
	message.delete({timeout:0})
	return canal.send(embeds)
	} 

	const embedss = new Discord.MessageEmbed()
	.setTitle("<:web:790850845557391401> URL acortada con exito <:caballoroso:790352942049787946>")
	.addField("Entrada 📥", args.join(" "))
	.addField("Salida 📤", "**"+res+"**")
	.setColor(message.member.displayHexColor)
	.setFooter("Coge tu URL acortada 🥳", footer)
	message.delete({timeout:0})
	canal.send(embedss)
	})  
	
}



	}
};