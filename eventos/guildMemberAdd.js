const Discord = require("discord.js")
const Canvas = require("canvas")



const db = require("megadb")
const welcomes = new db.crearDB("Bienvenidas");



let array = [
"https://media.discordapp.net/attachments/766745379256533062/786032111680356362/wp4470754.jpg?width=771&height=434",
"https://media.discordapp.net/attachments/766745379256533062/786032314974208010/retrowave-lineas-montanas_1280x720_xtrafondos.com.jpg?width=771&height=434",
]


/**
* @param {Discord.GuildMemberAdd} member
* @param {Discord.Client} client - Discord client 
*/
module.exports = async( client, member) => {


if(member.user.bot) {
	member.guild
}


Canvas.registerFont('./letras/NiseSegaSonic.TTF', { family: 'bungee' });
Canvas.registerFont('./letras/cherladieroval.ttf', { family: 'cherladier' });
Canvas.registerFont('./letras/Antone_Block.ttf', { family: 'antone' });



 let url_welcome = array.shift() // Sacas un item del array
 array.push(url_welcome) // Lo vuelves a agregar al array


  var URL = `${url_welcome}`


  const canvas = Canvas.createCanvas(1280, 720) //1024 x 500  //2560 x 1440
  const ctx = canvas.getContext('2d')


  const big = await Canvas.loadImage(URL)
  ctx.drawImage(big, 0, 0, canvas.width, canvas.height)

  let X = 620

  ctx.font = "150px cherladier"
  ctx.fillStyle = "#FDA900"
  ctx.textAlign = "center"
  ctx.fillText(`BIENVENID@`, X, 538)
 
  ctx.font = "60px antone"
  ctx.fillStyle = "#BCFD00"
  ctx.textAlign = "center"
  ctx.fillText(`${member.user.tag}`, X, 615)
 
  ctx.font = "45px bungee"
  ctx.fillStyle = "#00FFF7"
  ctx.textAlign = "center"
  ctx.fillText(`CUANTO CUESTAS MAMASITA?`, X, 667)



  const x=450,     radio = 180,     y = 43
    
    
  //Borde del avatar
  ctx.beginPath()
  ctx.arc(x+radio, y+radio, radio +9, 0, Math.PI * 2, true)
  ctx.fillStyle = "#FDF200"
  ctx.fill()
  ctx.stroke()
  ctx.closePath()


  //Circulo para cortar el avatar
  ctx.save()
  ctx.beginPath()
  ctx.arc(x+radio, y+radio, radio, 0, Math.PI * 2, true)
  ctx.closePath()
  ctx.clip()

  //Avatar
  const imagen = await Canvas.loadImage(member.user.displayAvatarURL({format:"png", dynamic: false, size:4096}))
  ctx.drawImage(imagen, x, y, radio*2, radio*2)



  const att = new Discord.MessageAttachment( canvas.toBuffer(), "bienvenida.png" )

  let pepe = `<a:1cross:792182432018595871> `

  const rpt = `<a:1spinningcroissant:792192511988203540>**${member.user.tag}**${pepe}*Bienvenido mamaguebaso*<:Guapo:792181896003190814> *pasate por* <#774018019495903253> *para no funarte* <a:1songlases:792185324838846474>`


  const embed = new Discord.MessageEmbed()
    .setAuthor("¡Hola!, "+member.user.tag)
    .setTitle("¡Bienvenid@ a"+member.guild.name+"!")
    .setDescription("***<a:checked:793276140013355053> Eres el usuario nro."+member.guild.members.cache.size+"***")
    .setColor("RANDOM")
    .setThumbnail(member.user.displayAvatarURL({dynamic: true, size: 4096}))
    .setImage("https://media.discordapp.net/attachments/739170164347764857/773685201939202058/pitardo.gif")
    .setFooter(member.guild.name, member.user.displayAvatarURL({dynamic: true, size: 4096}))
    .setTimestamp()
  



var gremio = member.guild
  let b_base = welcomes.obtener(gremio.id) 
  let e_canal = gremio.channels.resolve(b_base)
  if(e_canal) return;
  var mamaguebaso = client.channels.cache.get(await b_base)
  if(!mamaguebaso) return;


  mamaguebaso.send(rpt, att)
  member.send(embed)

	.catch(error => {

		if(error.message.includes("cannot send")) {
			client.channels.cache.get("793280963463217224").send("<:fasepal:792163295032377354> *No se pudo enviar dm a* ***"+member.user.tag+"***")
		}
		if(error.message.includes("cannot load")) {
		client.channels.cache.get("793557814227238912").send("<:pansive:792163121392517121> *No pude cargar el config file de canvas*")
		}
		else {
			client.channels.cache.get("793557814227238912").send("<:pansive:792163121392517121> *error desconocido en bienvenidas*")	
		}

	})



}