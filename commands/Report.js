const Discord = require('discord.js');
const tak = '<a:ta:782965898885333032>';
const nie = '<a:ne:792020013023232021>';
const Rola1 = '782728348718596096';
const SadDino = '<:dinosad:792473409715961857>';
const dino = '<:DinoWithHeart:792473366447521833>';

module.exports = {
    name: "Report",
    aliases: ["report", "Report"],
    category: "pomoc",
    description: "Zglasza uzytkownika",
    cooldown: 0,
    usage: "$Report @user [powod]",
    run: async (client, msg, args) => {
        
        const zgloszony = msg.mentions.members.first();
        const powod = args.slice(1).join(" ");

        if (msg.member.roles.cache.some((role) => role.id === `${Rola1}`)) {
            msg.react(`${nie}`);
            return msg.author.send('Najpierw zarejestruj się'+`${nie}`);
        }

        if(!zgloszony) {
            msg.react(`${nie}`);
            return msg.reply('Musisz oznaczyć użytkownika'+`${nie}`);
        }

        if (zgloszony.roles.cache.some((role) => role.id === '796418823657750590')) {
            msg.react(`${SadDino}`);
            return msg.reply('Chciałeś mnie zgłosić?...'+`${SadDino}`);
        }

        if (zgloszony.roles.cache.some((role) => role.id === '775090536432402432')) {
            msg.react(`${nie}`);
            return msg.reply('Nie możesz zgłosić bota'+`${nie}`);
        }

        if (!powod) {
            msg.react(`${nie}`);
            return msg.reply('Musisz podać powód'+`${nie}`);
        }

        msg.react(`${tak}`);
        msg.reply('Zgłoszenie zostało wysłane do administracji!'+`${tak}`);
        msg.guild.channels.cache.get('797177518691844097').send('Nowe zgłoszenie! <@&789561458521800764>');

        const zgloszenie = new Discord.MessageEmbed;

        zgloszenie.setTitle('**ZGŁOSZENIE**');
        zgloszenie.setDescription(`<@${msg.author.id}>`+' zgłasza '+`${zgloszony} `+'\n POWÓD: \n ```'+`${powod}`+'```');
        zgloszenie.setColor('#a900f7');
        zgloszenie.setFooter(msg.member.user.username, msg.author.displayAvatarURL({ dynamic : true }));

        msg.guild.channels.cache.get('797177518691844097').send(zgloszenie);
        
    }
}