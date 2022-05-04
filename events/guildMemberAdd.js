const client = require("../index");


client.on("guildMemberAdd", async (member) => {

    const id = member.id;
    const name = member.user.username;
    const guildid = member.guild.id;
    
});

