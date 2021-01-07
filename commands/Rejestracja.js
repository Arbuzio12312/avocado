const Discord = require('discord.js');
const tak = '<a:ta:782965898885333032>';
const nie = '<a:ne:792020013023232021>';
const Rola1 = '782728348718596096';
const SadDino = '<:dinosad:792473409715961857>';
const dino = '<:DinoWithHeart:792473366447521833>';

module.exports = {
    name: "Rejestracja",
    aliases: ["register"],
    description: "Komenda od rejestracji na serwer",
    category: "start",
    usage: "wpisujesz komende",
    run: async (client, msg, args) => {
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