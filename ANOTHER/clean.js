const Discord = require('discord.js');






module.exports = {
  alias: ["purge","clean","clear","prune"],
 /**
 * @param {Discord.Message} message
 * @param {Discord.Client} client - Discord client 
 */

  run: async ( client, message, args, cosas) => {
  var { emoji,errore,footer,pre,dev,color,mal,err,usuario,load,texto,sv,bot,server,canal } = cosas


    let m = message.member
    let dedeo = ["<a:nais:790351507521667104>","<a:nais:790351523863199814>","<a:nais:790351731321208842>","<:caballoroso:790352942049787946>"]
    let tostao = [`${mal}Debes poner el número de mensajes a eliminar. **ej:** \`${pre}clean 10 @calamardo\` ${emoji}`,`${mal}Mal no pusiste la cantidad de mensajes a eliminar o el usuario ${emoji}\n**Modo de uso:** \`${pre}clean 10 @calamardo\` **O también:** \`${pre}clean 20\` `]
    var masimo = tostao[Math.floor(Math.random() * tostao.length)]
    var emo = dedeo[Math.floor(Math.random() * dedeo.length)]



    if(!canal.permissionsFor(message.member).toArray().includes("MANAGE_CHANNELS") || !message.member.hasPermission("MANAGE_CHANNELS")) {
        return canal.send(err+"Boe no tienes permisos para borrar mensajes"+errore)
    }
    if(!canal.permissionsFor(bot).toArray().includes("MANAGE_MESSAGES") || !m.hasPermission("MANAGE_MESSAGES")) {
        return canal.send(err+"LMAO no tengo permisos para borrar mensajes. asegurate de que los tenga "+errore)
    }
    if(!args[0]) {
        return canal.send(masimo)
    }
    


  if(!args[1]) {
        
    if(isNaN(args[0])) return canal.send(mal+"Mal debe ser un número no una letra ni un símbolo")
        
    let burras = parseInt(args[0])
    let number = burras+1

    if(number > 100 || number <= 2) return canal.send(err+"El valor es inválido. Asegurate que sea un número menor a 100 "+errore)

    const mensajes = await message.channel.messages.fetch({limit: 100})     
    var msg = mensajes.filter(x => !x.attachments.size && !x.pinned && !x.system)

    if((msg).array().length < 1)return canal.send(err+"No hay mensajes en el canal para eliminar "+errore)
    const eliminados = msg.array().slice(0, number).length


    canal.bulkDelete((msg).array().slice(0, number), true).then(m => {
    canal.send(`<a:wii:790142338282160168> Se eliminaron con exito **(${eliminados})** mensajes ${emo}`)
    return;
  })

  .catch(async(error) => {
    if(error.message.includes("Missing")) return canal.send(err+"No tengo permisos para eliminar mensajes "+errore)
    if(error.message.includes("Uknown")) return registros.send(err+"*no pude eliminar un mensaje en* **"+server.name+"**")
    else return canal.send(err+"LMAO Ocurrió un error inesperado <:pansive:790352925888872448>")
  })    
}

if(args[1] == "bot" || args[1] == "bots") {


  if(isNaN(args[0])) return canal.send(mal+"Mal debe ser un número no una letra ni un símbolo")
  let burras = parseInt(args[0])
  let number = burras+1
  if(number > 100 || number <= 2) return canal.send(err+"El valor es inválido. Asegurate que sea un número menor a 100 "+errore)


  
  var bots = message.guild.members.cache.filter(d => d.user.bot).array().map(x => x.id)
  if(!bots) return canal.send(mal+"No encontre ningún bot en el servidor para eliminar sus mensajes! "+errore)


  const mensajes = await message.channel.messages.fetch({limit: 100}) 
  var msg = mensajes.filter(i => i.author.bot)//.array().map.(x => x.id)



  if((msg).array().length < 2)return canal.send(err+`No hay mensajes de Bots para eliminar en el canal! `+errore)
  const eliminados = msg.array().slice(0, number).length


  canal.bulkDelete((msg).array().slice(0, number), true).then(m => {
  canal.send(`<a:wii:790142338282160168> Se eliminaron **(${eliminados})** mensajes de Bots ${emo}`)
  return;
  })


.catch(async(error) => {
  if(error.message.includes("Missing")) return canal.send(err+"No tengo permisos para eliminar mensajes "+errore)
  if(error.message.includes("Uknown")) return registros.send(err+"*no pude eliminar un mensaje en* **"+server.name+"**")
  else return canal.send(err+"LMAO Ocurrió un error inesperado <:pansive:790352925888872448>")
}) 


}

if(args[1] && !["bot", "bots"].includes(args[1])) {

  
  if(isNaN(args[0])) return canal.send(mal+"Mal debe ser un número no una letra ni un símbolo")
  let burras = parseInt(args[0])
  let number = burras+1
  if(number > 100 || number <= 2) return canal.send(err+"El valor es inválido. Asegurate que sea un número menor a 100 "+errore)


  var pis = args.slice(1).join(" ").toLowerCase()
  var user = message.mentions.members.first() || sv.find(x => x.id === args[1] || x.user.tag.toLowerCase() == pis || x.user.username.toLowerCase() === pis || (x.nickname && x.nickname.toLowerCase() == pis) || x.user.discriminator === args[1])


if(pre == `<@!${bot.id}> `) user = message.mentions.members.map(x => x)[1] || sv.find(x => x.id === args[1] || x.user.tag.toLowerCase() == pis || x.user.username.toLowerCase() === pis || (x.nickname && x.nickname.toLowerCase() == pis) || x.user.discriminator === args[1])
	

  if(!user) return canal.send(mal+"LMAO no pude encontrar a ese usuario para eliminar sus mensjaes! "+errore)

  const mensajes = await message.channel.messages.fetch({limit: 100})     
  var msg = mensajes.filter(x => x.author.id == user.id && !x.attachments.size && !x.pinned)

  if((msg).array().length < 2)return canal.send(err+`No hay mensajes de \`${user.user.tag}\` para eliminar! `+errore)
  const eliminados = msg.array().slice(0, number).length


  canal.bulkDelete((msg).array().slice(0, number), true).then(m => {
  canal.send(`<a:wii:790142338282160168> Se eliminaron **(${eliminados})** mensajes de \`${user.user.tag}\` ${emo}`)
  return;
  })


.catch(async(error) => {
  if(error.message.includes("Missing")) return canal.send(err+"No tengo permisos para eliminar mensajes "+errore)
  if(error.message.includes("Uknown")) return registros.send(err+"*no pude eliminar un mensaje en* **"+server.name+"**")
  else return canal.send(err+"LMAO Ocurrió un error inesperado <:pansive:790352925888872448>")
})    
}



  }
}