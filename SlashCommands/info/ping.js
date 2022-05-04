const { Client, CommandInteraction, MessageEmbed } = require("discord.js");

module.exports = {
    name: "ping",
    description: "returns websocket ping",
    type: 'CHAT_INPUT',// MESSAGE,USER(右鍵指令)
    perms: "",//權限
    ephemeral: false,//只有自己看見
    status: true,//啟用停用指令
    /**
     *
     * @param {Client} client
     * @param {CommandInteraction} interaction
     * @param {String[]} args
     */
    run: async (client, interaction, args) => {
        let pingEmbed = new MessageEmbed()
            .setColor('BLUE')
            .setAuthor({name: 'pinging'})
            .setDescription('');
            await interaction.followUp({embeds: [pingEmbed]}).then(async i => {
                try{
                    pingEmbed = new MessageEmbed()
                        .setColor('BLUE')
                        .setAuthor({name: 'pinging'})
                        .setDescription('.')
                        .setTimestamp()
                        .setFooter({text: interaction.client.user.tag, iconURL: interaction.client.user.displayAvatarURL()})
                    await interaction.editReply({embeds: [pingEmbed]});
                    pingEmbed = new MessageEmbed()
                        .setColor('BLUE')
                        .setAuthor({name: 'pinging'})
                        .setDescription('..')
                        .setTimestamp()
                        .setFooter({text: interaction.client.user.tag, iconURL: interaction.client.user.displayAvatarURL()})
                    await interaction.editReply({embeds: [pingEmbed]});
                    pingEmbed = new MessageEmbed()
                        .setColor('BLUE')
                        .setAuthor({name: 'pinging'})
                        .setDescription('...')
                        .setTimestamp()
                        .setFooter({text: interaction.client.user.tag, iconURL: interaction.client.user.displayAvatarURL()})
                    await interaction.editReply({embeds: [pingEmbed]});
                    pingEmbed = new MessageEmbed()
                        .setColor('BLUE')
                        .setAuthor({name: 'pong!'})
                        .setDescription(`🏓 Bot's latency: ${i.createdTimestamp - interaction.createdTimestamp}ms. API's latency': ${Math.round(client.ws.ping)}ms`)
                        .setTimestamp()
                        .setFooter({text: interaction.client.user.tag, iconURL: interaction.client.user.displayAvatarURL()})
                    await interaction.editReply({embeds: [pingEmbed]});
                }catch(e){
                    pingEmbed = new MessageEmbed()
                        .setColor('RED')
                        .setTitle('⚠️ An error occurred')
                        .setTimestamp()
                        .setFooter({text: interaction.client.user.tag, iconURL: interaction.client.user.displayAvatarURL()})
                    interaction.editReply({embeds: [pingEmbed]}).catch();
                }
            },
        );
    },
};
