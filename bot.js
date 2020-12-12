import { MessageEmbed } from 'discord.js'

const BOT_PREFIX = '!m-'
const COMMANDS = ['commands', 'reply', 'test', 'hi', 'tag', 'admin']
const OWNER_BOT = '37581017699083879151' // User discord id without <!@ >

const validatePrefix = (ctx) => {
  const content = ctx.content
  return content.slice(0, BOT_PREFIX.length) === BOT_PREFIX
}

const extractCommandWithoutPrefix = (ctx) => {
  const content = ctx.content
  const splittedContent = content.split(' ')
  return splittedContent[0].slice(BOT_PREFIX.length)
}

const existCommand = (ctx) => {
  const commandToFind = extractCommandWithoutPrefix(ctx)
  const commandFound = COMMANDS.find(c => c === commandToFind) !== undefined
  return commandFound
}

const extractTextOfMessage = (ctx) => {
  const content = ctx.content
  const splittedContent = content.split(' ')

  splittedContent.splice(0, 1) // Removing bot-prefix item from the message array

  if (splittedContent.length === 0) return null // When only exists the bot-prefix

  return splittedContent
    .reduce((acc, curr) => `${acc} ${curr}`) // Joined message text without bot-prefix
}

const extractUsername = (text) => {
  return text.match(/(<@!\d+>)/gi)
}

const commandsController = (ctx) => {
  const command = extractCommandWithoutPrefix(ctx)
  const text = extractTextOfMessage(ctx)

  switch (command) {
    case 'commands': {
      const list = `
        \`!m-commands\`: Available commands list
        \`!m-reply\`: Reply a message
        \`!m-test\`: Sends a message of example
        \`!m-hi\`: 'Command without an action specified'
        \`!m-tag\`: Sends a "hello" to the first user tagged
        \`!m-admin\`: Only the bot owner can sends a "hello" to the first user tagged
      `
      ctx.channel.send(
        new MessageEmbed()
          .setTitle('Commands list')
          .setColor('WHITE')
          .setDescription(list)
      )
      break
    }
    case 'reply': {
      ctx.reply('Reply message example')
      break
    }
    case 'test': {
      ctx.channel.send('`test command action`')
      break
    }
    case 'tag': {
      if (text === null || text === undefined) {
        ctx.channel.send('Sorry, something is wrong with the tag')
        return
      }

      const user = extractUsername(text)

      if (user === null) {
        ctx.channel.send("Sorry, maybe it's not an user")
        return
      }

      const helloMessage = `Hi, ${user[0]}, how are you? Me, a basic user activated this action`
      ctx.channel.send(helloMessage)
      break
    }
    case 'admin': {
      if (text === null || text === undefined) {
        ctx.channel.send('Sorry, something is wrong with the tag')
        return
      }

      const { author: { id: authorId } } = ctx
      if (authorId !== OWNER_BOT) {
        ctx.channel.send("You don't have permissions")
        return
      }

      const username = extractUsername(text)

      if (username === null) {
        ctx.channel.send("Sorry, maybe it's not an user")
        return
      }

      const basicMessage = `Hi, ${username[0]}, how are you? Me, the bot owner activated this action`
      ctx.channel.send(basicMessage)
      break
    }
    default: {
      ctx.channel.send('`That command doesn\'t have an action`')
    }
  }
}

export {
  validatePrefix,
  existCommand,
  commandsController
}
