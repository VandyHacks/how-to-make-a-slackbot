# How to Make a Slackbot
## MLH Local Hack Day 2017 @ Vanderbilt University

### Introduction
#### What is a slackbot?
A _bot_ in general is a computer program that acts like a user in some sort of chat environment. 

For example, you may utilize a Slackbot that focuses on scheduling. In a group chat, it's a member of the chat room and can respond to other users talking to it in a relatively intelligent way. You can say, _Hey, bot! Can you schedule this meeting?_ and expect the bot to reply, _Sure thing, user!_ and actually follow your instructions. You may even communicate with a bot in a direct message or individual chat in a similar fashion.

All that the term _slackbot_ refers to is a bot that is a user a Slack channel. Slack is a team communications platform focused on producivity - it's used in a lot of software development and tech-focused circles, but is usable by pretty much anyone. Useful bots for this kind of platform might include a bot that lets users in a chat schedule things easily (like we talked about earlier), kind of like a personal assistant. Another may be set up to be programmatically alerted when you receive an email - when it learns that you just received an email, the bot messages you as a means of notifying you of the message. 

#### How do we even build something like that?
Well, it's not all that hard - it just won't be as smart as you and me. We can build a bot that can accept and respond to anything you might say to it, but a series of pre-determined _queries_ (statements or prompts geared at it). These may be focused on certain kinds of tasks, like asking a scheduling bot to find time on everyone's calendar to meet, schedule a meeting, delete an already scheduled meeting, or any other relevant tasks you can reasonably expect your bot to be able to do. 

To accomplish this task, we're going to Glitch, a tool that helps us deploy a basic bot, manage our project, and build our bot's functionality by writing JavaScript code. 

### Environment Setup
1. Remix the project [here](https://glitch.com/edit/#!/vandyhacks-slackbot-template)
2. Create a Slack app [here](https://api.slack.com/apps)
3. Copy environment variables from Slack to the environment file (Glitch)
4. Add redirect URL in Slack (YOUR_URL/oauth)
5. Authorize app at YOUR_URL/login

### Everything else...
Come to the workshop and find out!