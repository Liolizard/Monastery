
const Discord = require("discord.js");





module.exports = {
    alias: ["reversa"],
    run: async ( client, message, args, cosas) => {
    var { emoji,male,errore,prefijo,footer,pre,dev,color,mal,err,load,texto,hd,autor,autorhd,bot,server,canal } = cosas 
    
    
    let reversa = args.join(" ")

    if (!reversa) return canal.send(mal+"LMAO debes poner lo que quieras que invierta <:chucha:792162895307735050>")


    let invertido = reversa.split('').reverse().join('')

    canal.send(invertido, { disableMentions: "everyone" })
    

  }
};
