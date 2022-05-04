const nhentai = require('kasu.nhentaiapi.js');
const { MessageEmbed } = require('discord.js');
const napi = new nhentai();
napi.url = "https://nhentai.net"
napi.IsDiscord = true;
napi.connection.start()


async function core(str){

    if(str.indexOf("nhentai.net") != -1){
        try{

        const data = await napi.getID(str.substr(22,6)).json()
        const embed = new MessageEmbed()
        .setAuthor({ name: 'BlackCloud', iconURL: 'https://cdn.discordapp.com/attachments/922733774633050112/969011518861623376/256.png', url: 'https://discord.gg/m6qKNZTaeR' })
        .setTitle("[" + data.id + "]" + data.title.origin)
        .setURL(data.url)
        .addFields(
            { name: "tags", value: data.tag_table.tag},
            { name: 'information', value: `\`\`\`favorites: ${data.favorites} \npages: ${data.number_pages} \nartist: ${data.tag_table.artist} \nuploaded: ${data.uploaded} \`\`\``},
        )
        .setThumbnail(data.images.cover)
        .setTimestamp()
        return embed
        }catch(e){
            return "you not enable discord anti horny"
        }

    }else{
        id = str.match(/[0-9]+/g)
        let newurl = "https://i.loli.best/"+id
        const embed = new MessageEmbed()
        .setAuthor({ name: 'BlackCloud', iconURL: 'https://cdn.discordapp.com/attachments/922733774633050112/969011518861623376/256.png', url: 'https://discord.gg/m6qKNZTaeR' })
        .setImage(newurl)
        .setTimestamp()
        return embed
    }

}

module.exports = core;