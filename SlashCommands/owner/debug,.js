const { Client, CommandInteraction, MessageEmbed } = require("discord.js");
const {inspect} = require("util");
module.exports = {
    name: "debug",
    description: "admin debug",
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

        await interaction.followUp("test");

    },
};
