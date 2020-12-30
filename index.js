const Discord = require('discord.js');
const client = new Discord.Client();
const command = require('./command');
const tak = '<a:ta:782965898885333032>';
const nie = '<a:ne:792020013023232021>';
const Rola1 = '782728348718596096';
const SadDino = '<:dinosad:792473409715961857>';
const dino = '<:DinoWithHeart:792473366447521833>';

client.login(process.env.TOKEN);

client.on('ready', () => {
  console.log(`Zalogowano jako ${client.user.tag}!`);
  command(client, 'Help', (msg) => {
    if (msg.member.roles.cache.some((role) => role.id == `${Rola1}`)) {
      msg.react(`${nie}`);
      return msg.author.send('Najpierw zarejestruj się! ' + `${nie}`);
    }
    const embed = new Discord.MessageEmbed();
    embed.setColor(msg.member.displayHexColor);
    embed.setTitle('**Komendy bota**');
    embed.setDescription('**KOMENDY PODSTAWOWE** \n $Help - pokazuje wszystkie komendy \n `$Porn` - umożliwia oglądanie porna \n `$unPorn` - usuwa możliwość oglądania porna \n `$Tester` - zostajesz testerem pewnych rzeczy \n `$unTester` - przestajesz być testerem \n \n **KOMENDY ADMINISTRATORA** \n `$Kwarantanna` <użytkownik> - wysyła użytkownika do klatki \n `$unKwarantanna` <użytkownik> - wypuszcza użytkownika z klatki');
    embed.setFooter(msg.member.user.username, msg.author.displayAvatarURL({ dynamic: true }));
    msg.channel.send(embed);
  });

  command(client, 'Rejestracja', (msg) => {
    if (msg.member.roles.cache.some((role) => role.id === '782728341676621864')) {
      msg.react(`${nie}`);
      return msg.author.send('Jesteś już zarejestrowany/a!' + `${nie}`);
    }
    msg.member.roles.add('782728341676621864');
    msg.member.roles.remove(`${Rola1}`);
    msg.author.send('Zarejestrowales/as sie!' + `${tak}`);
    msg.delete;
    const EmbedMessage = new Discord.MessageEmbed;
    EmbedMessage.setColor('#00d0ff');
    EmbedMessage.setTitle('**NOWY CZŁONEK**');
    EmbedMessage.setDescription(`${msg.author.username} ` + 'Właśnie się zarejestrował/a!' + `${tak}`);
    EmbedMessage.setFooter(msg.member.user.username, msg.author.displayAvatarURL({ dynamic: true }));
    msg.guild.channels.cache.get('784866080014204938').send(EmbedMessage);
  });

  command(client, 'Porn', msg => {
    if (msg.member.roles.cache.some((role) => role.id === `${Rola1}`)) {
      msg.react(`${nie}`);
      return msg.author.send('Najpierw musisz się zarejestrować!' + `${nie}`);
    }
    if (msg.member.roles.cache.some((role) => role.id === '792136656471851018')) {
      msg.react(`${nie}`);
      return msg.author.send('Masz już możliwość oglądania porna!' + `${nie}`);
    }
    msg.member.roles.add('792136656471851018');
    msg.author.send('Od teraz masz możliwość oglądania porna!' + `${tak}`);
    msg.react(`${tak}`);
  });

  command(client, 'unPorn', msg => {
    if (msg.member.roles.cache.some((role) => role.id === `${Rola1}`)) {
      msg.react(`${nie}`);
      return msg.author.send('Najpierw musisz się zarejestrować!' + `${nie}`);
    }
    if (!msg.member.roles.cache.some((role) => role.id === '792136656471851018')) {
      msg.react(`${nie}`);
      return msg.author.send('Nie masz włączonej możliwości oglądania porna!' + `${nie}`);
    }
    msg.member.roles.remove('792136656471851018');
    msg.author.send('od teraz masz wyłączoną możliwość oglądania porna!' + `${tak}`);
    msg.react(`${tak}`);
  })

  command(client, 'Kwarantanna', msg => {
    const gryz = msg.mentions.members.first();
    if (!msg.member.hasPermission('ADMINISTRATOR')) {
      msg.react(`${nie}`);
      return msg.author.send('Nie jesteś administratorem' + `${nie}`);
    }
    if (!gryz) {
      return msg.reply('Musisz oznaczyć użytkownika' + `${nie}`);
    }
    if (gryz.roles.cache.some((role) => role.id === `792370369179680780`)) {
      return msg.reply('Ten użytkownik jest już w klatce' + `${nie}`);
    }
    if (gryz.hasPermission('ADMINISTRATOR')) {
      return msg.reply('Nie możesz wsadzić administratora do klatki' + `${nie}`);
    }
    gryz.roles.add('792370369179680780');
    gryz.roles.remove('782728341676621864');
    msg.reply(`${gryz} ` + 'został wrzucony do klatki!' + `${tak}`);
    const info = new Discord.MessageEmbed;
    info.setTitle('**ZOSTAŁEŚ WRZUCONY DO KLATKI**');
    info.setDescription(`${msg.author.username} ` + 'wrzucił cie do klatki!' + `${SadDino}`);
    info.setColor('#ff1500');
    gryz.send(info);
    const ogloszenie = new Discord.MessageEmbed;
    ogloszenie.setTitle('Użytkownik został wrzucony do klatki!' + `${SadDino}`);
    ogloszenie.setDescription(`${gryz}` + ' został wrzucony przez ' + `${msg.author.username}` + '!');
    ogloszenie.setColor('#ff1500');
    msg.guild.channels.cache.get('782973174350086204').send(ogloszenie);
  })

  command(client, 'unKwarantanna', msg => {
    if (!msg.member.hasPermission('ADMINISTRATOR')) {
      msg.react(`${nie}`);
      return msg.author.send('Nie jesteś administratorem' + `${nie}`);
    }
    const gryz = msg.mentions.members.first();
    if (!gryz) {
      return msg.reply('Musisz oznaczyć użytkownika' + `${nie}`);
    }
    if (!gryz.roles.cache.some((role) => role.id === '792370369179680780')) {
      return msg.reply('Ten użytkownik nie jest w klatce' + `${nie}`);
    }
    gryz.roles.add('782728341676621864');
    gryz.roles.remove('792370369179680780');
    msg.reply(`${gryz} ` + 'został wypuszczony z klatki!' + `${tak}`);
    const info = new Discord.MessageEmbed;
    info.setTitle('**ZOSTAŁEŚ WYPUSZCZONY**');
    info.setDescription('Zostałeś wypuszczony przez ' + `${msg.author.username}`);
    info.setColor('#3afc05');
    const ogloszenie = new Discord.MessageEmbed;
    ogloszenie.setTitle('Użytkownik został wypuszczony!' + `${dino}`);
    ogloszenie.setDescription(`${gryz} ` + 'został wypuszczony przez ' + `${msg.author.username}`);
    ogloszenie.setColor('#3afc05');
    gryz.send(info);
    msg.guild.channels.cache.get('782973174350086204').send(ogloszenie);
    const powod = msg.content;
    msg.reply(`${powod}`);
  })

  command(client, 'Tester', msg => {
    if (msg.member.roles.cache.some((role) => role.id === `${Rola1}`)) {
      msg.react(`${nie}`);
      return msg.author.send('Najpierw zarejestruj się!' + `${nie}`);
    }
    if (msg.member.roles.cache.some((role) => role.id === '782961436384428033')) {
      msg.react(`${nie}`);
      return msg.author.send('Jesteś już testerem!' + `${nie}`);
    }
    msg.member.roles.add('782961436384428033');
    msg.author.send('Zostałeś właśnie testerem!' + `${dino}`);
    msg.react(`${tak}`);
  })

  command(client, 'unTester', msg => {
    if (msg.member.roles.cache.some((role) => role.id == `${Rola1}`)) {
      msg.react(`${nie}`);
      return msg.author.send('Najpierw zarejestruj się!' + `${nie}`);
    }
    if (!msg.member.roles.cache.some((role) => role.id === '782961436384428033')) {
      msg.react(`${nie}`);
      return msg.author.send('Nie jesteś testerem!' + `${nie}`);
    }
    msg.react(`${tak}`);
    msg.member.roles.remove('782961436384428033');
    msg.author.send('Przestałeś być testerem!' + `${SadDino}`);
  })
})