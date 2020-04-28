const Discord = require("discord.js");
const client = new Discord.Client();

client.on('message', async message => {
  if (message.author.bot) return;

  if (message.content.includes("https://r.agar.io/?party=")) {
;
message.delete();
  let args = message.content.split(" ").slice(0);
  
 
message.channel.send(`تم ارسال البارتي في شات <#691015275247697930>
<@!${message.author.id}>
`).then(m => m.delete({ timeout: 5000 }));


    const embed = new Discord.MessageEmbed()
    .setThumbnail(message.author.AvatarURL)
     
  .setAuthor(message.author.username, message.author.displayAvatarURL({ dynamic: true, size: 512 }).replace('webp', 'png'))
    .setDescription(args.join("  "))
    .setFooter('Power Server..')
    .addField("تم ارسال البارتي من قبل", `<@!${message.author.id}>`, true)
    .setColor('#736F6E')
    client.channels.cache.get("691015275247697930").send(embed);
    message.delete();
  }
});

client.login('Njk4MTUxNDkwNTkzODgyMjMz.XqejyA.dAYrh9p53QH7ur8RD1hVdbsCvnE');
