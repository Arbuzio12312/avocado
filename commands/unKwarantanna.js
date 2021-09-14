const Discord = require("discord.js");

const tak = '<a:ta:782965898885333032>';
const nie = '<a:ne:792020013023232021>';
const Rola1 = '782728348718596096'; // Nie zarejestrowany
const SadDino = '<:dinosad:792473409715961857>';
const dino = '<:DinoWithHeart:792473366447521833>';

module.exports = {
    name: "unKwarantanna",
    category: "admin",
    aliases: ["unkwarantanna", "Kwarantanna"],
    description: "Wypuszcza uzytkownika z klatki",
    cooldown: 0,
    usage: "$unKwarantanna <user>",
    run: async (client, msg, args) => {
        
        const user = msg.mentions.members.first();

        if (msg.member.roles.cache.some((role) => role.id === `${Rola1}`)) {
            msg.react(`${nie}`);
            return msg.author.send('Najpierw zarejestruj się'+`${nie}`);
        }
        
        if (!msg.member.hasPermission('ADMINISTRATOR')) {
            msg.react(`${nie}`);
            return msg.reply('Nie jesteś administratorem'+`${nie}`);
        }

        if (!user) {
            msg.react(`${nie}`);
            return msg.reply('Musisz oznaczyć użytkownika'+`${nie}`);
        }

        if (!user.roles.cache.some((role) => role.id === '792370369179680780')) {
            msg.react(`${nie}`);
            return msg.reply('Ten użytkownik nie jest w klatce'+`${nie}`);
        }

        user.roles.add('782728341676621864');
        user.roles.remove('792370369179680780');
        msg.react(`${tak}`);
        msg.reply('Wypuściłeś/aś użytkownika');
        
        const info1 = new Discord.MessageEmbed;
        const info2 = new Discord.MessageEmbed;

        info1.setTitle('**KONIEC KWARANTANNY**'+`${dino}`);
        info1.setDescription('Zostałeś/aś wypuszczony/a przez '+`<@${msg.author.id}>`+`${dino}`);
        info1.setColor('#15ff00');
        info1.setFooter(msg.member.user.username, msg.author.displayAvatarURL({ dynamic : true }));
        info2.setTitle(`**UŻYTKOWNIK**`+' **ZOSTAŁ/A WYPUSZCZONY/A**'+`${dino}`);
        info2.setDescription(`${user}`+' został/a wypuszczony/a przez '+`<@${msg.author.id}>`);
        info2.setColor('#15ff00');
        info2.setFooter(msg.member.user.username, msg.author.displayAvatarURL({ dynamic : true }));

        user.send(info1);
        msg.guild.channels.cache.get('789564676006477854').send(info2);
    }
}