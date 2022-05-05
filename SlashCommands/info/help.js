const { Client, CommandInteraction, MessageEmbed } = require("discord.js");
const {inspect} = require("util");
module.exports = {
    name: "help",
    description: "just help",
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
        const embed = new MessageEmbed()
        .setTitle("help 幫助")
        .setDescription("花了一天時間做出來的bot 挺簡陋的")
        .setColor("#e32636")
        .addFields(
            { name: "url", value: "支援nhentai以及pixiv站(Support for nhentai and pixiv)"},
            { name: "image", value: "/image <tag>"},
            { name: "nhentai", value: "/nhentai <number>"},
            { name: "rimage", value: "/rimage <select>"},
            { name: "rule34", value: "/rule34 <tag>"},
        )
        .setTimestamp()
        interaction.followUp({embeds: [embed]})


    },
};
