const Discord = require('discord.js')
const tak = '<a:ta:782965898885333032>';
const nie = '<a:ne:792020013023232021>';
const Rola1 = '782728348718596096'; // Nie zarejestrowany
const SadDino = '<:dinosad:792473409715961857>';
const dino = '<:DinoWithHeart:792473366447521833>';

module.exports = {
    name: "Mute",
    aliases: ["mute", "Mute"],
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

        const powod = args.slice(1).join(" ");
        
        msg.reply(`${powod}`);

    }
}