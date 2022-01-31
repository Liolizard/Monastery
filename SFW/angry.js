const Discord = require('discord.js');
const marsnpm = require("marsnpm");




module.exports = {
    alias: ["furia","bravo"],
 /**
 * @param {Discord.Message} message
 * @param {Discord.Client} client - Discord client 
 */

    run: async ( client, message, args, cosas) => {
    var {prefijo, color, mal, autor, footer, hd, sv, sis, usuario, tio, rick, canal} = cosas


    var attach = await marsnpm.angry()

    const embedxd = new Discord.MessageEmbed()
    .setDescription(`**${rick} se ha puesto furioso** <:rage:789684009478651955><:rage:789684009478651955>😡`)
    .setImage(attach)
    .setColor(color)
    .setFooter(`pedido por ${autor.username} Turutu`, footer)
    .setTimestamp()

    
    if(!args[0]) return canal.send(embedxd)
    if(!usuario) return canal.send(embedxd)

    var papa = message.member.id || message.author.id
    var hijo = usuario.id || usuario.user.id
    var morty = usuario.nickname || usuario.user.username

    if(hijo === papa) return canal.send(mal+"**No te puedes golpear tu mismo :c <a:thinking:787238010555072513>**")
    if(hijo === tio) return canal.send(mal+"**pq te pusiste furioso conmigo :c <:fallesi:784684162112028694>**")
    //podriamos poner si hijo == papa retorne el embedxd

    const embed = new Discord.MessageEmbed()
    .setDescription(`**${rick} está furioso con**  <:rage:789684009478651955>**${morty}**<:rage:789684009478651955>😡`)
    .setImage(attach)
    .setColor(color)
    .setFooter(`pedido por ${autor.username} Turutu`, footer)
    .setTimestamp()
    canal.send(embed)



    }
}