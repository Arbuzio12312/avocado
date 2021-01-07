const tak = '<a:ta:782965898885333032>';
const nie = '<a:ne:792020013023232021>';
const Rola1 = '782728348718596096';
const SadDino = '<:dinosad:792473409715961857>';
const dino = '<:DinoWithHeart:792473366447521833>';

module.exports = {
    name: "Kwarantanna",
    description: "Wrzuca uzytkownika do klatki",
    aliases: ["Kwarantanna","kwarantanna"],
    category: "admin",
    cooldown: 0,
    usage: "$Kwarantanna @user [powod]",
    run: async (client, msg, args) => {
        if (msg.member.roles.cache.some((role) => role.id === `${rola1}`)) {
            msg.react(`${nie}`);
            return msg.author.send('Najpierw musisz zarejestrować się'+`${nie}`);
        }
        if (!msg.member.hasPermission('ADMINISTRATOR')) {
            msg.react(`${nie}`);
            return msg.reply('Nie jesteś administratorem'+`${nie}`)
        }

        const gryz = msg.mentions.members.first();

        if (!gryz) {
            msg.react(`${nie}`);
            return msg.reply('Musisz oznaczyć użytkownika'+`${nie}`);
        }

        if (gryz === `<@${client.user.id}>` || gryz === `<@!${client.user.id}>`) {
            msg.react(`${SadDino}`);
            return msg.reply('Czy ty chciałeś mnie zamnknąć?...'+`${SadDino}`);
        }

        if (gryz.roles.cache.some((role) => role.id === `792370369179680780`)) {
            msg.react(`${nie}`);
            return msg.reply('Nie możesz wsadzić administratora do klatki'+`${nie}`);
        }
        
        const powod = msg.args[1]

        msg.reply(`${powod}`);
    }
}