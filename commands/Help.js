const Discord = require('discord.js')
const tak = '<a:ta:782965898885333032>';
const nie = '<a:ne:792020013023232021>';
const Rola1 = '782728348718596096';
const SadDino = '<:dinosad:792473409715961857>';
const dino = '<:DinoWithHeart:792473366447521833>';

module.exports = {
    name: "Help",
    aliases: ["Help", "help"],
    category: "pomoc",
    cooldown: 0,
    description: "komenda od pomocy",
    usage: "$Help",
    run: async (client, msg, args) => {
        if (msg.member.roles.cache.some((role) => role.id == `${Rola1}`)) {
            msg.react(`${nie}`);
            return msg.author.send('Najpierw zarejestruj się! ' + `${nie}`);
        }
        msg.react(`${tak}`);
        const embed = new Discord.MessageEmbed();
        embed.setColor(msg.member.displayHexColor);
        embed.setTitle('**Komendy bota**');
        embed.setDescription('**KOMENDY PODSTAWOWE** \n `$Help` - pokazuje wszystkie komendy \n `$Porn` - umożliwia oglądanie porna \n `$unPorn` - usuwa możliwość oglądania porna \n `$Tester` - zostajesz testerem pewnych rzeczy \n `$unTester` - przestajesz być testerem \n `$Report` <użytkownik> <powód> - zgłaszasz innego członka serwera \n \n **KOMENDY ADMINISTRATORA** \n `$Kwarantanna` <użytkownik> <powód> - wysyła użytkownika do klatki \n `$unKwarantanna` <użytkownik> - wypuszcza użytkownika z klatki');
        embed.setFooter(msg.member.user.username, msg.author.displayAvatarURL({ dynamic: true }));
        msg.channel.send(embed);
        const informacja = new Discord.MessageEmbed();
        informacja.setColor('RANDOM');
        informacja.setTitle('**INFORMACJA*');
        informacja.setDescription('Bot jest wciąż podczas robienia'+`${dino}`+'\n Więc proszę o małe oczekiwania co do bota');
        msg.channel.send(informacja);
    }
}