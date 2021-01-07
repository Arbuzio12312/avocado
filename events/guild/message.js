const Discord = require('discord.js');
const prefix = '$';
/* część autorstwa arbuza */
const tak = '<a:ta:782965898885333032>';
const nie = '<a:ne:792020013023232021>';
const Rola1 = '782728348718596096';
const SadDino = '<:dinosad:792473409715961857>';
const dino = '<:DinoWithHeart:792473366447521833>';
/* koniec części autorstwa arbuza */

/* autorem kodu którego zajebałem jest Igor kowalczyk */
module.exports = async (client, message) => {
 try {
  const queue = new Map();
  if (message.author.bot) return;
  if (!message.guild) return;
  if (message.content === `<@${client.user.id}>` || message.content === `<@!${client.user.id}>`) {
   const embed = new Discord.MessageEmbed()
    .setTitle(`Witaj!`, message.guild.iconURL())
    .setColor('RANDOM')
    .setDescription("Jestem " + client.user.username + "!  \n Mój prefix to `" + prefix + "`! \n Żeby poznać wszystkie komendy napisz `" + prefix + "Help`!")
    .setTimestamp()
   message.channel.send(embed);
  }

  if (!message.content.startsWith(prefix)) return;
  if (!message.member) message.member = await message.guild.fetchMember(message);
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const cmd = args.shift().toLowerCase();
  if (cmd.length === 0) return;
  let command = client.commands.get(cmd);
  if (!command) command = client.commands.get(client.aliases.get(cmd));
  if (!command) {
   message.channel.send({embed: {
    color: 16711680,
    title: "BŁĄD >:C"+`${nie}`,
    description: "Ta komenda nie istnieje" + `${SadDino}` + "\n wpisz `" +`${prefix}` + "help` żeby poznać wszystkie komendy"
   }});
  }

  if (command) {
   command.run(client, message, args);
  }
 } catch (err) {
  console.log(err);
  message.channel.send({embed: {
   color: 16711680,
   title: "BŁĄD >:C"+`${nie}`,
   description: "Ta komenda nie istnieje" + `${SadDino}` + "\n wpisz `" +`${prefix}` + "help` żeby poznać wszystkie komendy"
  }});
 }
} 