const botconfig = require("./botconfig.json");
const Discord = require("discord.js")
const prefix = "b!"
var nazwa = "Bobot"

const bot = new Discord.Client({disableEveryone: true})

bot.on("ready", async () => {
    bot.user.setActivity('wasze wiadomości',{ type: 'WATCHING'})
    console.log(`${nazwa} jest online! `)

});
bot.on("message", async message =>{
    if (message.author.bot) return;
 
    if (message.content.indexOf(prefix) !== 0) return;
    var args = message.content.slice(prefix.length).trim().split(/ +/g);
    var command = args.shift().toLowerCase()

    if(command == "say"){
        message.delete()

        if(message.member) return message.channel.send(message.content.slice(prefix.length+3))
        
}

if(command == "help"){
    const embed = new Discord.MessageEmbed()
    .setTitle("POMOC")
    .addField("KOMENDY", "say,pies,lol", true)
    .addField("Początek", "b!", true)
    .setColor("#1be01e")
    return message.channel.send(embed)
}

if(command == "lol"){
    const embed = new Discord.MessageEmbed()
    .setTitle("xd")
    .addField("co kolwiek", "lol")
    .addField("Początek", "b!", true)
    .setColor("#1be01e")
    return message.channel.send(embed)
}

if(command == "pies"){
    var pies = new Discord.MessageEmbed()
    .setTitle("hał 🐶")
    .setColor('#0cf067')
    var random = Math.floor(Math.random() * 3) + 1
    if (random == 1) {
        pies
        .setImage('https://static.polityka.pl/_resource/res/path/22/99/229904bf-a6ef-4889-bcab-cd16647d25ed_f1400x900')
    }
    if (random == 2) {
        pies
        .setImage('https://www.rp.pl/apps/pbcsi.dll/storyimage/RP/20200317/SWIAT/200319192/AR/0/AR-200319192.jpg?imageversion=Artykul&lastModified=')
    }
    if (random == 3) {
        pies
        .setImage('https://www.dworsierakow.pl/images/pakiety/twoj_pies.jpg')
    }
    if (random == 4) {
        pies
        .setImage('https://c.pxhere.com/photos/f7/e1/adorable_animal_bernedoodle_bernese_mountain_dog_breed_canine_close_up_cute-1539617.jpg')
    }
    message.channel.send(pies)

}


});
bot.login(botconfig.token)