const { Client, CommandInteraction, MessageEmbed } = require("discord.js");

module.exports = {
    name: "setting",
    description: "setting of the bot",
    type: 'CHAT_INPUT',// MESSAGE,USER(右鍵指令)
    perms: "",//權限
    ephemeral: false,//只有自己看見
    status: true,//啟用停用指令
    options: [
        {
            name: 'ignore-channel',
            description: 'the channel that the bot will ignore',
            type: 'SUB_COMMAND_GROUP',
            options: [
                {
                    name: 'set',
                    description: 'set the channel that the bot will ignore',
                    type: 'SUB_COMMAND',
                    options: [
                        {
                            name: 'channel',
                            description: 'the channel that the bot will ignore',
                            type: 'CHANNEL',
                            channelTypes: ['GUILD_TEXT'],
                        }
                    ]
                },
                {
                    name: 'remove',
                    description: 'remove the channel that the bot will ignore',
                    type: 'SUB_COMMAND',
                    options: [
                        {
                            name: 'channel',
                            description: 'the channel that the bot will ignore',
                            type: 'CHANNEL',
                            channelTypes: ['GUILD_TEXT'],
                        }
                    ]
                },
                {
                    name: 'list',
                    description: 'list the channel that the bot will ignore',
                    type: 'SUB_COMMAND',
                }
            ]
        },
    ],
    /**
     *
     * @param {Client} client
     * @param {CommandInteraction} interaction
     * @param {String[]} args
     */
    run: async (client, interaction, args) => {
        if(interaction.member.user.id !== interaction.guild.ownerId) return interaction.followUp({embeds: [new MessageEmbed().setColor('RED').setTitle(`❌ Error`).setDescription(`You are not the owner of this server.`).setTimestamp().setFooter({text: interaction.client.user.tag, iconURL: interaction.client.user.displayAvatarURL()})]}).catch();
        const cmd = interaction.options.getSubcommandGroup();
        const cmd2 = interaction.options.getSubcommand();
        if(cmd === 'ignore-channel'){
            if(cmd2 === 'set') {
                const channel = interaction.options.getChannel('channel');
            };
            if(cmd2 === 'remove') {
                const channel = interaction.options.getChannel('channel');
            };
            if(cmd2 === 'list') {
                
            };
        };
    }
};