
const Discord = require("discord.js");
const marsnpm = require("marsnpm");




module.exports = {
    alias: ["sar"],
    run: async ( client, message, args, cosas) => {
    var { emoji,male,errore,prefijo,footer,pre,dev,color,mal,err,load,texto,hd,autor,autorhd,bot,server,canal } = cosas
    
    
    let text = args.join(" ")
    if(!text) return canal.send(mal+"LMAO debes poner un texto para hacerlo sArcAsTiCo <:chucha:792162895307735050>")


    let mars = marsnpm.getSarcastic(text)


    message.delete({timeout:0})
    canal.send(mars, { disableMentions: "everyone" });


  }
};