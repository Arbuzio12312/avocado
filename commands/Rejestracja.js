const Discord = require('discord.js');
const tak = '<a:ta:782965898885333032>';
const nie = '<a:ne:792020013023232021>';
const Rola1 = '782728348718596096';
const SadDino = '<:dinosad:792473409715961857>';
const dino = '<:DinoWithHeart:792473366447521833>';

module.exports = {
    name: "Rejestracja",
    aliases: ["Rejestracja", "rejestracja"],
    description: "Komenda od rejestracji na serwer",
    category: "start",
    cooldown: 0,
    usage: "$Rejestracja",
    run: async (client, msg, args) => {
        if (msg.member.roles.cache.some((role) => role.id === '816327936629669971')) {
            msg.react(`${nie}`);
            const akysz = new Discord.MessageEmbed;
            akysz.setColor('#000000');
            akysz.setTitle('You are in black hole :)');
            akysz.setImage('https://cdn.discordapp.com/attachments/679843963762769975/795746859015733288/unknown.png');
            return msg.channel.send(`${akysz}`);
        }
        if (msg.member.roles.cache.some((role) => role.id === '792370369179680780')) {
            msg.react(`${nie}`);
            return msg.reply('Jesteś zamknięty'+`${SadDino}`);
        }

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
        msg.react(`${tak}`);
    }
}