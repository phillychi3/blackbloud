const { Client, CommandInteraction, MessageEmbed } = require("discord.js");
const nhentai = require('kasu.nhentaiapi.js');
const napi = new nhentai();
napi.url = "https://nhentai.net"
napi.IsDiscord = true;
napi.connection.start()

module.exports = {
    name: "nhentai",
    description: "nhentai",
    type: 'CHAT_INPUT',// MESSAGE,USER(右鍵指令)
    perms: "",//權限
    ephemeral: false,//只有自己看見
    status: true,//啟用停用指令
    nsfw: true,
    options: [
        {
            name: 'number',
            description: 'god number',
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
        const number = interaction.options.getString("number"); 
        try{
            const data = await napi.getID(number).json()
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
                console.log(e)
                return "discord anti horny mute this"
            }
    },
};
