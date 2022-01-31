const Discord = require('discord.js');
const marsnpm = require("marsnpm");




module.exports = {
    alias: ["matar"],
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

    if(hijo === papa) return canal.send(mal+"No te puedes matar tu mismo :c <a:thinking:787238010555072513>")
    if(hijo === tio) return canal.send(mal+"nao nao no pq me vas a matar? :c <:fallesi:784684162112028694>")
    if(hijo == esbot) return canal.send(mal+" pq¿? <a:PatoSpin:784648850895798292> no puedes matar a un bot <:Medas:784649057351368705>")


    var attach = await marsnpm.kill()
    //const attach = new Discord.MessageAttachment(enlace, "nombre.png")


    const embed = new Discord.MessageEmbed()
    .setDescription(`**${rick} a matado a ${morty}**`)
    .setImage(attach)
    .setColor(color)
    .setFooter(`pedido por ${autor.username} Turutu`, footer)
    .setTimestamp()

    canal.send(embed)



    }
}