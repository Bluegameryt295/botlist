const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '#'

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`Blue Bot List.™`,"https://www.twitch.tv/S-F")
  console.log('')
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════]╗')
  console.log(' Bot Is Online')
  console.log('╚[════════════]╝')
  console.log('')
  console.log('')
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});

const devs = ['349095859859881984'];
const adminprefix = "#";
client.on('message', message => {
  var argresult = message.content.split(` `).slice(1).join(' ');
    if (!devs.includes(message.author.id)) return;
    
if (message.content.startsWith(adminprefix + 'setgame')) {
  client.user.setGame(argresult);
    message.channel.sendMessage(`**${argresult} تم تغيير بلاينق البوت إلى **`)
} else 
  if (message.content.startsWith(adminprefix + 'setname')) {
client.user.setUsername(argresult).then
    message.channel.sendMessage(`**${argresult}** : تم تغيير أسم البوت إلى`)
return message.reply("**لا يمكنك تغيير الاسم يجب عليك الانتظآر لمدة ساعتين . **");
} else
  if (message.content.startsWith(adminprefix + 'avatarr')) {
client.user.setAvatar(argresult);
  message.channel.sendMessage(`**${argresult}** : تم تغير صورة البوت`);
      } else     
if (message.content.startsWith(adminprefix + 'setT')) {
  client.user.setGame(argresult, "https://www.twitch.tv/idk");
    message.channel.sendMessage(`**تم تغيير تويتش البوت إلى  ${argresult}**`)
}
});















client.on('message', async message => {
    var command = message.content.toLowerCase().split(" ")[0];
    var prefix = '#';
    var name = '';
    var age = '';
    var fromwhere = '';
    var fa2dh = '';
    var filter = m => m.author.id === message.author.id;
    var subChannel = message.guild.channels.find(c => c.name === 'التقديمات');
   
    if(command == prefix + 'تقديم') {
        if(message.author.bot) return;
        if(message.channel.type === 'dm') return;
 
        var modRole = message.guild.roles.find(r => r.name === 'Developer');
       
        if(message.guild.member(message.author).roles.has(modRole.id)) return message.channel.send(':x: | معك الرتبة');// Alpha Codes
        if(!subChannel) return message.channel.send(':x: | يجب ان يتوفر روم اسمه `التقديمات`');// Alpha Codes
       
        message.channel.send(':timer: | **اي دي بوتك ؟**').then(msgS => {
            message.channel.awaitMessages(filter, { max: 1, time: 3000000, errors: ['time'] }).then(collected => {
                name = collected.first().content;
                collected.first().delete();
                msgS.edit(':timer: | **ما مميزاته ؟**').then(msgS => {
                    message.channel.awaitMessages(filter, { max: 1, time: 3000000, errors: ['time'] }).then(collected => {
                        age = collected.first().content;
                        collected.first().delete();
                        msgS.edit(':timer: | **كم عدد السيرفرات ؟**').then(msgS => {
                            message.channel.awaitMessages(filter, { max: 1, time: 3000000, errors: ['time'] }).then(collected => {
                                fromwhere = collected.first().content;
                                collected.first().delete();
                                msgS.edit(':timer: | **كم عدد المستخدمين ؟**').then(msgS => {
                                    message.channel.awaitMessages(filter, { max: 1, time: 3000000, errors: ['time'] }).then(collected => {
                                        fa2dh = collected.first().content;
                                        collected.first().delete();
                                       
                                        let embedS = new Discord.RichEmbed()
                                        .setAuthor(message.author.tag, message.author.avatarURL)
                                        .setThumbnail(message.author.avatarURL)
                                        .setDescription('**\n:no_entry: هل انت متأكد انك تريد التقديم؟**')
                                        .setColor('GREEN')
                                        .addField('ايدي البوت', name, true)
                                        .addField('مميزاته', age, true)
                                        .addField('عدد السيرفرات', fromwhere, true)
                                        .addField('عدد المستخدنين', fa2dh, true)
                                        .setTimestamp()
                                        .setFooter(message.guild.name, message.guild.iconURL)
                                       
                                        msgS.delete();
                                        message.channel.send(embedS).then(msgS => {
                                            msgS.react('✅').then(() => msgS.react('❎'))
                                           
                                            let yesSure = (reaction, user) => reaction.emoji.name === '✅'  && user.id === message.author.id;
                                            let no = (reaction, user) => reaction.emoji.name === '❎' && user.id === message.author.id;
                                           
                                            let yesSend = msgS.createReactionCollector(yesSure);
                                            let dontSend = msgS.createReactionCollector(no);
                                           
                                            yesSend.on('collect', r => {
                                                msgS.delete();
                                                message.channel.send(':white_check_mark: | تم تقديم طلبك بنجاح انتظر النتيجة في روم accept-deny').then(msg => msg.delete(5000));
                                               
                                                let subMsg = new Discord.RichEmbed()
                                                .setAuthor(message.author.tag, message.author.avatarURL)
                                                .setColor('GREEN')
                                                .setThumbnail(message.author.avatarURL)
                                                .addField('ايدي البوت', name)
                                                .addField('المميزات', age)
                                                .addField('عدد المستخدمين', fromwhere)
                                                .addField('عدد السيرفرات', fa2dh)
                                                .addField('اونر البوت', message.author)
                                                .addField('ايدي حسابه', message.author.id, true)
                                               
                                                subChannel.send(subMsg).then(msgS => {
                                                    msgS.react('✅').then(() => msgS.react('❎'))
                                                   
                                                    let accept = (reaction, user) => reaction.emoji.name === '✅'  && user.id === '349095859859881984';
                                                    let noAccept = (reaction, user) => reaction.emoji.name === '❎' && user.id === '349095859859881984';
                                                   
                                                    let acceptRe = msgS.createReactionCollector(accept);
                                                    let noAcceptRe = msgS.createReactionCollector(noAccept);
                                                   
                                                    acceptRe.on('collect', r => {
                                                        msgS.delete();
                                                        message.author.send(`:white_check_mark: | تم قبول بوتك بسيرفر **${message.guild.name}**`);
                                                        message.guild.member(message.author).addRole(modRole.id);
                                                        message.guild.channels.find(r => r.name === 'قبول-رفض').send(`:white_check_mark: | تم قبول بوتك [ <@${message.author.id}> ]`);
                                                    });
                                                    noAcceptRe.on('collect', r => {
                                                        msgS.delete();
                                                        message.author.send(`:x: | تم رفض بوتك **${message.guild.name}**`);
                                                        message.guild.channels.find(r => r.name === 'قبول-رفض').send(`:x: | تم رفض بوتك  [ <@${message.author.id}> ]`);
                                                    });
                                                })
                                            });
                                            dontSend.on('collect', r => {
                                                msgS.delete();
                                                message.channel.send(':x: | تم الغاء تقديمك');
                                            });
                                        })
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    }
});




client.login(process.env.BOT_TOKEN);
