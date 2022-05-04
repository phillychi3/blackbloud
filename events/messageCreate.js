const client = require("../index");
const url = require('url');
const core = require("../cmds/hentaicore.js");


const urls = ["www.pixiv.net","nhentai.net"]
client.on("messageCreate", async (message) => {
    if (
        !message.guild
    )
        return;

    const content = message.content;
    const channel = message.channel;
    const userid = message.author.id;
    const msgid = message.id;

    const msg = {
        content,
        channel,
        userid,
        msgid
    }
    if(urls.includes(url.parse(msg.content).host)){
        const embed = await core(msg.content)
        console.log(`[${new Date().getFullYear()}/${new Date().getMonth()+1}/${new Date().getDate()} ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}] ${msg.userid} ${msg.content} => ${message.guild.name}:${message.channel.name}`)
        msg.channel.send({ embeds: [embed] });

    }
    

});
