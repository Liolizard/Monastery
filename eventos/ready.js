const Discord = require('discord.js');




/**
* @param {Discord.Activity} ready
* @param {Discord.Client} client - Discord client 
*/
module.exports = async(client, ready) => {


    
  function onichan_no_me_toques() {

  let estados = [`un show más🎈┃ ?help`,`pornhub🦋┃ ?help`,`estudiando chitpost🍻┃ ?help`, "patear traseros🥵┃ ?help", "setso con abuelitas😈┃ ?help"];
  let status = ["dnd","dnd"]
  var Tipo = "PLAYING"
  
  i = 0;



  setInterval(() => {

    client.user.setPresence({
      status: status[i++ % status.length],
      activity: {
        name: estados[i++ % estados.length],
        type: `${Tipo}`
      }
    }) 
  }, 18000); 
 

}
  

  
  console.log(`Epicardo toy listo pa patear traseros`)
  console.log(`-------------------------------------`)
  onichan_no_me_toques();
        
          
    


    
}