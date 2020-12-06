import { MessageEmbed } from 'discord.js'

const BOT_PREFIX = '!m-'
const COMMANDS = ['commands', 'reply', 'test', 'hi', 'tag', 'admin']
const OWNER_BOT = '37581017699083879151' // User discord id without <!@ >

export const validPrefix = (ctx) => {
  const content = ctx.content
  return content.slice(0, BOT_PREFIX.length) === BOT_PREFIX
}

export const extractCommandWithoutPrefix = (ctx) => {
  const content = ctx.content
  const splitContent = content.split(' ')
  return splitContent[0].slice(BOT_PREFIX.length)
}

export const existCommand = (ctx) => {
  const commandToFind = extractCommandWithoutPrefix(ctx)
  const commandFound = COMMANDS.find(c => c === commandToFind) !== undefined
  return commandFound
}

export const extractTextOfMessage = (ctx) => {
  const content = ctx.content
  const splitedContent = content.split(' ')

  splitedContent.splice(0, 1) // Removing bot-prefix item from the message array

  if (splitedContent.length === 0) return null // When only exists the bot-prefix

  return splitedContent
    .reduce((acc, curr) => `${acc} ${curr}`) // Joined message text without bot-prefix
}

export const commandsController = (ctx) => {
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

      const user = text.match(/(<@!\d+>)/gi)

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
        ctx.channel.send('You do not have permissions')
        return
      }

      const username = text.match(/(<@!\d+>)/gi)

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
