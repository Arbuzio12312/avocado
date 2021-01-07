const Discord = require('discord.js');
const chalk = require('chalk');
const prefix = '$';
module.exports = async (client, message) => {
    try {
        const queue = new Map();
        if (message.author.bot) return;
        if (!message.guild) return;
        if (message.content === `<@${client.user.id}>` || message.content === `<@!${client.user.id}>`) {
            const embed = new Discord.MessageEmbed()
            embed.setTitle(`Witaj!`, message.guild.iconURL())
            embed.setColor('RANDOM')
            embed.setDescription("Jestem " + client.user.username + "! Mój prefix to `$` wpisz `" + prefix + 'Help` żeby zobaczyć wszystkie komendy')
            embed.setTimestamp()
            return message.channel.send(embed);
        }

        if (!message.content.startsWith(prefix)) return;
        if (!message.member) message.member = await message.guild.fetchMember(message);
        const args = message.content.slice(prefix.length).trim().split(/ +/g);
        const cmd = args.shift().toLowerCase();
        if (cmd.length === 0) return;
        let command = client.commands.get(cmd);
        if (!command) command = client.commands.get(client.aliases.get(cmd));
        if (!command) {
            return message.channel.send({ embed: { color: 16734039, description: "Ta komenda nie istnieje, wpisz `" + `${prefix}` + "help` żeby poznać komendy" } });
        }

        if (command) {
            return command.run(client, message, args);
        }
    } catch (err) {
        console.log(err);
        return message.channel.send({ embed: { color: 16734039, description: "That command does not exist, Take a look at " + `${prefix}` + " help!" } });
    }
}