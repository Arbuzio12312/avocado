const Discord = require('discord.js')
const tak = '<a:ta:782965898885333032>';
const nie = '<a:ne:792020013023232021>';
const Rola1 = '782728348718596096'; // Nie zarejestrowany
const SadDino = '<:dinosad:792473409715961857>';
const dino = '<:DinoWithHeart:792473366447521833>';

module.exports = {
    name: "Mute",
    aliases: ["mute", "Mute", "m", "M"],
    description: "Wycisza jakiegos kretyna",
    category: "admin",
    cooldown: 0,
    usage: "$mute @user",
    run: async (client, msg, args) => {

        const kretyn = msg.mentions.members.first();

        if (msg.member.roles.cache.some((role) => role.id === `${Rola1}`)) {
            msg.react(`${nie}`);
            return msg.author.send('Najpierw zarejestruj się' + `${nie}`);
        }

        if (!msg.member.hasPermission("ADMINISTRATOR")) {
            msg.react(`${nie}`);
            return msg.author.send('Nie jesteś administratorem' + `${nie}`);
        }
        
        if (!kretyn) {
            msg.react(`${nie}`);
            return msg.reply("Musisz oznaczyć użytkownika" + `${nie}`);
        }

        if (kretyn.roles.cache.some((role) => role.id === '887127275894624336')) {
            msg.react(`${nie}`);
            return msg.reply('Ten użytkownik jest już wyciszony' + `${nie}`);
        }

        if (kretyn.roles.cache.some((role) => role.id === '796418823657750590')) {
            msg.react(`${nie}`);
            return msg.reply('Nie, nie zamknę sie');
        }

        if (kretyn.roles.cache.some((role) => role.id === '887299659402444840')) {
            msg.react(`${nie}`);
            return msg.reply('Nie możesz wyciszyć bota' + `${nie}`)
        }
        
        if (kretyn.roles.cache.some((role) => role.id === '789561458521800764')) {
            msg.react(`${nie}`);
            return msg.reply('nie możesz wyciszyć administratora' + `${nie}`);
        }

        const powod = args.slice(1).join(" ");
        
        if (!powod) {

            const ogloszenie = new Discord.MessageEmbed;

            ogloszenie.setTitle('**UŻYTKOWNIK ZOSTAŁ WYCISZONY**');
            ogloszenie.setDescription(`${kretyn}` + ' został/a wyciszony/a przez' + ` <@${msg.author.id}>` + '\n Powodu nie napisano');
            ogloszenie.setColor('#ff1500');
            ogloszenie.setFooter(msg.member.user.username, msg.author.displayAvatarURL({ dynamic : true }));

            info.setTitle('**MUTE**');
            info.setDescription(`<@${msg.author.id}>` + 'cie wyciszył/a \n Powodu nie napisano');
            info.setColor('#ff1500');
            info.setFooter('Administrator' + msg.member.user.username, msg.author.displayAvatarURL({ dynamic : true }))
            
            kretyn.send(info);
            msg.guild.channels.cache.get('789564676006477854').send(ogloszenie);

            return kretyn.roles.add('887127275894624336');
        }
        
        const ogloszenie = new Discord.MessageEmbed;
        const info = new Discord.MessageEmbed;

        info.setTitle('**MUTE**');
        info.setDescription(`<@${msg.author.id}>` + 'cie wyciszył/a \n Powód: ' + `${powod}`);
        info.setColor('#ff1500');
        info.setFooter('Administrator' + msg.member.user.username, msg.author.displayAvatarURL({ dynamic : true }))
        
        ogloszenie.setTitle('**UŻYTKOWNIK ZOSTAŁ WYCISZONY**');
        ogloszenie.setDescription(`${kretyn} ` + 'został/a wyciszony/a przez ' + `<@${msg.author.id}>` + '\n Powód: ' + `${powod}`);
        ogloszenie.setColor('#ff1500');
        ogloszenie.setFooter(msg.member.user.username, msg.author.displayAvatarURL({ dynamic : true }));

        msg.guild.channels.cache.get('789564676006477854').send(ogloszenie);
        kretyn.send(info);
        kretyn.roles.add('887127275894624336');
    }
}