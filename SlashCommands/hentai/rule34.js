const { Client, CommandInteraction, MessageEmbed } = require("discord.js");
const {inspect} = require("util");
const request = require('request');
module.exports = {
    name: "rule34",
    description: "image from rule34",
    type: 'CHAT_INPUT',// MESSAGE,USER(右鍵指令)
    perms: "",//權限
    ephemeral: false,//只有自己看見
    status: true,//啟用停用指令
    nsfw: true,
    options: [
        {
            name: 'tag',
            description: 'tag of image',
            type: 'STRING',
            required: true,
        },
    ],
    /**
     *
     * @param {Client} client
     * @param {CommandInteraction} interaction
     * @param {String[]} args
     */
    run: async (client, interaction, args) => {
        const name = interaction.options.getString("tag");
        request({url:`https://r34-json-api.herokuapp.com/posts?tags=${name}&limit=20`,json: true}, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            try{
            let im = body[Math.floor(body.length * Math.random())]
            //console.log(im)
            var url = im.file_url.substr(46,90)
            var embed = new MessageEmbed()
            .setImage(url)
            interaction.followUp({embeds: [embed]})
            }catch(e){
                console.log(e)
                interaction.followUp("no horny image")
            }
        }
        })

    },
};
