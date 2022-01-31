const Discord = require('discord.js');




module.exports = {
    alias: ["simp","simprate"],
 /**
 * @param {Discord.Message} message
 * @param {Discord.Client} client - Discord client 
 */

    run: async ( client, message, args, variables) => {
    var {prefijo,err,errore, color, fechas, mal, usuario, mad, registros, server, bot, autor, autorhd, hd, canal, txt} = variables


    var miembro = usuario
   
    if(!args[0]) miembro = message.member
    if(!usuario) miembro = message.member
  
  
    let simp = ["11%", "13%", "15%", "17%", "19%", "21%", "23%", "25%", "27%", "29%", "31%", "33%", "35%", "51%","53%",
    "55%", "57%", "58%", "59%", "61%", "63%", "65%", "67%", "69%", "71%", "73%", "75%", "77%", "79%", "81%", "83%", "85%",
    "87%", "89%", "91%", "93%", "95%", "97%", "99%", "101%", "101%", "101%", "51%", "51%", "51%", "17%", "17%", "17%", ]
      

    let bandera = ["https://cdn.discordapp.com/emojis/760721224346763284.gif?v=1","https://cdn.discordapp.com/attachments/766745379256533062/790054179628253184/simps.png"]

  
    var wallpaper = bandera[Math.floor(Math.random() * bandera.length)]
    var kuansimp = simp[Math.floor(Math.random() * simp.length)]
  
  
    let colors = miembro.displayHexColor
    if(colors == "#000000") colors = "RANDOM"
      
  
    const embed = new Discord.MessageEmbed()
    .setAuthor("El medidor SIMP de "+bot.username, "https://cdn.discordapp.com/emojis/787211460669210634.gif?v=1")
    .addField(`Porcentaje gay de ${miembro.user.username}`, `El pana ${miembro.user.username} es:\nun **${kuansimp}** simp <a:dance:788221258092380201>\n\n`)
    .setThumbnail(wallpaper)
    .setColor(colors)
    .setFooter("Comando pedido por "+autor.username, autorhd)
      
    canal.send(embed)
    


    .catch(async(error) => {

        if(error.message.includes("Missing")) return canal.send(err+"No tengo permisos para eliminar mensajes "+errore)
        if(error.message.includes("Uknown")) return registros.send(err+"*no pude eliminar un mensaje en* **"+server.name+"**")
    
        else return canal.send(err+"LMAO Ocurrió un error inesperado <:pansive:790352925888872448>")
    })
      




    }
};