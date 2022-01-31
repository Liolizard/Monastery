const Discord = require('discord.js');
const Canvas = require("canvas")





module.exports = {
  alias: ["sonic-say","sonic-dice"],
  run: async ( client, message, args, cosas) => {
  let {mal, pre, canal, bot, texto, load, err, errore} = cosas


  Canvas.registerFont('./letras/NiseSegaSonic.TTF', { family: 'sega' });


if(pre == `<@!702987748893786132> `){
	canal.send(load+"Cargando Por Favor espera <a:loading:790140885634646047>")
	.then(e => e.delete({timeout: 1400}));

	}else {
	message.delete({timeout: 3000})
	canal.send(load+"Cargando Por Favor espera <a:loading:790140885634646047>")
	.then(e => e.delete({timeout: 1400}));
	}
        
    
    const url = 'https://cdn.discordapp.com/attachments/750461925099307129/757437842719768707/images.jpeg'


    const canvas = Canvas.createCanvas(751, 409) // creamos un canvas de 751 x 409 para que la imagen quede perfecta
    const ctx = canvas.getContext('2d') // el contexto
        
        
    const bg = await Canvas.loadImage(url) // cargamos la imagen en canvas
    ctx.drawImage(bg, 0, 0) // la dibujamos en todo el canvas
       
    

    if(!texto) return message.channel.send(mal+"Debes poner lo que sonic dirá por ti")
        

        // Ahora la parte de LOS SALTOS DE LINEA
    let textos = texto.split('') // spliteamos texto por cada espacio
    let texto_total = [] // un array del texto total, lo de texto total luego se entendera
    let longitud_maxima = 26; // la longitud maxima antes de un salto de linea
    for(let i = 0; i <= textos.length; i++){ //un for
    texto_total.push(textos[i]) // pusheamos todos los textos al array total

    if(i === longitud_maxima){ // si i es igual a la longitud maxima
    texto_total.push('\n ') // se pushea un salto de linea al array
    longitud_maxima = longitud_maxima + 26 // y duplicamos longitud maxima.
    }
        }

    // como dije antes, esto para poner cada cierto numero de caracteres un salto de linea y que no se nos vaya el texto.
    ctx.font = '22px Sega' // la fuente puede ser cualquiera yo usare una que es literalmente la de Sonic, se llama NiseSegaSonic.
    ctx.fillStyle = '#fff' // texto color blanco
    ctx.textAlign = "center" // el texto centrado
        

    ctx.fillText(texto_total.join(''), 240, 130) // y escribimos el texto que es texto total unido
        
    let att = new Discord.MessageAttachment(canvas.toBuffer(), 'sonic.png') // creamos el attachment del buffer del canvas y...
    

	setTimeout(() => { 
		canal.send(att)
		  .catch(async(error) => {

      if(error.message.includes("Missing")) return canal.send(err+"No tengo permisos para eliminar mensajes "+errore)
      if(error.message.includes("Uknown")) return registros.send(err+"*no pude eliminar un mensaje en* **"+server.name+"**")
    
      else return canal.send(err+"LMAO Ocurrió un error inesperado <:pansive:790352925888872448>")
    })
		
	},1400)




    }
};