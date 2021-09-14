const tak = '<a:ta:782965898885333032>';
const nie = '<a:ne:792020013023232021>';
const Rola1 = '782728348718596096'; // Nie zarejestrowany
const SadDino = '<:dinosad:792473409715961857>';
const dino = '<:DinoWithHeart:792473366447521833>';

module.exports = {
    name: "unTester",
    aliases: ["unTester", "untester"],
    description: "przestajesz byc testerem",
    cooldown: 0,
    category: "pomoc",
    usage: "$unTester",
    run: async (client, msg, args) => {
        if (msg.member.roles.cache.some((role) => role.id == `${Rola1}`)) {
            msg.react(`${nie}`);
            return msg.author.send('Najpierw zarejestruj się!' + `${nie}`);
        }
        if (!msg.member.roles.cache.some((role) => role.id === '782961436384428033')) {
            msg.react(`${nie}`);
            return msg.author.send('Nie jesteś testerem!' + `${nie}`);
        }
        msg.react(`${tak}`);
        msg.member.roles.remove('782961436384428033');
        msg.author.send('Przestałeś być testerem!' + `${SadDino}`);

    }
}