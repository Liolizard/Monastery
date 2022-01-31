const Discord = require("discord.js")



module.exports = {
  alias: ["agrandar"],
 /**
 * @param {Discord.Message} message
 * @param {Discord.Client} client - Discord client 
 */

  run: async ( client, message, args, cosas) => {
  var { emoji,male,errore,prefijo,footer,pre,dev,color,mal,err,load,texto,hd,autor,autorhd,bot,server,admin,canal } = cosas



    var perms = message.member.permissions.has('MANAGE_EMOJIS')
    var permisos = message.guild.me.permissions.has("MANAGE_EMOJIS")


    if(!args[0]) return canal.send(mal+"No ingresaste ningún emoji para agrandarlo <:ahre:793608995227041802>\n"+"**MODO DE USO:** `"+prefijo+"jumbo :emoji: `")
		

	const { Util } = require("discord.js")
  const emoticon = Util.parseEmoji(args[0])


    if(emoticon.id == null) return canal.send(mal+"Emoji invalido! no se permiten emojis unicodes")



    let tipo = emoticon.animated ? 'a' : ''
    let awa = `https://cdn.discordapp.com/emojis/${emoticon.id}.`+(emoticon.animated ? 'gif' : 'png')


    message.delete({timeout:0})
		client.channels.cache.get("793640415990644786").send(awa)
    canal.send(awa)


    .catch((error) => {

    if(error.message.includes('emojis reached ')) {
      canal.send(mal+"Máximo De Emojis Alcanzado En El Servidor")

    }else { 
    	canal.send("LMAO ocurrió un error <a:error:768518721211334676>")
    }
    })



	}
};