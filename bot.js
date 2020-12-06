const BOT_PREFIX = '!m-'
const COMMANDS = ['reply', 'test', 'hi']

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
  // const text = extractTextOfMessage(ctx)

  switch (command) {
    case 'reply':
      ctx.reply('Reply message example')
      break
    case 'test':
      ctx.channel.send('`test command action`')
      break
    default:
      ctx.channel.send('`That command doesn\'t have an action`')
  }
}
