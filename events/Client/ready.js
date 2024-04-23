const { log } = require("../../functions");
const ExtendedClient = require('../../class/ExtendedClient');
const { ActivityType } = require("discord.js");
module.exports = {
    event: 'ready',
    once: true,
    /**
     * 
     * @param {ExtendedClient} _ 
     * @param {import('discord.js').Client<true>} client 
     * @returns 
     */
    run: async (_, client) => {

        log('Logged in as: ' + client.user.tag, 'done');
        let guilds = client.guilds.cache.size
        let users = await client.guilds.cache.reduce((a, b) => a + b.memberCount, 0)
        const activity = [
            `/help | ${guilds} servers`,
            `/help | ${users} users`
        ]

        setInterval(() => {
            const botStatus = activity[Math.floor(Math.random() * activity.length)];
            client.user.setPresence({ activities: [{ name: `${botStatus}`, type: ActivityType.Watching }] });
        }, 3000);
    }
};