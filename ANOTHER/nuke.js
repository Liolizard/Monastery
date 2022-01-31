const Discord = require('discord.js');




module.exports = {
    alias: ["nuk"],
 /**
 * @param {Discord.Message} message
 * @param {Discord.Client} client - Discord client 
 */

    run: async ( client, message, args, cosas) => {
    var { emoji,admin,footer,pre,dev,color,mal,err,load,texto,hd,autor,autorhd,bot,server,canal } = cosas




    if(!canal.permissionsFor(message.member).toArray().includes("MANAGE_CHANNELS") || !message.member.hasPermission("MANAGE_CHANNELS")) {
    //if(!message.channel.permissionsFor(message.member).toArray().includes("MANAGE_CHANNELS")) {
    //if(!message.member.hasPermission("MANAGE_CHANNELS")) {
              
    canal.send(mal+"No tienes permisos para eliminar y clonar el canal <a:thinking:787238010555072513>").then(e => e.delete({timeout: 4000}))
    return message.delete({timeout:0})
    }
      
        
      
    let link= "https://cdn.discordapp.com/attachments/786627691267751976/787745289523691541/6c485efad8b910e5289fc7968ea1d22f.gif"
    const nuke = new Discord.MessageAttachment(link, "nuke.gif")
      
    let sis = ["<a:thinking:787238010555072513>","<a:master:787209048125603841>","<a:woaw:787552948129234944>","<a:dancing:787211415928438795>","<a:sharkDanceShark:787553361032904734>","<a:modcheck:787552724048412722>"]
    var emoji = sis[Math.floor(Math.random() * sis.length)]
      
      
      
    var posicion = message.channel.position
    var canal_momento_xd = message.channel
      
      
    message.channel.delete()
    canal_momento_xd.clone().then((channel) => {
      
        channel.setPosition(posicion)
      
        channel.send(`***Canal nukeado correctamente ${emoji}***`, nuke)
      
    });
      
      
    //ponerle un colector a nuke XD
   
    

      
    }
};