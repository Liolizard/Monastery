const Discord = require('discord.js');





module.exports = {
   alias: ["av","a"],
 /**
 * @param {Discord.Message} message
 * @param {Discord.ReactionCollector} collector
 * @param {Discord.Client} client - Discord client 
 */

   run: async ( client, message, args, cosas) => {
   var { emoji,footer,fechas,pre,color,usuario,mal,err,load,texto,hd,autor,autorhd,bot,server,canal } = cosas



  var awoo = ["https://cdn.discordapp.com/emojis/787211492285612122.gif?v=1", "https://cdn.discordapp.com/emojis/787211475281772545.gif?v=1", "https://cdn.discordapp.com/emojis/787211460669210634.gif?v=1", "https://cdn.discordapp.com/emojis/787212640132792340.gif?v=1", "https://cdn.discordapp.com/emojis/699641139010994196.gif?v=1"]
  var callao = awoo[Math.floor(Math.random() * awoo.length)] 

	
  let txt = texto

  if(!args[0]) {

  let colorss = message.member.displayHexColor
  if(colorss == "#000000") colorss = "RANDOM"
  
    const embed = new Discord.MessageEmbed()
    .setTitle(`Tu avatar ${autor.username}`)
    .setDescription(`[**Avatar URL**](${autor.displayAvatarURL(hd)})`)
    .setImage(autor.displayAvatarURL(hd))
    .setColor(colorss)
    .setFooter("\u200b", callao)
    .setTimestamp()
  
    return canal.send(embed)
  
  }

  var sv = message.guild.members.cache
  var xd = args.join(" ").toLowerCase()



if(pre == `<@!${bot.id}> `) {

  let pollo = message.mentions.members.map(x => x)[1] ||
    sv.find(x => x.id === args[0]) ||
    sv.find(x => x.user.tag.toLowerCase().includes(xd)) ||
    sv.find(x => x.user.username.toLowerCase().includes(xd)) ||
    sv.find(cum => cum.nickname === xd) ||
    sv.find(cum => cum.user.discriminator === txt)


  if(!pollo) return canal.send(mal+"Malardo no pude encontrar a ese usuario <a:think3D:787551725976027168>")
    
  let colors = pollo.displayHexColor
  if(colors == "#000000") colors = "RANDOM"

  pollo = pollo.user

  const embed = new Discord.MessageEmbed()
  .setTitle(`Avatar de ${pollo.tag}`)
  .setDescription(`[**Avatar URL**](${pollo.displayAvatarURL(hd)})`)
  .setImage(pollo.displayAvatarURL(hd))
  .setColor(colors)
  .setFooter("\u200b", callao)
  .setTimestamp()

	return canal.send(embed)


}





  let lacra = message.mentions.members.first() ||
    sv.find(x => x.id === args[0]) ||
    sv.find(x => x.user.tag.toLowerCase().includes(xd)) ||
    sv.find(x => x.user.username.toLowerCase().includes(xd)) ||
    sv.find(cum => cum.nickname === xd) ||
    sv.find(cum => cum.user.discriminator === txt)

    


  if(!lacra) return canal.send(mal+"Malardo no pude encontrar a ese usuario <a:think3D:787551725976027168>")
    
  let colors = lacra.displayHexColor
  if(colors == "#000000") colors = "RANDOM"

  lacra = lacra.user

  //**〉**
    
    const embed = new Discord.MessageEmbed()
    .setTitle(`Avatar de ${lacra.tag}`)
    .setDescription(`[**Avatar URL**](${lacra.displayAvatarURL(hd)})`)
    .setImage(lacra.displayAvatarURL(hd))
    .setColor(colors)
    .setFooter("\u200b", callao)
    .setTimestamp()

  canal.send(embed)





  }
};