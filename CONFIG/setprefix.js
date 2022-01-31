const Discord = require('discord.js');


const db = require("megadb")
var prefixes = new db.crearDB("prefixes")


module.exports = {
   alias: ["prefixset"],
 /**
 * @param {Discord.Message} message
 * @param {Discord.Client} client - Discord client 
 */

   run: async ( client, message, args, cosas) => {
   var { emoji,footer,pre,admin,usuario,mal,err,load,male,hd,autor,autorhd,bot,server,canal } = cosas


   const embed3 = new Discord.MessageEmbed()
   .setAuthor(`${bot.tag}`, bot.displayAvatarURL(hd))
   .setTitle("Ahora mi prefijo es el predeterminado")
   .setDescription(`**Usa** \`> \` **Antes de cada Comando**`)
   .setColor("RANDOM")
   .setTimestamp()

        
   if(!message.member.hasPermission("MANAGE_GUILD") || !admin.includes(autor.id)) return canal.send(mal+"Malardo no tienes permisos para hacer esto "+male)
   if(!args[0]) return canal.send(mal+"LMAO debes poner el nuevo prefix del bot. **ej:** `"+pre+"setprefix !` "+male) 

   let antes = args[0].toLowerCase()
   if(antes == "default") {
    prefixes.delete(message.guild.id);
    return canal.send(embed3);
  }

   if(args[0].length >= 5) return canal.send(mal+"El prefijo no puede llevar más de 5 carácteres. debe ser más corto "+male)

   let newprefix = await args[0];  

 
   const opcion = new Discord.MessageEmbed()
   .setAuthor(`${bot.tag}`, bot.displayAvatarURL(hd))
   .setTitle(`Cambiar el prefijo en el servidor`)
   .setDescription(`Quieres establecer tu nuevo prefix a \`${newprefix}\` \nPara confirmar escribir las siguientes opciones **<Y/N>**`)
   .setColor("RANDOM")
   .setTimestamp()
 
   const embed = new Discord.MessageEmbed()
   .setAuthor(`${bot.tag}`, bot.displayAvatarURL(hd))
   .setTitle("Prefijo actualizado!")
   .setDescription(`**Nuevo Prefix:** \`${newprefix}\` `)
   .setColor("RANDOM")
   .setTimestamp()
 
   const embed2 = new Discord.MessageEmbed()
   .setAuthor(`${bot.tag}`, bot.displayAvatarURL(hd))
   .setTitle("Cambio de prefijo Cancelado!")
   .setDescription("El progreso se cancelo")
   .setColor("RANDOM")
   .setTimestamp()
 
 
 
   if(antes !== "default") {
   canal.send(opcion);
 
 
   const collector = new Discord.MessageCollector( message.channel, m => 
   m.author.id === message.author.id,
     { time: 20000 } );
 
 
   collector.on("collect", async message => {
   
 
   if(message.content == "Y" || message.content == "y") {
      prefixes.establecer(message.guild.id, newprefix);
      canal.send(embed);
      collector.stop();
 
 
   }else if(message.content == "N" || message.content == "n") {
      canal.send(embed2);
      collector.stop();
 
     }
   });
 
   const vencer = new Discord.MessageEmbed()
   .setAuthor(`${bot.tag}`, bot.displayAvatarURL(hd))
   .setDescription("**<a:error:768518721211334676> `┃` LMAO El Comando Fué Cancelado Por Inactividad**")
   .setColor("f41e4c")
 
 
   collector.on("end", async collected => { 
   if (collected.size === 0) return canal.send(vencer);
   });
 
   }
 
 
 

   
   }
};