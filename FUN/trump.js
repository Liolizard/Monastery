const Discord = require("discord.js");
const marsnpm = require("marsnpm");






module.exports = {
    alias: ["presidente"],
  run: async ( client, message, args, cosas) => {
  var { emoji,male,errore,prefijo,footer,pre,dev,color,mal,err,load,texto,hd,autor,autorhd,bot,server,admin,canal } = cosas
    
    

    let trompeta = args.join(" ")
    if(!trompeta) return canal.send(mal+"LMAO debes poner lo que va a decir trump <:fasepal:792163295032377354>")
    
    canal.send(load+"Cargando espera por favor <a:loading:790140885634646047>").then(e => e.delete({timeout:1400}))


    let mars = await marsnpm.trump(trompeta);
    let editado = new Discord.MessageAttachment(mars);
    canal.send(editado);


  }
};