const Discord = require('discord.js');
const client = new Discord.Client();
const Prefix = '$';
const command = require('./command');
const tak = '<a:ta:782965898885333032>';
const nie = '<a:ne:792020013023232021>';
const Rola1 = '782728348718596096';

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  command(client, 'Help', (msg) => {
    if(msg.member.roles.cache.some((role) => role.id == `${Rola1}`)) {
      msg.author.send('Najpierw zarejestruj się :c! '+`${nie}`);
    } else {
      const embed = new Discord.MessageEmbed();
      embed.setColor(msg.member.displayHexColor);
      embed.setTitle('**Komendy bota**');
      embed.setDescription('**KOMENDY PODSTAWOWE** \n $Help - pokazuje wszystkie komendy \n $Avatar - pokazuje avatar uzytkownika \n $Profil - pokazuje profil użytkownika \n $Porn - umożliwia oglądanie porna');
      embed.setFooter(msg.member.user.username, msg.author.displayAvatarURL({dynamic : true}));
      msg.channel.send(embed);
    }
  });

  command(client, 'Rejestracja', (msg) => {
    if (msg.member.roles.cache.some((role) => role.id === '782728341676621864')) {
      msg.author.send('Jesteś już zarejestrowany!'+`${nie}`);
    } else{
      msg.member.roles.add('782728341676621864');
      msg.member.roles.remove(`${Rola1}`);
      msg.author.send('Zarejestrowales sie!'+`${tak}`);
      const EmbedMessage = new Discord.MessageEmbed;
      EmbedMessage.setColor('#00d0ff');
      EmbedMessage.setTitle('**NOWY CZŁONEK**');
      EmbedMessage.setDescription(`${msg.author.username} `+'Właśnie się zarejestrował!'+`${tak}`);
      EmbedMessage.setFooter(msg.member.user.username, msg.author.displayAvatarURL({dynamic : true}));
      msg.guild.channels.cache.get('784866080014204938').send(EmbedMessage);
    }
    
  });

  command(client, 'Porn', msg => {
    if (msg.member.roles.cache.some((role) => role.id === `${Rola1}`)) {
      msg.author.send('Najpierw musisz się zarejestrować!'+`${nie}`);
    }
    else{
      msg.member.roles.add('792136656471851018');
      msg.author.send('od teraz masz możliwość oglądania porna!'+`${tak}`);
    }
  })
});

client.login(process.env.TOKEN);