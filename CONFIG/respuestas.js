const Discord = require("discord.js")



const db = require("megadb")
var respuestas = new db.crearDB("respuestas")



module.exports = {
  alias: ["answers","autoresponder"],
 /**
 * @param {Discord.Message} message
 * @param {Discord.Client} client - Discord client 
 */

  run: async ( client, message, args, cosas) => {
  var { emoji,male,errore,prefijo,footer,pre,dev,color,mal,err,load,texto,hd,autor,autorhd,bot,server,admin,canal } = cosas


	if(!args[0]) return canal.send(mal+"Debes elegir una opción <:ahre:793608995227041802>\n**Modo de uso:** `"+pre+"respuestas [disable - enable]`")


	var opciones = ["disable","enable","desactivar","activar"]
	var opt = args[0].toLowerCase()

  if(!opciones.includes(opt)) return canal.send(mal+"No pusiste una pocion Valida!. debe ser `disable` o `enable`")


	if(opt == "disable" || opt == "desactivar") {

		respuestas.establecer(message.author.id, autor.tag)
		canal.send("<a:nais:790351523863199814> `┃` Hecho! ahora las auto respuestas están desactivadas para ti")

	}

	if(opt == "enable" || opt == "activar") {

	if(!respuestas.tiene(message.author.id)) return canal.send("<a:nais:790351507521667104> `┃` Ya las tienes activadas <:ahre:793608995227041802>")

	respuestas.eliminar(message.author.id)
		canal.send("<a:nais:790351731321208842> `┃` Las auto respuestas ahora están activadas para ti")


	}



	}
};

