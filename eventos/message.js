const Discord = require('discord.js');
//const client = new Discord.Client({ ws: { intents: 32767 } });
const client = new Discord.Client({ws: { intents:32767, properties:{$browser:"Discord Android"}  }})
client.comandos = new Discord.Collection(); 



const moment = require("moment")
const db = require("megadb")
var prefixes = new db.crearDB("prefixes")
var respuestas = new db.crearDB("respuestas")

 
const cooldown = new Set();

/**
* @param {Discord.Message} message
* @param {Discord.Client} client - Discord client 
*/
module.exports = async(client, message) => {


    //--/////////////////    ALGUNOS RANDOM DE EMOJIS Y LINKS   \\\\\\\\\\\\\\\\\\\\--\\
    //--\\\\\\\\\\\\\\\\\      PARA QUE EL TEXTO SEA PIOLA      ////////////////////--\\ 
    var matern = [" "," ","<:XD1:789690673006641212> "," <a:stick:790352667146715146>","<a:sex:790437044827717652> ","<:jajant:792163431829471272>" ," "," ",]
    var xd = matern[Math.floor(Math.random() * matern.length)]
    var materia = ["","", "**", "*","",""]
    var pi = materia[Math.floor(Math.random() * materia.length)]
    var leche = ["<a:master:790142584432361533>","<a:sex:790437044827717652>","<a:drive:790352760477974528>","<a:cross:790351368980004874>","<a:parrots:790350829768540190>","<a:stick:790352667146715146>","<a:coolkid:790352697953222666>"]
    var emoji = leche[Math.floor(Math.random() * leche.length)]
    var chocolat = ["<:nimodo:790354317969850378>","<a:pepe:790351339279482880>","<:pansive:790352925888872448>"]
    var male = chocolat[Math.floor(Math.random() * chocolat.length)]
    var ventana = ["https://cdn.discordapp.com/emojis/788221258092380201.gif?v=1","https://cdn.discordapp.com/emojis/787228911175335956.gif?v=1","https://cdn.discordapp.com/emojis/787211492285612122.gif?v=1","https://cdn.discordapp.com/emojis/790353284703453184.gif?v=1","https://cdn.discordapp.com/emojis/790352697953222666.gif?v=1"]
    var footer = ventana[Math.floor(Math.random() * ventana.length)]
    var bembem = ["<:nimodo:790354317969850378>","<:pansive:790352925888872448>","<:face_sad:790354385590288435>","<:pq:790386722361442314>"]
    var errore = bembem[Math.floor(Math.random() * bembem.length)]

    if (message.channel.type === "dm") {
        if(message.author.bot) return
        if (message.author.id == `${client.user.id}`) return;
    
        const embed = new Discord.MessageEmbed()
        .setAuthor(client.user.tag, client.user.displayAvatarURL())
        .setTitle("NUEVO MENSAJE DIRECTO <a:pizzas:776091288419958784>")
        .addField('\u200b', "**<a:1now:772742594563407873> HECHO POR: <@"+message.author.id+"> **\n\n**TAG:** "+message.author.tag+"   **ID:** "+message.author.id+"\n")
        .addField('\u200b', "**CONTENIDO DEL MENSAJE <a:goose:780566791897743391>**\n```js\n\n"+message.content+"\n```")
        .setColor("15ff59")
        client.channels.cache.get("792906279537606656").send(embed); 
    }




  //--///////////////// ESTOS SON AUTO RESPUESTAS DENTRO  \\\\\\\\\\\\\\\\\\\\--\\
	//--/////////////////      O FUERA DE UN SERVIDOR       \\\\\\\\\\\\\\\\\\\\--\\

if(!respuestas.tiene(message.author.id)) {
  if(message.author.bot) return;
if(message.guild && !message.channel.permissionsFor(message.guild.me).has("SEND_MESSAGES")) return;
	var cn = message.channel
	
	if(message.content.includes("gay") || message.content.includes("gei")) {
		message.react("<a:gayers:787553218325774356>")
	}
	if(message.content.startsWith("a")) {
	message.react("<:ahre:793608995227041802>")
	}
	if(message.content.startsWith("epico")) {
		message.channel.send("<@!"+message.author.id+"> <:fluched:792163271599325224> Epico son tus nalgas contra mi fierro preciosa <:Guapo:792181896003190814>")
	}
	if(message.content.startsWith("tristeza")) {
		cn.send("https://media.discordapp.net/attachments/758456858633175082/793663030121988096/e6f74bc8f3caea0782a2cd62a41aff78.jpg")

	}
	if(message.content.startsWith("relajao")) {
	  cn.send("https://cdn.discordapp.com/attachments/755579023475867718/762477169103732746/20200826_214717.jpg")
	}
	if(message.content.includes("te van a funar")) {
	cn.send("https://media.discordapp.net/attachments/769691352286887987/776165134568652800/20201102_210540.png?width=309&height=300")
	}
	if(message.content.startsWith("callese")) {
		cn.send("https://cdn.discordapp.com/attachments/755579023475867718/763601884594176010/hqdefault-1-1.png")
	}
	if(message.content.startsWith("trolo")) {
		cn.send("https://cdn.discordapp.com/attachments/755579023475867718/763601196938035231/unknown-4-1.png")
	}

};
    //--/////////////////    DESDE AQUI EN ADELANTE SON ACCIONES   \\\\\\\\\\\\\\\\\\\\--\\
    //--\\\\\\\\\\\\\\\\\           DENTRO DE UN SERVIDOR          ////////////////////--\\  
		
    if(message.author.bot) return
    if(message.channel.type == "dm") return 
		if(message.guild.id == "755276192533315625") return;

    //const prefijo = await prefixes.obtener(message.guild.id) || ">"

    const prefijos = ["skiz ","?",'/',`<@!${client.user.id}> `, `<@!702987748893786132> `];
    var prefijo = await prefixes.get(message.guild.id) || "/"

    for(const thisPrefix of prefijos) {
    if(message.content.startsWith(thisPrefix)) prefijo = thisPrefix;
    }



    //--/////////////////    ESTO ES PARA REPETIR LOS MENSAJES DE   \\\\\\\\\\\\\\\\\\\\--\\
    //--\\\\\\\\\\\\\\\\\        X USUARIOS SI PONEN LO MISMO        ////////////////////--\\  

    message.channel.messages.fetch({ limit: 2 }).then(m => {
        var a = [...m.values()].filter(E => !E.author.bot && E.content);
        var e = [...m.values()].filter(E => !E.author.bot && E.content);
        if (!a[1]) return;
    
      
        if(a[0].content.toLowerCase() == a[1].content.toLowerCase() && e[0].author.id !== e[1].author.id){
        //if(a[0].content.toLowerCase() == a[1].content.toLowerCase() == a[2].content.toLowerCase() && e[0].author.id !== e[1].author.id !== e[2].author.id){
            message.channel.send(`${pi+a[0].content+pi} `+xd)
        }
    });


    //--/////////////////    DESDE AQUI SON REGEXP POR SI MENCIONAN   \\\\\\\\\\\\\\\\\\\\--\\
    //--\\\\\\\\\\\\\\\\\         AL BOT, EL RESPONDA CON ALGO        ////////////////////--\\  


    if(message.content.match(new RegExp(`^<@!?${client.user.id}>( |)$`))) { 
    const embed = new Discord.MessageEmbed()
    .setAuthor(client.user.tag, "https://cdn.discordapp.com/emojis/787211460669210634.gif?v=1")   
    .setDescription("El bot se encuentra en desarrollo. Usa `"+prefijo+"commands` para ver que tiene el bot")
    .addField("Servidor de soporte <a:inodoro:790717136208789504>", "[**CLICK AQUI**](https://discord.gg/HKauRFn2rw)", true)
    .addField("Invitar bot <a:estrella:790142263724474429>", "[**CLICK AQUI**](https://cutt.ly/jhGfc9M)", true)
    .setColor("RANDOM")
    .setTimestamp()
    message.channel.send(embed)
    }


    //--/////////////////    DEFINIMOS LO MÁS IMPORTANTE DEL CODE   \\\\\\\\\\\\\\\\\\\\--\\
    //--\\\\\\\\\\\\\\\\\           ARGUMENTOS Y COMANDO :P         ////////////////////--\\      

    if(!message.content.startsWith(prefijo)) return;
    var args = message.content.slice(prefijo.length).trim().trim().split(/ +/g);
    var comando = args.shift().toLowerCase()


    //--/////////////////    AQUI DEFINIMOS COSAS. PRINCIPALMENTE   \\\\\\\\\\\\\\\\\\\\--\\
    //--\\\\\\\\\\\\\\\\\       SE HACE PARA ACORTAR EL CODIGO      ////////////////////--\\  

    var mal = "<a:mal:790351409639587880> `┃` " 
    var err = "<a:error:790139233134051379> `┃` "
    var load = "<a:charge:790142195856048128> `┃` "
    const admin = ["755495124091404389","416969095725187082"]
    let autorhd = message.author.displayAvatarURL({format: "png", dynamic: true, size: 4096}) 
    let hd = {format: "png", dynamic: true, size: 4096}
    let nsfw = message.channel.nsfw
    let sv = message.guild.members.cache
    let sis = args.join(" ").toLowerCase()
    let texto = args.join(" ")

    var bot = client.user
    var autor = message.author
    var server = message.guild
    var canal = message.channel

    var usuario = message.mentions.members.first() || sv.find(x => x.id === args[0] || x.user.tag.toLowerCase() == sis || x.user.username.toLowerCase() === sis || (x.nickname && x.nickname.toLowerCase() == sis) || x.user.discriminator === sis)

	if(prefijo == `<@!${bot.id}> ` || prefijo == `<@!702987748893786132> `) {
		usuario = message.mentions.members.map(x => x)[1] || sv.find(x => x.id === args[0] || x.user.tag.toLowerCase() == sis || x.user.username.toLowerCase() === sis || (x.nickname && x.nickname.toLowerCase() == sis) || x.user.discriminator === sis)
	}
    var tio = client.user.id
    var rick = message.member.nickname || message.member.user.username

    //--/////////////////    PARA MAPEAR TODAS LAS FECHAS DEL AÑO   \\\\\\\\\\\\\\\\\\\\--\\
    //--\\\\\\\\\\\\\\\\\           Y USARLAS EN EL BOT XD          ////////////////////--\\ 

    let brandom = ["faff6d", "b972fc", "ffe27c", "ff8ad0", "f3d55f", "97e3f8", "854eff", "ff8c8c"]
    let randomcolor = brandom[Math.floor(Math.random() * brandom.length)]
    let membercolor = message.member.displayHexColor
    if(membercolor == "#000000") membercolor = "RANDOM"
    let opcionx = [ `${randomcolor}`, `${membercolor}` ]
    var color = opcionx[Math.floor(Math.random() * opcionx.length)]

    var linkn = "https://media.discordapp.net/attachments/766745379256533062/787795075316056075/activa_nsfw.gif"
    let arrayn = [
    "<a:mal:787234344653684786> `┃` Bruh solo puedes usar el comando en un canal NSFW <a:thinking:787238010555072513>",
    "<a:mal:787234344653684786> `┃` Sólo puedes usar esto en un canal NSFW master <a:master:787209048125603841>",
    "<a:error:787234844262268929> `┃`Marca el canal como `NSFW` para usar este comando. aquí un ejemplo:",
    "<a:error:787234844262268929> `┃`Debes activar el  canal como `NSFW` para hacer esto!",]
    var rptn = arrayn[Math.floor(Math.random() * arrayn.length)]    

    var fechas = moment.updateLocale('es', {
        months: 'Enero_Febrero_Marzo_Abril_Mayo_Junio_Julio_Agosto_Septiembre_Octubre_Noviembre_Diciembre'.split('_'),
        monthsShort: 'Enero._Feb._Mar_Abr._May_Jun_Jul._Ago_Sept._Oct._Nov._Dec.'.split('_'),
        weekdays: 'Domingo_Lunes_Martes_Miercoles_Jueves_Viernes_Sabado'.split('_'),
        weekdaysShort: 'Dom._Lun._Mar._Mier._Jue._Vier._Sab.'.split('_'),
        weekdaysMin: 'Do_Lu_Ma_Mi_Ju_Vi_Sa'.split('_')
    });moment.locale('es');


    //--/////////////////    AQUI IMPORTAMOS LAS DECLARACIONES DE    \\\\\\\\\\\\\\\\\\\\--\\
    //--\\\\\\\\\\\\\\\\\          ARRIBA A UNA SOLA VARIABLE        ////////////////////--\\  

    var cosas = {

        nsfw: nsfw,
        linkn: linkn,
        arrayn: arrayn,
        rptn: rptn,

        errore:errore,
        admin: admin,
        emoji: emoji,
        male: male,
        footer: footer,
        pre: prefijo,
        prefijo: prefijo,
        fechas: fechas,
        color: color,
        usuario: usuario,
				tio: tio,
				rick: rick,

        sv:sv,
        mal: mal,
        err: err,
        load: load,
        texto: texto,
        hd: hd,
        autor: autor,
        autorhd: autorhd,
        bot: bot,
        server: server,
        canal: canal
    }
//  var { emoji,footer,pre,color,usuario, mal,err,load,texto,hd,autor,autorhd,bot,server,canal } = cosas

    //--/////////////////    ESTO ES POR SI NO SE ENCUENTRA X   \\\\\\\\\\\\\\\\\\\\--\\
    //--\\\\\\\\\\\\\\\\\         COMANDO MANDE EL EMBED        ////////////////////--\\  

    const horror = new Discord.MessageEmbed()
    .setAuthor(`${bot.username} ┃ 😟 error`, bot.displayAvatarURL(hd))
    .setDescription(`**<a:error:787234844262268929> ┃ Boe... El comando está mal escrito o no existe!**`)
    .setThumbnail("https://media.discordapp.net/attachments/766745379256533062/775119344329031730/error-red-cross-1.webp")
    .setColor("f41e4c")


    //--/////////////////    ESTO ES DEL COMANDO HANDLER   \\\\\\\\\\\\\\\\\\\\--\\
    //--\\\\\\\\\\\\\\\\\          NO SE DEBE MOVER        ////////////////////--\\  

    var cmd = client.comandos.get(comando) || client.comandos.find((c) => c.alias.includes(comando))

    if(!cmd) return;

    
    cmd.run( client, message, args, cosas);
    message.ejecutoComando = true;

}