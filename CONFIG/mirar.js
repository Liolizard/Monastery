const Discord = require('discord.js');





module.exports = {
    alias: ["look","comun","común","encomun","encomún"],
 /**
 * @param {Discord.Message} message
 * @param {Discord.Client} client - Discord client 
 */

    run: async ( client, message, args, cosas) => {
    var { emoji,male,errore,prefijo,footer,pre,dev,color,mal,err,load,texto,hd,autor,autorhd,bot,canal } = cosas


    if(!args[0]) return canal.send(mal+"***No pusiste el nombre del servidor a comparar*** "+emoji)
	

    let sise = message.guild.members.cache.filter(c => !c.user.bot)
    let nose = client.guilds.cache.find(x => x.id == args[0] || x.name == args.join(" "))

    if(!nose) return canal.send(mal+"Error no encontré ese servidor o no estoy en él. Asegúrate que este en él"+errore)
    if(nose == message.guild) return canal.send(mal+"El servidor no puede ser el mismo en el que te encuentras"+errore)


    var aveces = sise.filter(x => nose.member(x.user)).map(v => `\`${v.user.tag}\``).join("\n")


    if(aveces.length = 0) return canal.send(mal+"**No hay miembros en común entre los 2 servidores** "+errore) 

		if(aveces.length >= 1900) {

		let parte1 = aveces.slice(0,1600)
		let parte2 = aveces.slice(1600, aveces.length)

			canal.send("<a:fire:790142304014041110> ***Usuarios en común*** <a:cross:790351368980004874>\n\n"+parte1)
			canal.send(parte2)
		return;
		}


    canal.send("<a:fire:790142304014041110> ***Usuarios en común*** <a:cross:790351368980004874>\n\n"+aveces)





    }
};