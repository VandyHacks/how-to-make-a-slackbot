/*
  Examples of controller functions!
*/

// This allows us to write a function for the bot's controller and exporting it globally so it can run elsewhere
module.exports = function(controller) {
  // We can handle different events in pre-specified ways  
  // List of possible events: https://github.com/howdyai/botkit/blob/master/docs/readme-slack.md#slack-specific-events
  
  // Responds to a 'direct_message' of 'Hello!' or 'Hey!'
  controller.hears(['Hello!', 'Hey'], 'direct_message', function(bot, message) {
    bot.reply(message, 'Tru');
  });
  
  // Custom response to the events 'direct_message' OR 'direct_mention'
  controller.hears(['Do you love waffles?'], 'direct_message,direct_mention', function(bot, message) {
    bot.reply(message, 'Yes, I love waffles!');
  });

  
}

