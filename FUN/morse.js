const Discord = require('discord.js');
const morse = require('morse');






module.exports = {
    alias: ["morse"],
    run: async ( client, message, args, cosas) => {
    var { emoji,male,errore,prefijo,footer,pre,dev,color,mal,err,load,hd,autor,autorhd,bot,server,canal } = cosas
   

    if(!args[0]) return message.channel.send(mal+"Opciones: `de` (Decifrar un codigo morse) o `en` (Cifra un codigo morse)")

    let opt = ["de", "en"]

    if(!opt.includes(args[0].toLowerCase())) return canal.send(err+" Opcion incorrecta!")


    let texto = args.slice(1).join(" ")
 
    if(args[0] == "de") {

      if(!texto) return message.channel.send("Escribe algo a decifrar") 
         

      let decode = morse.decode(texto);
			message.channel.send(decode)
      

    } else if(args[0] == 'en') {

      if(!texto) return message.channel.send("Escribe algo a encriptar")
  

    	let encode = morse.encode(texto);    
			message.channel.send(encode)

    }
      
      
      



  }
};