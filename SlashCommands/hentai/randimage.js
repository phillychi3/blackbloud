const { Client, CommandInteraction, MessageEmbed } = require("discord.js");
const {inspect} = require("util");
const request = require('request');
module.exports = {
    name: "rimage",
    description: "random image",
    type: 'CHAT_INPUT',// MESSAGE,USER(右鍵指令)
    perms: "",//權限
    ephemeral: false,//只有自己看見
    status: true,//啟用停用指令
    nsfw: true,
    options: [
        {
            name: 'tentacle',
            description: '處手 tentacle',
            type: 'SUB_COMMAND',
        },
        {
            name:'neko',
            description:'貓娘 neko',
            type:'SUB_COMMAND',
        },
        {
            name:'futa',
            description:'扶他 futa',
            type:'SUB_COMMAND',
        },
        {
            name:'bondage',
            description:'緊縛 bondage',
            type:'SUB_COMMAND',
        },
        {
            name:'swimsuit',
            description:'死庫水 swimsuit',
            type:'SUB_COMMAND',
        },
        {
            name:'yaoi',
            description:'甲 yaoi',
            type:'SUB_COMMAND',
        },
        {
            name:'yandere',
            description:'病嬌 yandere',
            type:'SUB_COMMAND',
        },
        {
            name:'hololive',
            description:'hololive',
            type:'SUB_COMMAND',
        },
        {
            name:'arknights',
            description:'明日方舟 arknights',
            type:'SUB_COMMAND',
        },
        {
            name:'genshin_impact',
            description:'原神 genshin impact',
            type:'SUB_COMMAND',
        },

    ],
        

    /**
     *
     * @param {Client} client
     * @param {CommandInteraction} interaction
     * @param {String[]} args
     */
    run: async (client, interaction, args) => {
        const rand = Math.floor(Math.random() * 2)
        var cmd1 = interaction.options.getSubcommand();
        if(cmd1=='neko'){
            cmd1='cat_ears'
        }

        if(rand == 0){
            request({url:`https://danbooru.donmai.us/posts.json?tags=${cmd1}`,json: true}, function (error, response, body) {
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
        }else if(rand == 1){
            request({url:`https://r34-json-api.herokuapp.com/posts?tags=${cmd1}&limit=20`,json: true}, function (error, response, body) {
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
        }else if(rand == 2){
        
        }


    },
};
