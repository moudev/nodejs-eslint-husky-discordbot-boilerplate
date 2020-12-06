const BOT_PREFIX = '!m-'

export const validPrefix = (ctx) => {
  const content = ctx.content
  return content.slice(0, BOT_PREFIX.length) === BOT_PREFIX
}
