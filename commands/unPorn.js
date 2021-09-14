const tak = '<a:ta:782965898885333032>';
const nie = '<a:ne:792020013023232021>';
const Rola1 = '782728348718596096'; // Nie zarejestrowany
const SadDino = '<:dinosad:792473409715961857>';
const dino = '<:DinoWithHeart:792473366447521833>';

module.exports = {
    name: "unPorn",
    aliases: ["unporn", "UnPorn"],
    description: "komenda wylacza mozliwosc ogladania porna",
    category: "pornole",
    cooldown: 0,
    usage: "$unPorn",
    run: async (client, msg, args) => {
        if (msg.member.roles.cache.some((role) => role.id === `${Rola1}`)) {
            msg.react(`${nie}`);
            return msg.author.send('Najpierw musisz się zarejestrować!' + `${nie}`);
        }
        if (!msg.member.roles.cache.some((role) => role.id === '792136656471851018')) {
            msg.react(`${nie}`);
            return msg.author.send('Nie masz włączonej możliwości oglądania porna!' + `${nie}`);
        }
        msg.member.roles.remove('792136656471851018');
        msg.author.send('od teraz masz wyłączoną możliwość oglądania porna!' + `${tak}`);
        msg.react(`${tak}`);
    }
}