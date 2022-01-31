const Discord = require('discord.js');
const marsnpm = require("marsnpm");



module.exports = {
    alias: ["abrazar"],
 /**
 * @param {Discord.Message} message
 * @param {Discord.Client} client - Discord client 
 */

    run: async ( client, message, args, cosas) => {
    var {prefijo, color, mal, autor, footer, hd, sv, sis, usuario, tio, rick, canal} = cosas



    if(!args[0]) return canal.send(mal+"Debes mencionar a alguien! <a:pepetoilet:790717859415195648>")
    if(!usuario) return canal.send(mal+"no pude encontrar a ese usuario <:ah:784588613383749642>")

    var papa = message.member.id || message.author.id
    var hijo = usuario.id || usuario.user.id
    var esbot = usuario.user.bot ? usuario.user.id : "760866582787260477" 
    var morty = usuario.nickname || usuario.user.username

    if(hijo === tio) return canal.send(mal+"grasias pero no hace falta :c <:fallesi:784684162112028694>")
    if(hijo == esbot) return canal.send(mal+"hemm <a:PatoSpin:784648850895798292> no puedes abrazar un bot <:Medas:784649057351368705>")


    var attach = await marsnpm.hug()
    //const attach = new Discord.MessageAttachment(enlace, "nombre.png")

    if(hijo === papa) {

        const embed = new Discord.MessageEmbed()
        .setTitle(`**Omega lol** le ha dado un abrazo a **${morty}** `)
        .setImage(attach)
        .setColor(color)
        .setFooter(`${autor.username} ia no estés triste :c`, "https://cdn.discordapp.com/emojis/784666252157255730.png?v=1")
        .setTimestamp()
        return canal.send(embed)
    }


    const embed = new Discord.MessageEmbed()
    .setTitle(`**${rick}** abrazó a **${morty}**`)
    .setImage(attach)
    .setColor(color)
    .setFooter(`pedido por ${autor.username} Turutu`, footer)
    .setTimestamp()

    canal.send(embed)



    }
}