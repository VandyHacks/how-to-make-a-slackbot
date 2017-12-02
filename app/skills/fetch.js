const request = require('request');
module.exports = function(controller){
  // controller
  controller.on([new RegExp('^geocode')],'direct_mention,direct_message',function(bot,message){
      let place = message.text.split('geocode ')[1];
      console.log(place);   
      /*geocode(place).then(function(data){
        console.log(data)
      }); */
      
  });
  
  controller.hears([new RegExp('^geocode')],'direct_message,direct_mention', function(bot,message){
    let place = message.text.split('geocode ')[1];
    
    
    let processData = function(data){
      let lookup = JSON.parse(data)[0];
      console.log(lookup);
      bot.reply(message,'This is at '+ lookup.lat + ', '+ lookup.lon); 
    }
    geocode(place,processData);     
    
  });
}


function geocode(where,callback){
  

let options = { method: 'GET',
  url: 'http://nominatim.openstreetmap.org/search', 
  qs: { q: where, format: 'json',addressdetails:1 }
   };

return request(options, function (error, response, body) {
  if (error) throw new Error(error);
  console.log(body);
  callback(body)
});
	
}