const { Client, CommandInteraction, MessageEmbed } = require("discord.js");
const request = require('request');
module.exports = {
    name: "image",
    description: "returns websocket ping",
    type: 'CHAT_INPUT',// MESSAGE,USER(右鍵指令)
    perms: "",//權限
    ephemeral: false,//只有自己看見
    status: true,//啟用停用指令
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
        request({url:`https://danbooru.donmai.us/posts.json?tags=${name}`,json: true}, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            try{
            let im = body[Math.floor(body.length * Math.random())]
            //console.log(im)
            var embed = new MessageEmbed()
            .setImage(im.large_file_url)
            interaction.followUp({embeds: [embed]})
            }catch(e){
                console.log(e)
                interaction.followUp("no horny image you tiny dick")
            }


            

        }
        })


    },
};
