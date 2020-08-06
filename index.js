const Discord = require('discord.js');
const client = new Discord.Client();


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
  


})


client.on('guildMemberAdd', member => {
  // Send the message to a designated channel on a server:
  const channel = member.guild.channels.cache.find(ch => ch.name === 'testeo-uwu');
  if (!channel) return;
  // Send the message, mentioning the member
  channel.send(`Bienvenido al servidor, ${member}`);
});



client.on('message', message => {
  // Ignore messages that aren't from a guild
  if (!message.guild) return;

  // If the message content starts with "!kick"
  if (message.content.startsWith('/kick')) {
    // Assuming we mention someone in the message, this will return the user
    const user = message.mentions.users.first();
    // If we have a user mentioned
    if (user) {
      // Now we get the member from the user
      const member = message.guild.member(user);
      // If the member is in the guild
      if (member) {
        /**
         * Kick the member
         * Make sure you run this on a member, not a user!
         * There are big differences between a user and a member
         */
        member
          .kick('Optional reason that will display in the audit logs')
          .then(() => {
            // We let the message author know we were able to kick the person
            message.reply(`Has hechado a ${user.tag}`);
          })
          .catch(err => {
            // An error happened
            // This is generally due to the bot not being able to kick the member,
            // either due to missing permissions or role hierarchy
            message.reply('No puedo hechar a este usuario!');
            // Log the error
            console.error(err);
          });
      } else {
        // The mentioned user isn't in this guild
        message.reply("El usuario no esta en el server!");
      }
      // Otherwise, if no user was mentioned
    } else {
      message.reply("Menciona a un usuario!");
    }
  }
});

client.on('message', message => {
  // Ignore messages that aren't from a guild
  if (!message.guild) return;

  // if the message content starts with "!ban"
  if (message.content.startsWith('/ban')) {
    // Assuming we mention someone in the message, this will return the user
    const user = message.mentions.users.first();
    // If we have a user mentioned
    if (user) {
      // Now we get the member from the user
      const member = message.guild.member(user);
      // If the member is in the guild
      if (member) {
        /**
         * Ban the member
         * Make sure you run this on a member, not a user!
         * There are big differences between a user and a member
         */
        member
          .ban({
            reason: 'They were bad!',
          })
          .then(() => {
            // We let the message author know we were able to ban the person
            message.reply(`has baneado a  ${user.tag}`);
          })
          .catch(err => {
            // An error happened
            // This is generally due to the bot not being able to ban the member,
            // either due to missing permissions or role hierarchy
            message.reply('no puedo banear a este miembro');
            // Log the error
            console.error(err);
          });
      } else {
        // The mentioned user isn't in this guild
        message.reply("el usuario no esta en el server!");
      }
    } else {
      // Otherwise, if no user was mentioned
      message.reply("menciona a un usuario!");
    }
  }
});




client.login('NzM5ODAwMDIyMzc1MjAyODk2.Xyfudg.i4rS8xPZiYq8YorrpK4oGAbeSbE');