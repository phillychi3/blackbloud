const { Client, CommandInteraction, MessageEmbed } = require("discord.js");
const request = require('request');

const disabletag=[loli,shota]

module.exports = {
    name: "image",
    description: "image",
    type: 'CHAT_INPUT',// MESSAGE,USER(右鍵指令)
    perms: "",//權限
    ephemeral: false,//只有自己看見
    status: true,//啟用停用指令
    nsfw: true,
    options: [
        {
            name: 'tag',
            description: 'this tag of image',
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
        if(disabletag.includes(name)){
            interaction.reply("tag is disable from discord")
            return  
        }
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
                interaction.followUp("no horny image")
            }

        }
        })
    },
};
