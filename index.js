const Discord = require('discord.js');
const client = new Discord.Client();
const { prefix } = require('./config.json');
const fs = require('fs');
client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
const tak = '<a:ta:782965898885333032>';
const nie = '<a:ne:792020013023232021>';
const Rola1 = '782728348718596096';
const SadDino = '<:dinosad:792473409715961857>';
const dino = '<:DinoWithHeart:792473366447521833>';

client.login(process.env.TOKEN)

for(const file of commandFiles){
  const command = require(`./commands/${file}`);
  client.commands.set(command.name, command);
}

client.on('message', msg => {
  if (!msg.content.startsWith(prefix) || msg.author.bot) return;


  const args = msg.content.slice(prefix.length).trim().split(/ +/);
  const command = args.shift().toLowerCase();

  if(!client.commands.has(command)) return;
  try {
      client.commands.get(command).execute(msg, args);
  }catch(error){
      console.error(error);
      msg.reply('Wystąpił błąd'+`${SadDino}`)
  }
})


client.on('ready', () => {
  console.log(`Zalogowano jako ${client.user.tag}!!`);
});
