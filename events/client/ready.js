const Discord = require("discord.js");
const chalk = require('chalk');
const client = new Discord.Client({disableEveryone: true,});
const config = require(".../.../config.json");
client.config = config;

module.exports = (client) => {
try {
 setInterval(() => {
 const emojis = ["🍋", "🍉", "🥝", "🍍", "🍌", "🍒", "🍎", "🍇", "🥥", "🥔", "🍓", "🥕", "🍕"];
 const emoji = emojis[Math.floor(Math.random()*emojis.length)];
 var date = new Date()	.toJSON().slice(0, 10).replace(/-/g, "/");
 const enddate = new Date().getFullYear() + "/06/13";
 const enddateEEP = new Date().getFullYear() + "/04/18";
 const statuslist = [];
 if (date == enddate) {
  statuslist.push(
   `🎉 ${client.guilds.cache.size} servers 🎉`,
   `🎉 ${client.guilds.cache.reduce((a, g) => a + g.memberCount, 0)} members 🎉`,
   `🎉 ${config.prefix} Help 🎉`,	
   `🎉 Happy Birthday Discord! 🎉`,
  );	
 } else if (date == enddateEEP) {	
  statuslist.push(	
   `🔥 ${client.guilds.cache.size} servers 🔥`,
   `🔥 ${client.guilds.cache.reduce((a, g) => a + g.memberCount, 0)} members 🔥`,
   `🔥 ${config.prefix} help 🔥`,	
   `🔥 EEP 4 LIFE (04/18)! 🔥`,
  );	
 } else {	
  statuslist.push(	
   `${emoji} | ${client.guilds.cache.size} servers`,
   `${emoji} | ${client.guilds.cache.reduce((a, g) => a + g.memberCount, 0)} members`,
   `${emoji} | ${config.prefix} help`,
  );	
 }	
 const random = Math.floor(Math.random() * (statuslist.length - 1) + 1);
 client.user.setActivity(statuslist[random], { type: 'WATCHING' });
 }, 10000);

client.user.setStatus("online");

if (process.env.DASHBOARD = "true" || config.sessionSecret, false || config.secret, false || config.domain, false) {
 const Dashboard = require("../../dashboard/dashboard");
 Dashboard(client);
} else {
 console.log(chalk.blue('Dashboard is now disabled. To enable it change the "DASHBOARD" value in .env file to "true" (Now is set to "') + chalk.blue.underline(`${config.dashboard}`) + chalk.blue('")') + chalk.blue.underline("\n" + client.user.username + " stats: " + `${client.guilds.cache.size}` + " servers, " + `${client.guilds.cache.reduce((a, g) => a + g.memberCount, 0)}` + " members"));
}
console.log(chalk.blue("Connected! Logged in as ") + chalk.blue.underline(`${client.user.username} ${client.user.tag}`) + chalk.blue("!"));
} catch(err) {
 console.log(err);
}
}