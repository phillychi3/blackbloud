const client = require("../index");

client.on("ready", () =>
    console.log(`${client.user.tag} 上線了!`)
);
