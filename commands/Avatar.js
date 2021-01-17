const Discord = require('discord.js')
const tak = '<a:ta:782965898885333032>';
const nie = '<a:ne:792020013023232021>';
const Rola1 = '782728348718596096';
const SadDino = '<:dinosad:792473409715961857>';
const dino = '<:DinoWithHeart:792473366447521833>';

module.exports = {
    name: "Avatar",
    aliases: ["Avatar", "avatar"],
    description: "pokazuje czyjs avatar",
    category: "informacje",
    cooldown: 0,
    usage: "$avatar @user",
    run: async (client, msg, args) => {
        
        if (msg.member.roles.cache.some((role) => role.id === `${Rola1}`)) {
            msg.react(`${nie}`);
            return msg.author.send('Najpierw zarejestruj się'+`${nie}`);
        }

        const user = msg.mentions.members.first();

        const info = new Discord.MessageEmbed;

        if (!user) {
            info.setTitle(`${msg.author.username}`+' avatar');
            info.setColor('RANDOM');
            info.setImage(msg.author.displayAvatarURL({ dynamic : true }));

            return msg.channel.send(info);
        }

        info.setTitle(`${user.username}`+' avatar');
        info.setColor('RANDOM');
        info.setImage(user.displayAvatarURL({dynamic: true}));

        msg.channel.send(info);
    }
}