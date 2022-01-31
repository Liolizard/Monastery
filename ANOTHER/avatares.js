const Discord = require('discord.js');





module.exports = {
   alias: ["avatars","avatarall"],
 /**
 * @param {Discord.Message} message
 * @param {Discord.ReactionCollector} collector
 * @param {Discord.Client} client - Discord client 
 */

   run: async ( client, message, args, cosas) => {
   var { emoji,fechas,pre,color,usuario,mal,err,load,texto,hd,autor,autorhd,bot,server,canal } = cosas




   var permisos = message.guild && message.channel.permissionsFor(message.client.user).has('MANAGE_MESSAGES') 
   var wapo = ["https://cdn.discordapp.com/emojis/790350627624189992.gif?v=1","https://cdn.discordapp.com/emojis/790351670768304169.gif?v=1","https://cdn.discordapp.com/emojis/790386384522575902.gif?v=1","https://cdn.discordapp.com/emojis/790386704217014296.gif?v=1","https://cdn.discordapp.com/emojis/790350676633845760.gif?v=1","https://cdn.discordapp.com/emojis/790350782943330304.gif?v=1","https://cdn.discordapp.com/emojis/790351081926164490.gif?v=1"]
   var footer = wapo[Math.floor(Math.random() * wapo.length)]

   var cuantosmiembros = `${message.guild.members.cache.filter(x => !x.user.bot).size}`
   var cuantosnitro = `${message.guild.members.cache.filter(x => x.user.displayAvatarURL({dynamic: true}) && x.user.displayAvatarURL({dynamic: true}).endsWith(".gif")).size}`



if(!args[0]) {

async function avatares(message, max) {
   let i = 0;
   let mel =  message.guild.members.cache.filter(x => !x.user.bot).array()

   i = 0;
    const embed = new Discord.MessageEmbed()
    .setTitle("Avatar de "+mel[i].user.tag)
    .setDescription(`[**Avatar URL**](${mel[i].user.displayAvatarURL(hd)})`)
    .setImage(mel[i].user.displayAvatarURL(hd))
    .setColor(mel[i].displayHexColor)
    .setFooter(`Usuario ${i + 1} / ${max}`);

    var msg = await canal.send(embed);
    await msg.react('<a:2_:790138381887340575>');
    await msg.react('<a:1_:790138359444013067>');


    const filter = (reaction, user) => {
        return (['790138359444013067', '790138381887340575'].includes(reaction.emoji.id) && user.id === message.author.id);
    };        
    const collector = msg.createReactionCollector(filter, { idle: 15000 });

    
        collector.on('collect', async (reaction, user) => {
        if(permisos) await reaction.users.remove(user.id);

        if (reaction.emoji.id === '790138359444013067') {                                
        i++; if (i > max - 1) i = 0;
        embed.setTitle("Avatar de "+mel[i].user.tag)
        embed.setDescription(`[**Avatar URL**](${mel[i].user.displayAvatarURL(hd)})`)
        embed.setImage(mel[i].user.displayAvatarURL(hd))
        embed.setColor(mel[i].displayHexColor)
        embed.setFooter(`Avatar del Usuario ${i + 1} / ${max}`, footer);
        msg.edit(embed)

        } else {

        i--; if (i < 0) i = max - 1;
        embed.setTitle("Avatar de "+mel[i].user.tag)
        embed.setDescription(`[**Avatar URL**](${mel[i].user.displayAvatarURL(hd)})`)
        embed.setImage(mel[i].user.displayAvatarURL(hd))
        embed.setColor(mel[i].displayHexColor)
        embed.setFooter(`Avatar del Usuario ${i + 1} / ${max}`, footer);
        msg.edit(embed)
        }
    });
        
    collector.on('end', () => {
        if (permisos) {
        msg.reactions.removeAll();
        msg.edit("***<:nimodo:790354317969850378> El tiempo expiró <a:drive:790352760477974528>***", {embed: null})
        }
    });

}
avatares(message, cuantosmiembros)
}


if(args[0] == "nitro") {

async function avatares_nitro(message, max) {
    let i = 0;
    let mel =  message.guild.members.cache.filter(x => x.user.displayAvatarURL({dynamic: true}) && x.user.displayAvatarURL({dynamic: true}).endsWith(".gif")).array()
 
    i = 0;
     const embed = new Discord.MessageEmbed()
     .setTitle("Avatar de "+mel[i].user.tag)
     .setDescription(`[**Avatar URL**](${mel[i].user.displayAvatarURL(hd)})`)
     .setImage(mel[i].user.displayAvatarURL(hd))
     .setColor(mel[i].displayHexColor)
     .setFooter(`Usuario ${i + 1} / ${max}`);
 
     var msg = await canal.send(embed);
     await msg.react('<a:2_:790138381887340575>');
     await msg.react('<a:1_:790138359444013067>');
 
 
     const filter = (reaction, user) => {
         return (['790138359444013067', '790138381887340575'].includes(reaction.emoji.id) && user.id === message.author.id);
     };        
     const collector = msg.createReactionCollector(filter, { idle: 20000 });
 
     
         collector.on('collect', async (reaction, user) => {
         if(permisos) await reaction.users.remove(user.id);
 
         if (reaction.emoji.id === '790138359444013067') {                                
         i++; if (i > max - 1) i = 0;
         embed.setTitle("Avatar de "+mel[i].user.tag)
         embed.setDescription(`[**Avatar URL**](${mel[i].user.displayAvatarURL(hd)})`)
         embed.setImage(mel[i].user.displayAvatarURL(hd))
         embed.setColor(mel[i].displayHexColor)
         embed.setFooter(`Avatar del Usuario ${i + 1} / ${max}`, footer);
         msg.edit(embed)
 
         } else {
 
         i--; if (i < 0) i = max - 1;
         embed.setTitle("Avatar de "+mel[i].user.tag)
         embed.setDescription(`[**Avatar URL**](${mel[i].user.displayAvatarURL(hd)})`)
         embed.setImage(mel[i].user.displayAvatarURL(hd))
         embed.setColor(mel[i].displayHexColor)
         embed.setFooter(`Avatar del Usuario ${i + 1} / ${max}`, footer);
         msg.edit(embed)
         }
     });
         
     collector.on('end', () => {
         if (permisos) {
         msg.reactions.removeAll();
         msg.edit("***<:nimodo:790354317969850378> El tiempo expiró <a:drive:790352760477974528>***", {embed: null})
         }
     });
 
    }   
    avatares_nitro(message, cuantosnitro)
}






   }
};
