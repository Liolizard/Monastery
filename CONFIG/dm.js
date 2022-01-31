const Discord = require('discord.js');




module.exports = {
    alias: ["m"],
 /**
 * @param {Discord.Message} message
 * @param {Discord.Client} client - Discord client 
 */

    run: async ( client, message, args, cosas) => {
    var { emoji,male,errore,prefijo,footer,pre,dev,color,mal,err,load,texto,hd,autor,autorhd,bot,server,canal } = cosas


	if(!message.member.hasPermission("MANAGE_MESSAGES")) return;


    var responder = canal

    let veneco = client.users.resolve(args[0]) || message.mentions.users.first() || client.users.cache.filter(x => !x.dmChannel && !x.bot).find(x => x.discriminator == args[0] || x.username == args[0])
    let txt = args.slice(1).join(" ")


    if(!args[0]) {
    responder.send("LMAO escribe la ID o el TAG del usuario").then(e => e.delete({ timeout: 4500 }))
    message.delete({timeout: 3500}) 
    }

    if(!args[1]) { 
    responder.send("LMAO que le envio a ese usuario").then(e => e.delete({ timeout: 4500 }))
    message.delete({timeout: 3500}) }

    if(!veneco) return canal.send(mal+"No encontre a ese pibe").then(e => e.delete({ timeout: 4500 }))

    message.delete({timeout: 0})
    client.channels.cache.get("791845258434314320").send("***DM enviado a*** <@"+veneco.id+">")
    veneco.send(txt)

  .catch(error => {
    
    if(error.code == Discord.Constants.APIErrors.CANNOT_MESSAGE_USER) {
      responder.send("<a:no:768278394051362846>`┃`**Ese Usuario Tiene Los Mensajes Directos Desactivados**").then(e => e.delete({ timeout: 4500 })) 
    } else {
      responder.send("Ocurrió un error <a:error:768518721211334676>\n ```"+error+"```");
    }
  })
    



    }
};