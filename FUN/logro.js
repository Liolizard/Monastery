const Discord = require('discord.js');






module.exports = {
    alias: ["minecraftlogro","minecraft"],
 /**
 * @param {Discord.Message} message
 * @param {Discord.Client} client - Discord client 
 */

    run: async ( client, message, args, cosas) => {
    var {prefijo, err, errore,color, fechas, mal, mad, registros, male, bot, autor, autorhd, hd, canal } = cosas


    var setsocon = [`${mal}LMAO debes poner el texto del logro ej: \`${prefijo}logro don comedia\`${male}`, `${mal}LMAO debes poner algo para el logro de minecraft ${male}\n\n**MODO DE USO:** \`${prefijo}logro **texto**\` `]
    var rpt_mal = setsocon[Math.floor(Math.random() * setsocon.length)]

    var logro = args.join("+")

    if(!args[0]) return canal.send(rpt_mal)
    if(logro.length > 23) return canal.send(mal+"marikong el logro no puede tener más de 24 carácteres")
    if(logro.length < 1) return canal.send(mal+"Bruh el logro de minecraft debe llevar más de 2 letras")
    

    canal.send("<a:load:790139518405181480> `┃` Cargando Por favor espera <a:loading:790140885634646047>").then(e => e.delete({timeout:1500}))


    const objeto = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39"]
    var icono = objeto[Math.floor(Math.random() * objeto.length)]



    var attach = `https://www.minecraftskinstealer.com/achievement/a.php?i=${icono}&h=Logro%20desbloqueado!&t=${logro}`
    //const attach = new Discord.MessageAttachment(enlace, "Logro.png")


    const minecraftlogro = new Discord.MessageEmbed()
    .setTitle("Tu logro rey <a:wii:790142338282160168>")
    .setImage(attach)
    .setColor(color)
    .setFooter("un logro bien fresco", "https://cdn.discordapp.com/emojis/788860835828072459.gif?v=1")
    .setTimestamp()
    
    canal.send(minecraftlogro)

    
    .catch(async(error) => {

        if(error.message.includes("Missing")) return canal.send(err+"No tengo permisos para eliminar mensajes "+errore)
        if(error.message.includes("Uknown")) return registros.send(err+"*no pude eliminar un mensaje en* **"+server.name+"**")
    
        else return canal.send(err+"LMAO Ocurrió un error inesperado <:pansive:790352925888872448>")
    })


    }
};
