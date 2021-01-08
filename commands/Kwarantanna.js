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
        if (msg.member.roles.cache.some((role) => role.id === `${Rola1}`)) {
            msg.react(`${nie}`);
            return msg.author.send('Najpierw musisz zarejestrować się'+`${nie}`);
        }
        if (!msg.member.hasPermission('ADMINISTRATOR')) {
            msg.react(`${nie}`);
            return msg.reply('Nie jesteś administratorem'+`${nie}`)
        }

        const gryz = msg.mentions.members.first();
        const powod = args.slice(1).join(" ");

        if (!gryz) {
            msg.react(`${nie}`);
            return msg.reply('Musisz oznaczyć użytkownika'+`${nie}`);
        }

        if (gryz.roles.cache.some((role) => role.id === '796418823657750590')) {
            msg.react(`${SadDino}`);
            return msg.reply('Czy ty chciałeś mnie zamknąć?...'+`${SadDino}`);
        }

        if (gryz.roles.cache.some((role) => role.id === '789561458521800764')) {
            msg.react(`${nie}`);
            return msg.reply('Nie możesz wsadzić administratora do klatki'+`${nie}`);
        }

        if (gryz.roles.cache.some((role) => role.id == "775090536432402432")) {
            msg.react(`${nie}`);
            return msg.reply('Nie możesz wsadzić bota do klatki'+`${nie}`);
        }

        if (!powod) {
            msg.react(`${nie}`);
            return msg.reply('Musisz podać powód'+`${nie}`);
        }

    }
}