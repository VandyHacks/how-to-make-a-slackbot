//require spongebobify here!
const spongebobify = require('spongebobify')
module.exports = function(controller){
  // controlle
  controller.hears([new RegExp('^spongebobify')],'direct_message,direct_mention', function(bot,message){
    let toChange = message.text.split('spongebobify ')[1];
    bot.reply(message,spongebobify(toChange)); 
  });
}