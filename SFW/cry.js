const Discord = require('discord.js');
const marsnpm = require("marsnpm");




module.exports = {
    alias: ["llorar","llora","sad","sadness"],
 /**
 * @param {Discord.Message} message
 * @param {Discord.Client} client - Discord client 
 */

    run: async ( client, message, args, cosas) => {
    var {prefijo, color, mal, autor, footer, hd, sv, sis, usuario, tio, rick, canal} = cosas


    var attach = await marsnpm.cry()

    let pias = ["<:cowboy:789917995341709353><a:crying:789918111620268103>","<:cowboy:789917995341709353><:tristeza:789918142301732885>"]
    var em = pias[Math.floor(Math.random() * pias.length)]

    const embedxd = new Discord.MessageEmbed()
    .setDescription(`**${rick} se ha puesto ha llorar** ${em}`)
    .setImage(attach)
    .setColor(color)
    .setFooter(`pedido por ${autor.username} Turutu`, footer)
    .setTimestamp()

    
    if(!args[0]) return canal.send(embedxd)
    if(!usuario) return canal.send(embedxd)

    var papa = message.member.id || message.author.id
    var hijo = usuario.id || usuario.user.id
    var morty = usuario.nickname || usuario.user.username

    if(hijo === papa) return canal.send(embedxd)
    if(hijo === tio) return canal.send(mal+"**pq quieres llorar por mi culpa :c <:fallesi:784684162112028694>**")


    const embed = new Discord.MessageEmbed()
    .setDescription(`**${rick} está llorando por** <:fluched:792163271599325224> **${morty}** ${em}`)
    .setImage(attach)
    .setColor(color)
    .setFooter(`pedido por ${autor.username} Turutu`, footer)
    .setTimestamp()
    canal.send(embed)



    }
}