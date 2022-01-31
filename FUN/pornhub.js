const Discord = require('discord.js');
const clients = require('alexflipnote.js');
const alex = new clients("72m_5OMh83KTCCulbgALlTWaS1gFz_tuV4mrkk43");



module.exports = {
    alias: ["ph"],
 /**
 * @param {Discord.Message} message
 * @param {Discord.Client} client - Discord client 
 */

    run: async ( client, message, args, cosas) => {
    var { emoji,male,errore,prefijo,footer,pre,dev,color,mal,err,load,texto,hd,autor,autorhd,bot,server,canal } = cosas
  
    

    let opt = texto.split(', ');

    var setsocon = [`${mal}LMAO debes poner el texto de la imagen ej: \`${prefijo}ph Jordi, ENP\`${male}`, `${mal}LMAO debes poner algo para el texto de ph ${male}\n\n**MODO DE USO:** \`${prefijo}ph **texto**, **texto2**\` `]
    var rpt_mal = setsocon[Math.floor(Math.random() * setsocon.length)]

    if(!opt[0]) return canal.send(rpt_mal)
    if(!opt[1]) return canal.send(mal+"Te faltó poner el segundo texto, no olvides las `,` **ej:** `omega, lol`")
     


    var pornhub = await alex.image.pornhub({text: opt[0], text2: opt[1]})
    const attach = new Discord.MessageAttachment(pornhub, "pornhub.png")



    canal.send("***<a:thinking:787238010555072513> Tu pornhub mi pana <:exited:788860835828072459>***", attach)

    .catch(async(error) => {

        if(error.message.includes("Missing")) return canal.send(err+"No tengo permisos para eliminar mensajes "+errore)
        if(error.message.includes("Uknown")) return registros.send(err+"*no pude eliminar un mensaje en* **"+server.name+"**")
    
        else return canal.send(err+"LMAO Ocurrió un error inesperado <:pansive:790352925888872448>")
    })



    }
}