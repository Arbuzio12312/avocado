const Discord = require('discord.js');
const client = new Discord.Client();
const chalk = require('chalk');
const { prefix } = require('./config.json');
const tak = '<a:ta:782965898885333032>';
const nie = '<a:ne:792020013023232021>';
const Rola1 = '782728348718596096';
const SadDino = '<:dinosad:792473409715961857>';
const dino = '<:DinoWithHeart:792473366447521833>';

client.login(process.env.TOKEN)

client.on('ready', () => {
  client.commands = new Discord.Collection();
  client.aliases = new Discord.Collection();
  client.queue = new Map();
  ['command', 'event'].forEach(handler => {
    require(`./handlers/${handler}`)(client);
  });
  console.log(`Zalogowano jako ${client.user.tag}!!`);
});
