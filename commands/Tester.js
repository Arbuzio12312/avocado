const tak = '<a:ta:782965898885333032>';
const nie = '<a:ne:792020013023232021>';
const Rola1 = '782728348718596096'; // Nie zarejestrowany
const SadDino = '<:dinosad:792473409715961857>';
const dino = '<:DinoWithHeart:792473366447521833>';

module.exports = {
    name: "Tester",
    aliases: ["tester", "Tester"],
    description: "Ta komenda sprawia ze zostajesz testerem",
    category: "pomoc",
    cooldown: 0,
    usage: "$Tester",
    run: async (client, msg, args) => {

        if (msg.member.roles.cache.some((role) => role.id === '792370369179680780')) {
            msg.react(`${nie}`);
            return msg.reply('Jesteś zamknięty/a więc nie możesz użyć tego' + `${SadDino}` ); 
        }

        if (msg.member.roles.cache.some((role) => role.id === `${Rola1}`)) {
            msg.react(`${nie}`);
            return msg.author.send('Najpierw zarejestruj się!' + `${nie}`);
        }

        if (msg.member.roles.cache.some((role) => role.id === '782961436384428033')) {
            msg.react(`${nie}`);
            return msg.author.send('Jesteś już testerem!' + `${nie}`);
        }

        msg.member.roles.add('782961436384428033');
        msg.author.send('Zostałeś właśnie testerem!' + `${dino}`);
        msg.react(`${tak}`);
    }
}