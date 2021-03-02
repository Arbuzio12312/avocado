const Discord = require('discord.js');
const tak = '<a:ta:782965898885333032>';
const nie = '<a:ne:792020013023232021>';
const Rola1 = '782728348718596096';
const SadDino = '<:dinosad:792473409715961857>';
const dino = '<:DinoWithHeart:792473366447521833>';

module.exports = {
    name: "Unlock",
    category: "proznia",
    aliases: ["Unlock", "unlock"],
    description: "wychodzisz z próżni",
    cooldown: 0,
    usage: "$Unlock <code>",
    run: async (client, msg, args) => {
        if (!msg.member.roles.cache.some((role) => role.id === '816327936629669971')) {
            return msg.reply(':)');
        }
        const code = "Agnieszka";
        const kod = args.slice(1).join(" ");
        
        if(!kod) {
            msg.react(`${nie}`);
            return msg.reply('Musisz podać kod!'+`${nie}`);
        }
        
        if(kod != `${code}`) {
            msg.delete();
        }
    }
}