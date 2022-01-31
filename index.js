const express = require('express')
const app = express()

app.get('/', function(req, res) {
  res.send('SkizZ Comunnity BOT :D')
})
let port = process.env.PORT || 3000;
app.listen(port)

require('dotenv').config()

////////////  CUERPO PRINCIPAL DEL BOT  \\\\\\\\\\\\\\\\
const Discord = require('discord.js');
const client = new Discord.Client({ws: { intents:32767, properties:{$browser:"Discord Android"}  }})


/////////// DE AQUI EN ADELANTE ES PARA PODER USAR HANDLER  \\\\\\\\\\\\\
/////////  ES IMPORTANTE NO MOVERLO PARA NO DAÑAR NADA DEL BOT  \\\\\\\\\\


const fs = require("fs")
let { readdirSync } = require('fs'); 
const message = require("./eventos/message");
client.comandos = new Discord.Collection();  


for(const category of readdirSync('./comandos/')){
  let carpetaName = category.substring(0);
  for(const file of readdirSync(`./comandos/${carpetaName}/`))
  if(file.endsWith('.js')){
  let fileName = file.substring(0, file.length - 3);        
  let fileContents = require(`./comandos/${carpetaName}/${file}`); 
  client.comandos.set(fileName, fileContents); 
  }
}  

for (const file of fs.readdirSync('./eventos/')) {
  if (file.endsWith(".js")) {
    let fileName = file.substring(0, file.length - 3);
    let fileContents = require(`./eventos/${file}`);
    client.on(fileName, fileContents.bind(null, client));
  }
}


client.login(process.env.token)