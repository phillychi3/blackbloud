const client = require("../index");
const { MessageEmbed } = require('discord.js');

client.on("interactionCreate", async (interaction) => {
    const now = new Date();
    // Slash Command Handling
    if (interaction.isCommand()) {

        const cmd = client.slashCommands.get(interaction.commandName);
        if(cmd.nsfw) {
            if(!interaction.channel.nsfw) return interaction.reply({embeds: [new MessageEmbed().setColor('RED').setDescription(`❌ 你需要在NSFW頻道執行此指令`)]}).catch((e) => {console.log(e)});
        }
        if (!cmd) return interaction.followUp({embeds: [new MessageEmbed().setColor('RED').setDescription(`❌ 執行指令時發生錯誤`)]}).catch();
            if (cmd.ephemeral) {
                await interaction.deferReply({ ephemeral: true }).catch();
            } else {
                await interaction.deferReply({ ephemeral: false }).catch();
            };

        const args = [];

        for (let option of interaction.options.data) {
            if (option.type === "SUB_COMMAND") {
                if (option.name) args.push(option.name);
                option.options?.forEach((x) => {
                    if (x.value) args.push(x.value);
                });
            } else if (option.value) args.push(option.value);
        }
        interaction.member = interaction.guild.members.cache.get(interaction.user.id);
        if(!interaction.member.permissions.has(cmd.perms || [])) return interaction.followUp({embeds: [new MessageEmbed().setColor('RED').setDescription(`❌ You have no permission executing this command, need: \`${cmd.perms.toString()}\``)]}).catch();
        if(cmd.status === false && !client.config.ownerIds.includes(interaction.member.user.id)) return interaction.followUp({embeds: [new MessageEmbed().setColor('RED').setDescription(`❌ This command has been disabled temporary`)]}).catch();
        try{
            console.log(`[${now.getFullYear()}/${now.getMonth()+1}/${now.getDate()} ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}] ${interaction.user.tag} ${cmd.name} ${interaction.options?.getSubcommandGroup(false) || ""}${interaction.options?.getSubcommand(false) || ""} => ${interaction.guild.name}:${interaction.channel.name}`);
            if(cmd.status === false && client.config.ownerIds.includes(interaction.member.user.id)) interaction.followUp({embeds: [new MessageEmbed().setColor('RED').setDescription(`🐞 This command has been disabled temporary(debug mode)`)]}).catch();
            await cmd.run(client, interaction, args);
        } catch(error) {
            console.error(error);
            return interaction.followUp({embeds: [new MessageEmbed().setColor('RED').setDescription(`❌ An error occured while executing the command:\n \`${error.message}\``)]}).catch();
        };
    };

    // Context Menu Handling
    if (interaction.isContextMenu()) {
        const command = client.slashCommands.get(interaction.commandName);
        if(command.ephemeral) {
            await interaction.deferReply({ ephemeral: true }).catch();
        } else {
            await interaction.deferReply({ ephemeral: false }).catch();
        };
            try{
                console.log(`${interaction.user.tag} ${command.name} => ${interaction.guild.name}:${interaction.channel.name}`);
                await command.run(client, interaction);
            } catch(error) {
                console.error(error);
                return interaction.followUp({embeds: [new MessageEmbed().setColor('RED').setDescription(`❌ An error occured while executing the command:\n \`${error.message}\``)]}).catch();
            };
    };
});
