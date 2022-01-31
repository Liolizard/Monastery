const Discord = require('discord.js');
const moment = require("moment")





module.exports = {
   alias: ["user","us","infouser"],
 /**
 * @param {Discord.Message} message
 * @param {Discord.Client} client - Discord client 
 */

   run: async ( client, message, args, cosas) => {
   var { emoji,footer,fechas,pre,color,usuario,mal,err,load,texto,hd,autor,autorhd,bot,server,canal } = cosas



   miembro = usuario
   if(!args[0]) miembro = message.member
   if(!miembro) return canal.send(mal+"No encontré a ese usuario")

   let clase = {
    "PLAYING": "Jugando a",
    "WATCHING": "Viendo",
    "COMPETING": "Competiendo",
    "LISTENING": "Escuchando",
    "STREAMING": "Stremeando",
  };
  
  let estados = {
      "online": "<:on:787267512596430849> Conectado",
      "idle": "<:idle:787267582062362634> Ausente",
      "dnd": "<:dnd:787267542439690261> Ocupado",
      "offline": "<:offline:787267566174732288> Desconectado"
    };
  let plataformas = {
    "desktop": "pc",
    "web": "<:web:790850845557391401> Navegador",
    "mobile": "Celular"
  }

    let badges1 = {
      'HOUSE_BRAVERY': '<:bravery:787272330837360720>',
      'HOUSE_BRILLIANCE': '<:brilliance:787272397719732234>',
      'HOUSE_BALANCE': '<:balance:787272359337263134>',
      'HYPESQUAD_EVENTS': '<a:hypesquad:787271960505745418>',
      'BUGHUNTER_LEVEL_1': '<:bughunter:787271415408623646>',
      'BUGHUNTER_LEVEL_2': '<:bughunter2:787271478906191884> ',
      'EARLY_SUPPORTER': '<:partidario:787271710558388234>',
      'DISCORD_EMPLOYEE': '<:discord:787271790019346492>',
      'DISCORD_PARTNER': '<a:partner:787271801163087892>',
      'VERIFIED_DEVELOPER': '<a:developer:787271560976531467> ',
      'VERIFIED_BOT': '<:bot:787271646367973426>',
    };
  
    let disc = ["9999", "8888", "7777", "6666", "5555", "4444", "3333", "2222", "1111"]
  
  
    let bruswai = miembro.user.displayAvatarURL({dynamic: true})
    let coso = bruswai && bruswai.endsWith(".gif")
    var n = coso || disc.includes(miembro.user.discriminator) ? "<:Nitroclassic:787286088292761631>" : " "  
    var b = miembro.premiumSince ? "<a:boost:787282081700118558>" : " "
    let booster = miembro.premiumSince ? '**Estoy boosteando**' : "**No estoy boosteando**"
  
  
    let apodo = miembro.nickname !== null ? `**${miembro.nickname}**` : "*Sin apodo*"
    var badges = miembro.user.flags.toArray().length ? miembro.user.flags.toArray().map(badge => badges1[badge]).join(' ') : "*No tengo badges*"


    let roles = miembro.roles.cache.filter(e => e.id !== server.id).sort((a,b) => b.position - a.position).map(roles => `${roles.toString()}`).join('**┃**')//.replace("@everyone", " ")
    if(!roles.length) roles = "*Sin roles*"
  

    var xdd = miembro.user.presence.activities
    var setso = miembro.presence.activities[1] ? `*${clase[miembro.presence.activities[1].type]}* ***${miembro.presence.activities[1].name}***` : " "
    let presencia =  miembro.user.presence.activities[1] ? `${setso}` : "Sin actividad"
    var estado =  estados[miembro.user.presence.status]
    let personal = miembro.presence.activities[0] ? miembro.user.presence.activities[0].state : "no tiene"
    

    let perms = message.guild.member(miembro).permissions.toArray().map(x => `${x}`).join(", ")
    let a = miembro.user.presence.clientStatus ? plataformas[Object.keys(miembro.user.presence.clientStatus)[0]] : "No se sabe"
 
  

    let entrada = `${moment.utc(miembro.user.joinedAt).format('LLL')}`
    let discord = `${moment.utc(miembro.user.createdAt).format("LLL")}`
    let colors = miembro.displayHexColor
    if(colors == "#000000") colors = "RANDOM"
  

  
    const embed = new Discord.MessageEmbed()
    
    .setDescription("**INFORMACIÓN DEL USUARIO:**")
    .addField("**🎫 Nombre**:", "**"+miembro.user.tag+"**")
    .addField("**🎟 ID**:", `${miembro.user.id}`, true )
    .addField("**🏳️ Insignias:**", badges+n+b, true)
    .addField("Plataforma", `${a}`, true)
    .addField("**📌 Apodo del usuario**:", apodo, true)
    .addField("**🛎 Fecha de Ingreso al Servidor:**", entrada, true)
    .addField("**📥 Cuenta Creada:**", discord, true)

    .addField("**🎈 Estado**:", `*${estado}*`, true)
    .addField("**🎮  Jugando**:", `*${presencia}*`, true)
    .addField("**🎨 Status**:", `*${personal}*`, true)
    //.addField("**Boostea? <a:hand1:787282114659614731><a:boostlv5:787280504206131245><a:hand:787282138528874496>**", booster, true)
    .addField("\u200b", "\u200b")
    .addField("**🎖 Roles:**", roles)
    //.addField('Permisos', `\`\`\`css\n${perms}\n\`\`\``)
  
    .setThumbnail(miembro.user.displayAvatarURL(hd))
    .setColor(colors)
    .setFooter(message.guild.name, message.guild.iconURL(hd))
    .setTimestamp()
  
  
    canal.send(embed)
  
  




   }
};