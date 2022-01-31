const Discord = require('discord.js');





module.exports = {
   alias: ["e","ev"],
 /**
 * @param {Discord.Message} message
 * @param {Discord.Client} client - Discord client 
 */

   run: async ( client, message, args, cosas) => {
   var { emoji,admin,footer,pre,dev,color,mal,err,load,texto,hd,autor,autorhd,bot,server,canal } = cosas



  if(!admin.includes(autor.id)) return;


  var Markdown = (code) => { 
      return `\`\`\`js\n${code}\n\`\`\`` 
  };
  var colors = "f9cefd"

  try {

    let Evaluacion = eval(args.join(' '));
    let Tipo = typeof Evaluacion;

    if (typeof Evaluacion !== 'string') Evaluacion = require('util').inspect(Evaluacion, { depth: 0});


    if(Evaluacion.length >= 1024) {
      Evalua = Evaluacion.slice(0,1400)
      eva = Evaluacion.slice(1400, Evaluacion.length)

      canal.send(Markdown(Evalua))
      return canal.send(Markdown(eva))
    }

      const nais = new Discord.MessageEmbed()
      .setAuthor("Evaluacion hecha!", autorhd)
      .addField("<a:power:790351308707725362> Tiempo ⏲️",` \`\`\`autohotkey\n${Math.floor(message.client.ws.ping)} ms\n\`\`\`  `, true)
      .addField("<a:config:790350921217081384> Tipo 🏷️", `\`\`\`diff\n-${Tipo}-\n\`\`\``, true)
      .addField('<:message:790350714245087253> Entrada 📥', Markdown(args.join(' ')))
      .addField('Salida 📤', Markdown(Evaluacion))
      .setColor(color)
      .setFooter("Hecho por "+autor.username, "https://cdn.discordapp.com/emojis/790437044827717652.gif?v=1")
      canal.send(nais)
    

    } catch (error) {
    
        const nadafresco = new Discord.MessageEmbed()
        .setTitle("<a:error:790139233134051379> Ocurrió un error en la evaluación <:pansive:790352925888872448>")
        .addField('Entrada 📥', Markdown(args.join(' ')))
        .addField('Error 📤', Markdown(error.message))
        .setColor(color)
        .setFooter("Hecho por "+autor.username, "https://cdn.discordapp.com/emojis/790437044827717652.gif?v=1")
        canal.send(nadafresco)

    }


  }
};
