const Discord = require('discord.js');




module.exports = {
    alias: ["sugerir","sugerencia"],
 /**
 * @param {Discord.Message} message
 * @param {Discord.Client} client - Discord client 
 */

  run: async ( client, message, args, cosas) => {
  var {prefijo, color, fechas, mal, mad, registros, server, bot, autor, autorhd, hd, canal} = cosas


	let text = args.join(" ")


    if(!args[0]) {
      canal.send(mal+"Debes escrbir algo para enviarlo como sugerencia") 
      return message.delete({timeout:4500})
    }
    if(text.length < 5) {
      canal.send(mal+"Tu sugerencia debe ser más larga para enviarla. Mínimo 5 letras")
      return message.delete({timeout:4500})
		}
    if(text.length >= 1500) {
      canal.send(mal+"Comediante el pibe La sugerencia no puede superar las 1500 letras")
      return message.delete({timeout:4500})
    }
  


    let set1 = await canal.send("<a:checked:787553161698738188> `┃` ** Tu sugerencia fué enviada correctamente**")
    canal.send("https://cdn.discordapp.com/emojis/769368931118088242.png?v=1")

  

    const sugerencia = new Discord.MessageEmbed()
    .setAuthor(autor.tag, autorhd)
    .setDescription(text)
    .setColor(color)
    .setFooter(server.name)
    .setTimestamp()
  
  
    let msg = await client.channels.cache.get("792202287346352148").send(sugerencia);
    msg.react("788522165736702042")
    msg.react("788522104680742962")
  


    set1.delete({timeout:12000})
    message.delete({timeout:10000})


  .catch((error) => {
    if(error.message.includes("Unknown")) {
      return registros.send("<a:mal:787234344653684786> `┃` *No se pudo eliminar un mensaje del bot*")
    }
    else return registros.send("<a:mal:787234344653684786> `┃` *Ocurrió un error desconocido")
  });
  

  
  

  
  }
};