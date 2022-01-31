const Discord = require('discord.js');
const marsnpm = require("marsnpm");




module.exports = {
    alias: ["disparar"],
 /**
 * @param {Discord.Message} message
 * @param {Discord.Client} client - Discord client 
 */

    run: async ( client, message, args, cosas) => {
    var {prefijo, color, mal, autor, footer, hd, sv, sis, usuario, canal} = cosas


    
    if(!args[0]) return canal.send(mal+"Debes mencionar a alguien! <a:pepetoilet:790717859415195648>")
    if(!usuario) return canal.send(mal+"no pude encontrar a ese usuario <:ah:784588613383749642>")

    var papa = message.member.id || message.author.id
    var hijo = usuario.id || usuario.user.id
    var tio = client.user.id
    var esbot = usuario.user.bot ? usuario.user.id : "760866582787260477" 
    var rick = message.member.nickname || message.member.user.username
    var morty = usuario.nickname || usuario.user.username

    if(hijo === papa) return canal.send(mal+"No te puedes disparate tu mismo <a:thinking:787238010555072513>")
    if(hijo === tio) return canal.send(mal+"nao nao no puedes dispararme pq? <:fallesi:784684162112028694>")
    if(hijo == esbot) return canal.send(mal+"pq? <a:PatoSpin:784648850895798292> no puedes dispararle a un bot <:Medas:784649057351368705>")


    var attach = await marsnpm.shoot()
    //const attach = new Discord.MessageAttachment(enlace, "nombre.png")


    const embed = new Discord.MessageEmbed()
    .setTitle(`**${rick} le ha disparado a ${morty}**`)
    .setImage(attach)
    .setColor(color)
    .setFooter(`pedido por ${autor.username} Turutu`, footer)
    .setTimestamp()

    canal.send(embed)



    }
}