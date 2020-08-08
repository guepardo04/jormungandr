const Discord = require('discord.js');
const client = new Discord.Client();
var Staff = "682605083334410338"
var STAFF = "741582315473469532"
var PREFIX = "/"

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setStatus('dnd');
});


client.on('message', async msg => {

  if (msg.content === '/ip') {
    msg.channel.send('la IP no se encuentra disponible en este momento, si cree que es un error, consulte a un miembro del staff');
  }

  if (msg.content === '/ayuda') {
    msg.channel.send('si necesitas ayuda puedes contactar con un staff para solventar tus dudas');
  }

  if (msg.content === '/clear') {
    channel.message.fetch({ limit: 100})
    
    console.log('mensajes eliminados');
  }

  if (msg.content === '/uptime') {
    msg.channel.send(client.uptime)
  }

  if (msg.content === '/uwu') {
    msg.channel.send('UwU');
  }


  if (msg.content === '/limpiar') {
    channel.messages.fetch({ limit: 10 })
  .then(messages => console.log(`Received ${messages.size} messages`))
  .catch(console.error);
  }
  


});


client.on('guildMemberAdd', member => {
  // Send the message to a designated channel on a server:
  const channel = member.guild.channels.cache.find(ch => ch.name === 'testeo-uwu');
  if (!channel) return;
  // Send the message, mentioning the member
  channel.send(`Bienvenido al servidor, ${member}`);
});

client.on('guildMemberAdd', member => {
  // Send the message to a designated channel on a server:
  const channel = member.guild.channels.cache.find(ch => ch.name === 'testeo-uwu');

});

client.on('message', message => {
  if (message.content.startsWith(PREFIX + 'ban')) {
    if (message.member.roles.cache.find(roles => roles.id === STAFF)) {
        const user = message.mentions.users.first();
        if (user) {
          const member = message.guild.member(user);
          if (member) {
            member
              .ban({
              reason: 'They were bad!',
              })
              .then(() => {
                message.channel.send("has baneado a <@" + user + ">");
              })
              .catch(err => {
                message.channel.send('no puedo banear a este miembro');
                console.error(err);
              });
          } else {
            message.channel.send("el usuario no esta en el server!");
          }
        } else {
          message.channel.send("menciona a un usuario!");
        }
      } else {
      message.channel.send('no tienes el permiso necesario para banear usuarios')
      }
  }});





client.login('NzQxMzcxNTQ3MjMwNTM1ODIx.Xy2mDg.8b__S4k4lfhI6J0Dfbdm1Uuax0M');
