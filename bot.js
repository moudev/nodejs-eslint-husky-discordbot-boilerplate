const BOT_PREFIX = '!m-'
const COMMANDS = ['hi', 'test']

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
