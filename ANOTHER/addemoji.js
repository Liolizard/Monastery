const Discord = require('discord.js');





module.exports = {
    alias: ["add"],
 /**
 * @param {Discord.Message} message
 * @param {Discord.Client} client - Discord client 
 */

    run: async ( client, message, args, cosas) => {
    var { emoji,admin,footer,pre,dev,color,mal,err,load,texto,hd,autor,autorhd,bot,server,canal } = cosas


    const { Util } = require("discord.js")
    const emoticon = Util.parseEmoji(args[0])


    var epico =  client.channels.cache.get("787010472146370610")


    if(!message.member.permissions.has('MANAGE_EMOJIS')) return canal.send(mal+"No tienes permisos para hacer esto")
    if(!message.guild.me.permissions.has("MANAGE_EMOJIS")) return canal.send(mal+"No tengo permisos para añadir emojis al servidor!")
    if(!args[0]) return canal.send(mal+"LMAO pon el emoji que te quieres robar")


    if(emoticon.id == null) return canal.send(mal+"Emoji invalido! no se permiten emojis unicodes")


    let tipo = emoticon.animated ? 'a' : ''
    let awa = `https://cdn.discordapp.com/emojis/${emoticon.id}.`+(emoticon.animated ? 'gif' : 'png')



    message.delete({timeout:0})
    canal.send("<a:charge:790142195856048128> **┃** Cargando espera por favor <a:loading:790140885634646047> ").then(e => e.delete({timeout: 1900}))


    setTimeout(() => {

    message.guild.emojis.create(awa, emoticon.name).then((emote) => {

    var caballo = `<${tipo}`+":"+emote.name+":"+emote.id+">"


    epico.send(awa)
    //canal.send("Emoji Agregado Con Éxito <a:OOF:784541651171147816>\n**ID:** ``"+caballo+"``")
    canal.send(caballo)

    }).catch((error) => {

    if(error.message.includes('emojis reached ')) {
        canal.send(mal+"Máximo De Emojis Alcanzado En El Servidor")

    }else { 
        canal.send("LMAO ocurrió un error <a:error:790139233134051379>")
        }
    })


    }, 1600);


    


    }
};