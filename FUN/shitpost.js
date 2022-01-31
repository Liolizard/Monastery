const Discord = require('discord.js');
const fs = require("fs")




module.exports = {
    alias: ["shit","chitpost"],
 /**
 * @param {Discord.Message} message
 * @param {Discord.Client} client - Discord client 
 */

    run: async ( client, message, args, cosas) => {
    var {prefijo,err,errore, color,emoji, fechas, mal, mad, registros, server, bot, autor, autorhd, hd, canal,} = cosas



    client.memesURL = JSON.parse(require('fs').readFileSync('./multimedia/shitpost.json', 'utf8'))
    let attach = client.memesURL[Math.floor(Math.random() * client.memesURL.length)]

    //const attach = new Discord.MessageAttachment(shitpost, "si le se al chitpost.png")



    const embed = new Discord.MessageEmbed()
    .setTitle(`Tu shitpost diario rey ${emoji}`)
    .setImage(attach)
    .setColor(color)
    .setFooter(`pedido por ${autor.username}`, "https://cdn.discordapp.com/emojis/788860835828072459.gif?v=1")
    .setTimestamp()


    canal.send(embed)


    .catch(async(error) => {

        if(error.message.includes("Missing")) return canal.send(err+"No tengo permisos para eliminar mensajes "+errore)
        if(error.message.includes("Uknown")) return registros.send(err+"*no pude eliminar un mensaje en* **"+server.name+"**")
    
        else return canal.send(err+"LMAO Ocurrió un error inesperado <:pansive:790352925888872448>")
    })


    }
};