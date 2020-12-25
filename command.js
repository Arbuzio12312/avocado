const { prefix } = require('./config.json');

module.exports = (client, aliases, callback) => {
    if (typeof aliases === 'string') {
        aliases = [aliases]
    }
    client.on('message', msg => {
        const { content } = msg;

        aliases.forEach((alias) => {
            const command = `${prefix}${alias}`

            if (content.startsWith(`${command} `) || content === command) {
                console.log(`running the command ${command}`);
                callback(msg);
            }
        })
    })
}